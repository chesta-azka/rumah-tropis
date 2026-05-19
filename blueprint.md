# Blueprint Aplikasi: Rumah Tropis

## 1. Ringkasan Proyek

Aplikasi ini adalah sebuah landing page untuk "Rumah Tropis", sebuah perusahaan yang bergerak di bidang desain dan konstruksi arsitektur dengan spesialisasi gaya *Modern Tropical Luxury*. Tujuannya adalah untuk menampilkan portofolio, menjelaskan layanan, dan menarik klien potensial melalui desain web yang profesional, modern, dan meyakinkan.

## 2. Dokumentasi Desain & Fitur (Versi Saat Ini)

### A. Gaya & Desain Visual

- **Tipografi:** Menggunakan kombinasi font `Playfair Display` untuk judul (serif, elegan) dan `Inter` untuk teks (sans-serif, modern dan mudah dibaca).
- **Palet Warna:** Skema warna utama terdiri dari:
    - Latar Belakang (`bark`): Coklat sangat gelap (#1E1A17).
    - Teks (`cream`): Warna krem/putih pudar (#F5F5F5).
    - Aksen (`gold`): Warna emas (#C5A880) untuk elemen penting dan sorotan.
- **Layout:** Struktur yang bersih, modern, dan responsif menggunakan TailwindCSS. Konten diatur dalam beberapa bagian (sections) yang jelas.
- **Ikonografi:** Menggunakan ikon dari `lucide-react` untuk simbol yang jelas dan minimalis.

### B. Komponen & Fitur yang Sudah Diimplementasikan

- **Navbar:** Navigasi utama yang *sticky* di bagian atas, berisi logo dan tautan ke bagian-bagian halaman.
- **Hero Section:** Bagian pembuka yang besar dengan judul utama yang menarik perhatian.
- **Stats Section:** Menampilkan statistik kunci perusahaan dalam angka.
- **Why Us Section:** Menjelaskan keunggulan dan nilai jual unik dari Rumah Tropis.
- **Portfolio Section:** Galeri untuk menampilkan proyek-proyek yang pernah dikerjakan.
- **Process Section:** Menjelaskan alur kerja atau proses dari konsultasi hingga serah terima.
- **Filter Section:** Sebuah bagian unik yang membantu calon klien untuk menentukan apakah jasa Rumah Tropis cocok untuk mereka atau tidak, disajikan dalam format "Pilih Kami Jika..." dan "Jangan Pilih Kami Jika...".
- **Testimonials Section:** Menampilkan kutipan testimoni dari klien-klien sebelumnya.
- **FAQ Section:** Daftar pertanyaan yang sering diajukan beserta jawabannya dalam format *accordion*.
- **CTA (Call to Action) Section:** Ajakan bertindak yang jelas untuk mendorong pengguna menghubungi perusahaan.
- **Contact Section:** Informasi kontak perusahaan.
- **Footer:** Bagian kaki halaman yang berisi tautan tambahan dan hak cipta.
- **Animasi:** Animasi *fade-in* dan *slide-in* yang halus saat pengguna melakukan *scroll*, diimplementasikan menggunakan `framer-motion`.

## 3. Rencana Pengembangan (Iterasi Berikutnya)

### **Tujuan:** Meningkatkan Kualitas Visual Sesuai "Bold Definition"

Berdasarkan evaluasi, desain saat ini akan ditingkatkan untuk lebih sesuai dengan prompt awal yang menekankan pada estetika yang "bold", interaktif, dan premium.

### **Langkah-langkah Aksi:**

1.  **Implementasi Latar Belakang Bertekstur:** Menambahkan *subtle noise texture* pada `bg-bark` untuk memberikan nuansa yang lebih premium dan taktil pada tampilan.
2.  **Peningkatan Efek Shadow (Bayangan):** Mengaplikasikan *multi-layered drop shadows* pada elemen-elemen seperti kartu portofolio dan testimoni agar terlihat lebih "terangkat" dan memiliki kedalaman.
3.  **Efek "Glow" pada Elemen Interaktif:** Menambahkan efek cahaya (glow) yang halus pada tombol dan tautan saat di-hover untuk meningkatkan rasa interaktivitas.
4.  **Penambahan Aksen Warna Cerah:** Memperkenalkan satu warna aksen baru yang lebih cerah (misalnya, hijau tropis atau biru laut) untuk digunakan pada elemen-elemen kecil seperti ikon atau tombol CTA tertentu, guna menciptakan tampilan yang lebih dinamis dan "vibrant".
5.  **Visualisasi Portofolio:** Mengganti placeholder di bagian portofolio dengan gambar-gambar arsitektur tropis yang relevan dan berkualitas tinggi untuk membuat halaman lebih hidup.
