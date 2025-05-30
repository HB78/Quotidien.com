import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Revue de Presse - Pierre Jovanovic",
  description: "Revue de presse internationale économique depuis 2008",
};

export default function JovanovicLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
