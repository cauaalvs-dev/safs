import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sociedadesafs.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SAFS – Sociedade de Apoio à Família Sobralense",
  description:
    "Transformando vidas sobralenses desde 18 de janeiro de 1983. " +
    "Atuamos no bairro Dom José, Sobral-CE com projetos de educação, saúde e cidadania.",
  keywords: [
    "SAFS", "Sociedade de Apoio à Família Sobralense",
    "ONG Sobral", "assistência social Sobral", "Dom José Sobral",
    "projetos sociais Ceará",
  ],
  authors: [{ name: "SAFS" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "SAFS",
    title: "SAFS – Sociedade de Apoio à Família Sobralense",
    description:
      "Transformando vidas sobralenses desde 1983. Projetos sociais no bairro Dom José, Sobral-CE.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SAFS – Sociedade de Apoio à Família Sobralense" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFS – Sociedade de Apoio à Família Sobralense",
    description: "Transformando vidas sobralenses desde 1983.",
    images: ["/og-image.jpg"],
  },
  other: { "format-detection": "telephone=no" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
