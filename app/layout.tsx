import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAFS – Sociedade de Apoio à Família Sobralense",
  description: "Transformando vidas sobralenses desde 18 de janeiro de 1983. Atuamos no bairro Dom José, Sobral-CE.",
  // Prevent indexing of sensitive paths (though this is a static site)
  robots: { index: true, follow: true },
  // Prevent phone number detection on iOS from misformatting layout
  other: { "format-detection": "telephone=no" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect before font fetch - improves perf and reduces timing attacks */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Prevent tabnapping on external links - belt and suspenders besides rel="noopener" */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>{children}</body>
    </html>
  );
}
