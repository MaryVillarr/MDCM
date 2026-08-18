import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mundo de COLOR Marvi",
  description: "Libros para colorear, crear y reconectar a cualquier edad. Haz un mundo de color para ti.",
  other: { "codex-preview": "development" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
