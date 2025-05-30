import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pierre Jovanovic - Revue de Presse",
  description:
    "Analyses expertes et décryptages quotidiens sur l'économie, la finance et les marchés mondiaux par Pierre Jovanovic",
  openGraph: {
    title: "Pierre Jovanovic - Revue de Presse",
    description:
      "Analyses expertes et décryptages quotidiens sur l'économie, la finance et les marchés mondiaux par Pierre Jovanovic",
    images: [
      {
        url: "/jovanovics.jpg",
        width: 1200,
        height: 630,
        alt: "Pierre Jovanovic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierre Jovanovic - Revue de Presse",
    description:
      "Analyses expertes et décryptages quotidiens sur l'économie, la finance et les marchés mondiaux par Pierre Jovanovic",
    images: ["/jovanovics.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
