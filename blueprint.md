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

Rencana berikut akan dieksekusi untuk memenuhi permintaan pembangunan ulang landing page.

### 3.1. Analisa & Persiapan Awal
1.  **Scan Proyek:** Melakukan pemindaian menyeluruh pada struktur proyek untuk mengidentifikasi semua file kode dan aset media.
2.  **Verifikasi Aturan Aset:** Mengkonfirmasi kembali bahwa tidak ada aset media dari folder `public/` (images, videos, etc.) yang akan dihapus, diubah namanya, atau dipindahkan. Semua path aset akan dipertahankan.
3.  **Setup Environment:** Menyiapkan file styling global dan konfigurasi Tailwind CSS untuk mencocokkan palet warna dan tipografi yang baru.

### 3.2. Tahapan Pembangunan Komponen & Seksi
Berikut adalah urutan pembangunan 17 seksi utama untuk landing page:

1.  **Timpa Komponen Lama:** Timpa konten file komponen yang ada dengan kode baru untuk membangun 17 seksi. **Tidak ada file yang akan dihapus**, hanya isinya yang akan diperbarui untuk mencocokkan desain baru.
2.  **Buat `Navbar`:** Membangun komponen Navbar yang sticky dengan menu dan tombol CTA.
3.  **Buat `Hero` Section:** Mendesain seksi Hero dengan layout 2 kolom, H1, subheadline, CTA, dan gambar/video dari aset yang ada.
4.  **Buat `Video/Showreel` Section:** Membuat seksi untuk menampilkan video utama.
5.  **Buat `Ideal Client` Section:** ("Pilih Jika / Jangan Pilih Jika") dengan layout 2 card.
6.  **Buat `Kenapa Rumah Tropis` Section:** Mendesain seksi editorial dengan 3 alasan utama.
7.  **Buat `Social Proof/Stats` Section:** Seksi dengan statistik kunci dan count-up animation.
8.  **Buat `Layanan` Section:** Menggunakan layout interaktif (tabs/accordion) untuk detail layanan.
9.  **Buat `Fasilitas Eksklusif` Section:** Menampilkan fasilitas proyek.
10. **Buat `Decision/Pilih Aset` Section:** Membantu pengguna membuat keputusan.
11. **Buat `Portfolio` Section:** Menampilkan portofolio proyek menggunakan gambar yang ada.
12. **Buat `Testimonial` Section:** Menampilkan testimoni klien.
13. **Buat `Pricing` Section:** Mendesain kartu harga untuk paket layanan.
14. **Buat `Promo Tahap Pembangunan` Section:** Seksi untuk promo khusus.
15. **Buat `Quote` Section:** Seksi kutipan inspiratif.
16. **Buat `FAQ` Section:** Menggunakan komponen accordion.
17. **Buat `Final CTA` dan `Footer`:** Mendesain CTA terakhir dan footer lengkap.

### 3.3. Integrasi & Finalisasi
1.  **Integrasi ke `page.tsx`:** Menggabungkan semua komponen yang telah dibuat ke dalam file `src/app/page.tsx` sesuai urutan yang benar.
2.  **Styling & Animasi:** Menerapkan styling global, tipografi, dan animasi `framer-motion` untuk fade-up-on-scroll.
3.  **SEO & Metadata:** Menambahkan metadata (Title, Description, Keywords) ke `src/app/layout.tsx`.
4.  **Linting & Cek Error:** Menjalankan `npm run lint -- --fix` untuk memastikan kualitas kode dan memeriksa console untuk setiap error runtime atau broken path.
5.  **Review & Konfirmasi:** Melakukan review akhir pada tampilan di berbagai perangkat dan mengkonfirmasi bahwa semua persyaratan telah terpenuhi.
