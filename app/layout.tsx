import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAFS – Sociedade de Apoio à Família Sobralense",
  description: "Transformando vidas sobralenses desde 18 de janeiro de 1983. Atuamos no bairro Dom José, Sobral-CE, levando bem-estar, educação e cidadania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
