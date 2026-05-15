import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
    subsets: ["latin"],
    });

    const geistMono = Geist_Mono({
      variable: "--font-geist-mono",
        subsets: ["latin"],
        });

        // Konfigurasi SEO & Metadata
        export const metadata: Metadata = {
          title: "Rumah Tropis | Spesialis Modern Tropical Luxury - Desain & Bangun",
          description: "Rumah Tropis di bawah PT Tata Ruang Kota menghadirkan layanan desain, bangun, dan renovasi spesialis Modern Tropical Luxury untuk investasi properti bernilai tinggi.",
          keywords: [
              "Rumah Tropis", 
              "Modern Tropical Luxury", 
              "Arsitek Jakarta Selatan", 
              "Kontraktor Rumah Mewah", 
              "Investasi Properti", 
              "Jasa Desain Arsitektur",
              "PT Tata Ruang Kota"
          ],
          authors: [{ name: "Rumah Tropis" }],
          openGraph: {
          title: "Rumah Tropis | Ciptakan Bangunan Bernilai Tinggi Gaya Tropis",
          description: "Layanan desain dan konstruksi presisi untuk mengamankan nilai investasi aset properti Anda.",
          url: "https://rumahtropis.co.id",
          siteName: "Rumah Tropis",
          locale: "id_ID",
          type: "website",
          },
          twitter: {
           card: "summary_large_image",
            title: "Rumah Tropis | Modern Tropical Luxury",
             description: "Desain, bangun, dan renovasi aset properti dengan spesialisasi gaya tropis premium.",
              },
            robots: {
              index: true,
              follow: true,
             }
              };

              export default function RootLayout({
                children,
              }: Readonly<{
                children: React.ReactNode;
              }>) {
                return (
                  <html
                    lang="id"
                    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
                  >
                    {/* Warna Background diganti ke #050505 biar lebih Dark Premium */}
                    <body className="min-h-full flex flex-col bg-[#050505] text-[#F5F2ED] selection:bg-[#B88A6E]/30">
                      {children}
                    </body>
                  </html>
                );
              }                                                                            