
# Blueprint: Rombak Total Landing Page Rumah Tropis

## 1. Ringkasan Tujuan (Overview)

Dokumen ini merinci rencana untuk membangun ulang secara total landing page Rumah Tropis. Tujuannya adalah menciptakan sebuah landing page yang premium, modern, bersih, dan berfokus pada konversi tinggi, sesuai dengan brief yang sangat detail dari klien. Proyek ini akan mengadopsi vibe "Modern Tropical Luxury" dengan skema warna dominan gelap (dark) dan putih, sambil memastikan **semua aset media yang ada (gambar, video, logo) tetap dipertahankan tanpa ada yang dihapus.**

## 2. Desain, Gaya, dan Fitur Aplikasi

### 2.1. Filosofi Desain & Gaya Visual
- **Mood & Feel:** Premium, luxury, clean, editorial, modern tropical, high-ticket, trustworthy, calm, professional, dan berorientasi pada investasi.
- **Layout:** Banyak whitespace, spacing antar seksi yang lega, hirarki visual yang jelas dengan tipografi tegas, dan layout grid/card yang modern.
- **Skema Warna (Color Palette):**
- **Dominan (60%):** Warna gelap (Deep Black `#050505`, Soft Black `#0B0B0B`, Charcoal `#111111`).
- **Sekunder (25%):** Warna terang (White `#FFFFFF`, Warm Off White `#FEF9ED`).
- **Teks Netral (10%):** Abu-abu netral (`#A7A7A7`).
- **Aksen (5%):** Warna brand untuk detail kecil (Premium Copper-Bronze `#B88A6E`, Sandy Travertine `#F5E6D3`, Aged Teak `#4D3C2F`, Rainforest Moss `#5B6A56`, Filtered Sunbeam `#FEF9ED`).
- **Tipografi:** Kombinasi font display/serif yang elegan untuk headline dan font sans-serif yang bersih untuk body text. Ukuran font besar dan tegas, terutama pada headline.
- **Komponen:** Sudut rounded yang halus, border tipis, efek glassmorphism subtil, shadow lembut, dan animasi hover yang premium.
- **Aset Media:** Semua gambar dan video yang ada akan dipertahankan. Gambar akan digunakan dengan `object-fit: cover` dan lazy loading. Placeholder premium akan dibuat jika aset belum tersedia untuk sebuah seksi. **Tidak ada aset yang akan dihapus.**
- **Animasi:** Animasi subtil dan premium seperti fade-up-on-scroll, hover effects, dan transisi yang smooth.

### 2.2. Fitur Fungsional & Interaktivitas
- **Navigasi Sticky:** Navbar akan selalu terlihat di atas, berubah dari transparan menjadi solid saat di-scroll.
- **Smooth Scroll:** Link navigasi akan mengarahkan pengguna ke seksi yang relevan dengan animasi scroll yang halus.
- **Responsive Design:** Tampilan akan dioptimalkan untuk Desktop, Laptop, Tablet, dan terutama Mobile.
- **CTA ke WhatsApp:** Semua tombol "Konsultasi Gratis" akan mengarah ke `https://wa.me/628138969965`.
- **Form Kontak (jika dibuat):** Akan mengumpulkan data pengguna dan membukanya di WhatsApp dengan format pesan otomatis.
- **Konten Interaktif:** Penggunaan accordion untuk FAQ, tabs atau expandable cards untuk seksi Layanan yang detail.
- **SEO & Performa:** Metadata lengkap (Title, Description, Keywords) akan diimplementasikan. Penggunaan HTML semantik, alt text, lazy loading, dan praktik terbaik performa lainnya.

## 3. Rencana Eksekusi (Current Request)

### URGENT UI/UX FIX - FIX MISSING STYLES & UPGRADE HERO + NAVBAR

**PROBLEM TO FIX:**
Tampilan website saat ini terlihat rusak atau tidak memuat CSS (seperti unstyled HTML). Anda harus memastikan seluruh komponen menggunakan utility classes Tailwind CSS standar yang valid agar tampilannya langsung aktif secara visual.

**DESIGN SYSTEM (LUXURY MINIMALIST DARK TEMA):**
- Background Utama: Hitam pekat murni (`#050505`)
- Background Card/Surface: Abu-abu gelap (`#0D0D0D`) atau (`#121212`)
- Warna Utama Teks: Putih bersih murni (`#FFFFFF`) untuk Headline tajam.
- Warna Sub-Teks: Abu-abu terang (`#A3A3A3`) untuk kenyamanan membaca.
- Surgical Accent Color: Luxury Gold (`#C5A880`) hanya untuk elemen pemikat visual (ikon, active state, highlight, border hover).

**TUGAS UTAMA ANDA:**

1. **BUAT KAN BRAND NEW PREMIUM NAVBAR:**
- Posisi: `fixed top-0 left-0 w-full z-50` dengan efek `backdrop-blur-md bg-black/40` dan border bawah tipis `border-white/5`.
- Sisi Kiri: Logo teks "RUMAH TROPIS" menggunakan font serif mewah, semi-bold, uppercase, tracking-widest, dengan warna putih bersih.
- Sisi Tengah: Menu navigasi minimalis (Home, Qualifications, Services, Perks, Portfolio, Pricing, FAQ). Teks berukuran kecil (`text-xs` atau `text-sm`), uppercase, tracking-wider, warna `#A3A3A3` yang akan berubah menjadi putih murni atau memunculkan underline tipis warna Gold (`#C5A880`) saat di-hover.
- Sisi Kanan: Tombol CTA kecil yang efisien "Konsultasi" dengan border tipis murni putih atau solid gold.

2. **PERBAIKI & UPGRADE HERO SECTION MENJADI SUPER MEWAH:**
- Pastikan padding atas disesuaikan agar tidak tertutup Navbar (`pt-32` atau `pt-40`).
- Copywriting WAJIB 100% ASLI sesuai teks ini (JANGAN DIUBAH SAMA SEKALI):
"CIPTAKAN BANGUNAN BERNILAI TINGGI LEWAT PESONA GAYA TROPIS. DETAIL DESAIN DAN KONSTRUKSI AMANKAN NILAI INVESTASI."
- Susun hierarki teks: Baris pertama buat menjadi Headline raksasa (`text-5xl` sampai `text-7xl`), font serif, uppercase, bold, warna putih bersih. Baris kedua ("DETAIL DESAIN...") buat menjadi sub-headline yang anggun dengan font italic, warna abu-abu redup atau gold tipis.
- Elemen Video Singkat: Bungkus asset video `/videos/IMG_8223.mp4` ke dalam container bento box beraspek rasio sinematik (`aspect-video` atau `aspect-[21/9]`), beri `rounded-2xl`, `border border-white/10`, dan efek bayangan radial di belakangnya agar video terlihat "menyala" di atas background hitam.
- Tombol CTA Utama: Buat tombol melengkung penuh (`rounded-full`) warna putih bersih dengan teks hitam tebal di dalamnya yang bertuliskan "Konsultasi Gratis". Berikan efek animasi hover transisi mulus berubah menjadi warna Gold (`#C5A880`).
