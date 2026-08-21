import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mundo de COLOR Marvi",
  description: "Colecciones digitales, ediciones físicas y diseños personalizados para bebés, niños, jóvenes, adultos y docentes.",
  openGraph: {
    title: "Mundo de COLOR Marvi",
    description: "Todo un mundo para pintar. Colecciones y experiencias personalizadas para todas las edades.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
