import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    const csp = [
      "default-src 'self'",
      // unsafe-inline é necessário para Next.js 15+ (hydration scripts).
      // A mitigação correta exigiria middleware de nonce — aceito como risco
      // controlado nesta arquitetura estática sem dados de usuário no servidor.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // data: apenas para imagens inline do Next.js Image; blob: para canvas
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      // frame-ancestors substitui X-Frame-Options em browsers modernos
      "frame-ancestors 'none'",
      "base-uri 'self'",
      // mailto: necessário para o formulário de contato client-side
      "form-action 'self' mailto:",
      // Bloqueia recursos de workers não originados do próprio domínio
      "worker-src 'none'",
      // Bloqueia manifests externos
      "manifest-src 'self'",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          // Redundante com frame-ancestors do CSP, mas mantido para IE11/legados
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          // Legado — browsers modernos ignoram em favor do CSP
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          // 2 anos + preload — só ative após confirmar que HTTPS funciona 100%
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Desativa APIs de browser não utilizadas — reduz superfície de ataque
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()" },
          { key: "Content-Security-Policy",   value: csp },
          // Impede que o browser cache respostas de erro com dados sensíveis
          { key: "Cache-Control",             value: "public, max-age=0, must-revalidate" },
          // Remove header que expõe stack tecnológico
          { key: "X-Powered-By",             value: "" },
        ],
      },
      // Assets estáticos podem ter cache agressivo — são imutáveis por hash
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
