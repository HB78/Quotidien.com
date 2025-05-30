import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Revue de Presse - Pierre Jovanovic",
  description: "Revue de presse internationale économique depuis 2008",
};

export default function JovanovicLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
