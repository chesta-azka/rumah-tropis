import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rumah Tropis | Spesialis Modern Tropical Luxury - Desain & Bangun",
  description: "Rumah Tropis di bawah PT Tata Ruang Kota menghadirkan layanan desain, bangun, dan renovasi spesialis Modern Tropical Luxury untuk investasi properti bernilai tinggi.",
  keywords: [
    "Rumah Tropis", 
    "Modern Tropical Luxury", 
    "Arsitek Jakarta Selatan", 
    "Kontraktor Rumah Mewah", 
    "PT Tata Ruang Kota"
  ],
  authors: [{ name: "Rumah Tropis" }],

  icons: {
    icon: "/images/logo-rumah-tropiss.webp", 
  },
  openGraph: {
    title: "Rumah Tropis | Ciptakan Bangunan Bernilai Tinggi Gaya Tropis",
    description: "Layanan desain dan konstruksi presisi untuk mengamankan nilai investasi aset properti Anda.",
    url: "https://rumahtropis.co.id",
    siteName: "Rumah Tropis",
    images: [
      {
        url: "/images/logo-rumah-tropiss.webp",
        width: 1200,
        height: 630,
        alt: "Rumah Tropis Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bark text-cream font-sans antialiased selection:bg-gold/30">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}