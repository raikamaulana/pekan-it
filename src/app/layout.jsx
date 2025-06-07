import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StairTransition from "@/components/curve/StairTransition";
import PageTransition from "@/components/curve/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxanium = Geist({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pekan IT ー HIMTIKA ー Himpunan Mahasiswa Informatika UNSIKA",
  description: "Event besar tahunan dari HIMTIKA UNSIKA yang menghadirkan seminar, workshop, dan kompetisi.",
  keywords: [
    "HIMTIKA", "Pekan IT", "Himpunan Mahasiswa Informatika", "UNSIKA", "Informatika"
  ],
  authors: [{ name: "HIMTIKA Unsika", url: "https://himtika.cs.unsika.ac.id" }],
  icons: {
    icon: "/logo/logo-pekan-it.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <StairTransition></StairTransition>
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
