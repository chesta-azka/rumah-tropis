export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "tren-desain-rumah-tropis-modern-mewah-jakarta-2026",
    title: "Tren Desain Rumah Tropis Modern Mewah di Jakarta 2026",
    excerpt: "Menelusuri perpaduan antara kemewahan modern dengan sirkulasi udara alami yang optimal untuk hunian mewah di kota metropolitan Jakarta.",
    author: "Mas Mirza",
    authorRole: "Principal Architect, PT Tata Ruang Kota",
    date: "24 Juni 2026",
    readTime: "5 Menit Baca",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    tags: ["Arsitektur", "Jakarta", "Rumah Tropis Mewah"],
    content: `
      <p className="lead text-lg text-stone-300 mb-6 font-serif leading-relaxed">
        Kota metropolitan Jakarta menuntut hunian yang tidak hanya menawarkan kemewahan visual, tetapi juga fungsionalitas ekstrem dalam menghadapi iklim tropis yang lembap dan padat. Di tahun 2026, tren desain rumah tropis modern bergeser menuju "Passive-Luxury" yang memprioritaskan efisiensi energi tanpa sedikit pun mengorbankan estetika premium.
      </p>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">1. Konsep Sirkulasi Udara Silang (Cross Ventilation) Modern</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Bukan rahasia lagi bahwa Jakarta memiliki suhu harian yang cukup tinggi. Arsitek dari <strong className="text-white">PT Tata Ruang Kota</strong> mengatasi hal ini dengan menerapkan ventilasi silang yang sangat cermat. Ruang keluarga berplafon tinggi (double height ceiling) dipadukan dengan bukaan masif berupa pintu geser kaca lipat premium yang menghadap ke inner courtyard atau kolam renang pribadi. Konsep ini membiarkan udara sejuk masuk dari bawah dan mendorong udara hangat keluar lewat ventilasi atas.
      </p>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">2. Material Alami yang Mewah dan Berkelanjutan</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Kombinasi material alami seperti batu alam Travertine, kayu ulin atau teak solid, serta beton ekspos berkualitas tinggi mendominasi fasad luar rumah tropis premium di Jakarta. Travertine tidak hanya memberikan tekstur yang luar biasa anggun, tetapi juga memiliki ketahanan cuaca yang sangat tinggi sehingga sangat minim perawatan dalam jangka panjang.
      </p>

      <div className="my-8 p-6 bg-stone-900/60 rounded-xl border border-white/5">
        <h3 className="text-lg font-serif font-semibold text-[#B88A6E] mb-2">Mengapa Memilih Jasa Arsitek Jakarta Profesional?</h3>
        <p className="text-sm text-stone-400 leading-relaxed">
          Mendesain hunian mewah di Jakarta memerlukan pemahaman mendalam tentang peraturan tata ruang kota, zonasi, serta adaptasi sirkulasi mikro kawasan padat. PT Tata Ruang Kota hadir memberikan solusi perencanaan menyeluruh dari konsep estetis hingga perizinan legal yang komprehensif.
        </p>
      </div>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">3. Integrasi Lanskap Hijau Vertikal</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Keterbatasan lahan hijau di perkotaan disiasati dengan instalasi vertical garden premium dan roof garden yang subur. Tanaman hias tropis bertindak sebagai filter debu alami dan sekaligus mendinginkan suhu sekitar rumah hingga 2-3 derajat Celcius secara alami. Ini merupakan wujud nyata integrasi keindahan alam ke dalam kemewahan modern.
      </p>
    `
  },
  {
    id: "post-2",
    slug: "arsitektur-tropis-bali-resor-mewah-hunian-pribadi",
    title: "Eksotisme Arsitektur Tropis Bali: Sentuhan Resor Mewah Pada Hunian Pribadi",
    excerpt: "Bagaimana cara mengadopsi elemen-elemen estetika vila mewah Bali ke dalam desain rumah modern Anda agar terasa seperti liburan setiap hari.",
    author: "Mas Wira",
    authorRole: "Senior Designer, PT Tata Ruang Kota",
    date: "18 Juni 2026",
    readTime: "4 Menit Baca",
    coverImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    tags: ["Bali", "Vila Mewah", "Desain Interior"],
    content: `
      <p className="lead text-lg text-stone-300 mb-6 font-serif leading-relaxed">
        Bali selalu menjadi kiblat bagi mereka yang mendambakan kedamaian jiwa lewat arsitektur yang menyatu dengan alam. Bagi Anda yang ingin mengadopsi konsep "Resort-Living" ke dalam rumah tinggal pribadi, ada beberapa prinsip utama arsitektur tropis Bali yang dapat diadaptasikan ke dalam konsep modern kontemporer.
      </p>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">1. Konsep Ruang Terbuka Tanpa Batas (Indoor-Outdoor Connection)</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Ciri khas terkuat dari resor mewah Bali adalah hilangnya batasan antara ruang dalam dan ruang luar. Ruang makan dan ruang duduk sering kali dirancang setengah terbuka, langsung menghadap kolam renang berdesain infinity edge yang dipadukan dengan tanaman tropis rimbun seperti pohon kamboja fosil, monstera raksasa, dan palem hias.
      </p>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">2. Material Tradisional yang Dimodernisasi</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Penggunaan anyaman rotan, batu andesit hitam, atap sirap kayu, serta pahatan batu paras Bali dapat dimodernisasi dengan memadukannya bersama struktur logam tipis hitam matte yang minimalis atau kaca tempered tanpa bingkai. Hasilnya adalah tampilan "Tropical-Modern Chic" yang sangat eksklusif dan bernilai estetis tinggi.
      </p>

      <div className="my-8 p-6 bg-stone-900/60 rounded-xl border border-white/5">
        <h3 className="text-lg font-serif font-semibold text-[#B88A6E] mb-2">Konsultasi Arsitek Rumah Tropis Bali</h3>
        <p className="text-sm text-stone-400 leading-relaxed">
          Kunci keberhasilan desain tropis ala Bali terletak pada pemilihan vegetasi yang tepat serta tata lampu (lighting design) dramatis saat malam hari. Tim desainer kami berpengalaman merancang lanskap tropis otentik yang fungsional dan indah di berbagai wilayah di Indonesia.
        </p>
      </div>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">3. Paviliun Terpisah untuk Keintiman Maksimal</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Jika Anda memiliki lahan yang cukup luas, konsep klaster paviliun terpisah (seperti bale khas Bali) untuk area kamar tidur utama akan menciptakan pengalaman tinggal yang sangat privat, eksklusif, dan menenangkan, persis seperti menginap di resor bintang lima bintang di Ubud atau Uluwatu.
      </p>
    `
  },
  {
    id: "post-3",
    slug: "panduan-material-premium-travertine-kayu-teak-solid",
    title: "Panduan Memilih Material Premium: Antara Travertine Alam dan Kayu Teak Solid",
    excerpt: "Material terbaik menentukan ketahanan dan kemewahan hunian tropis. Kenali perbedaan, kelebihan, dan cara perawatan material premium ini.",
    author: "Mas Wira",
    authorRole: "Structural & Material Specialist",
    date: "10 Juni 2026",
    readTime: "6 Menit Baca",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Material", "Tips Desain", "Rumah Premium"],
    content: `
      <p className="lead text-lg text-stone-300 mb-6 font-serif leading-relaxed">
        Dalam mendesain rumah tropis premium, pemilihan material bukan hanya tentang warna atau bentuk, melainkan bagaimana material tersebut menua secara alami seiring waktu (patina) dan bertahan terhadap kelembapan tinggi serta paparan sinar ultraviolet matahari sepanjang tahun.
      </p>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">1. Pesona Travertine Alam: Klasik, Luks, dan Sejuk</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Batu Travertine diimpor langsung dari tambang-tambang terbaik di Italia atau Turki untuk memberikan kesan monumental pada dinding fasad atau lantai interior. Karakteristik travertine yang berpori alami justru memberikan efek penyerapan suhu dingin, membuat ruangan terasa sejuk di siang hari. Melakukan seal coating berkualitas tinggi sangat direkomendasikan untuk area luar ruangan demi melindunginya dari noda air hujan.
      </p>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">2. Keanggunan Teak Solid (Kayu Jati Premium)</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Kayu Jati memiliki kadar minyak alami yang sangat tinggi, menjadikannya musuh alami rayap dan pelapukan akibat cuaca tropis ekstrem. Menggunakan jati solid untuk kisi-kisi (louvers) eksterior, kusen pintu utama, dan deck kolam renang memberikan kehangatan organik yang mengimbangi dinginnya struktur beton dan kaca modern.
      </p>

      <div className="my-8 p-6 bg-stone-900/60 rounded-xl border border-white/5">
        <h3 className="text-lg font-serif font-semibold text-[#B88A6E] mb-2">Kualitas Pembangunan Premium Tanpa Kompromi</h3>
        <p className="text-sm text-stone-400 leading-relaxed">
          PT Tata Ruang Kota berkomitmen menggunakan material grade A dengan pengerjaan detail sambungan (joinery) yang sangat presisi. Kualitas konstruksi premium memastikan investasi properti Anda meningkat nilainya dari tahun ke tahun.
        </p>
      </div>

      <h2 className="text-2xl font-serif font-semibold text-[#B88A6E] mt-8 mb-4">3. Tips Perawatan Sederhana untuk Keindahan Abadi</h2>
      <p className="text-stone-300 mb-6 leading-relaxed">
        Untuk menjaga keindahan kedua material premium ini, lakukan re-coaling berkala pada kayu jati setiap 1,5 hingga 2 tahun sekali apabila terpapar cuaca langsung. Sementara untuk travertine, cukup lakukan pencucian ringan dengan pembersih ber-pH netral agar kilaunya tetap terjaga tanpa merusak kalsium alami batu tersebut.
      </p>
    `
  }
];
