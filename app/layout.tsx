import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAFS – Sociedade de Apoio à Família Sobralense",
  description:
    "Transformando vidas sobralenses desde 18 de janeiro de 1983. " +
    "Atuamos no bairro Dom José, Sobral-CE.",
  robots: { index: true, follow: true },
  other: { "format-detection": "telephone=no" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/*
          crossOrigin="anonymous" é obrigatório para que o browser aplique
          a política de CORS corretamente ao buscar fontes do gstatic.
        */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          SRI (Subresource Integrity) não é aplicável a @import CSS dinâmico
          do Google Fonts porque o conteúdo varia por User-Agent.
          Mitigação: o CSP limita font-src estritamente a fonts.gstatic.com.
          Para máxima segurança em produção, auto-hospedar as fontes eliminaria
          essa dependência externa completamente.
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>{children}</body>
    </html>
  );
}
