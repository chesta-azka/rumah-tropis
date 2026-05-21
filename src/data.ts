export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  path: string;
  title: string;
  location: string;
  dimensions?: string;
  aspectRatio?: string;
  fileFormat?: string;
  fileSize?: string;
  styleTheme?: string;
  keyMaterials?: string[];
  designStory?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
  location?: string;
  status?: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  normalPrice: string;
  promoPrice: string;
  popular?: boolean;
  specs: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TemplateData {
  name: string;
  subName: string;
  tagline: string;
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  filterTitle: string;
  filterPilihTitle: string;
  filterPilihSub: string;
  filterJanganTitle: string;
  filterJanganSub: string;
  pilihJika: string[];
  janganPilihJika: string[];
  whyUsTitle: string;
  whyUsLabel: string;
  whyUsCards: { iconId: string; title: string; desc: string }[];
  whyUsParas: string[];
  whyUsSlogan: string;
  statsLabel: string;
  statsSub: string;
  stats: { value: string; label: string; iconId: string }[];
  servicesLabel: string;
  servicesTitle: string;
  services: Service[];
  facilitiesLabel: string;
  facilitiesTitle: string;
  facilities: Facility[];
  comparisonTitle: string;
  comparisonCardLeft: {
    title: string;
    sub: string;
    badge: string;
    points: string[];
    footer: string;
  };
  comparisonCardRight: {
    title: string;
    sub: string;
    badge: string;
    points: string[];
    footer: string;
  };
  portfolioLabel: string;
  portfolioTitle: string;
  portfolioSub: string;
  portfolioFilter: string[];
  portfolioItems: PortfolioItem[];
  testimonialLabel: string;
  testimonialTitle: string;
  testimonialSub: string;
  testimonials: Testimonial[];
  pricingLabel: string;
  pricingTitle: string;
  pricingSub: string;
  pricingPackages: PricingPackage[];
  rebateLabel: string;
  rebateTitle: string;
  rebateBtnText: string;
  quoteText: string;
  quoteAuthor: string;
  faqLabel: string;
  faqTitle: string;
  faqs: FAQItem[];
  footerProfile: string;
  footerAddress: string;
  footerContact: string;
  footerEmail: string;
}

export const templates: Record<string, TemplateData> = {
  // === TEMPLATE 1: RUMAH TROPIS (ARSITETIKA STUDIO STYLE) ===
  "arsitetika-studio": {
    name: "Rumah Tropis",
    subName: "Private Paradise",
    tagline: "PT Tata Ruang Kota",
    heroBadge: "PT Tata Ruang Kota — Exclusive Brand",
    heroTitle: "CIPTAKAN BANGUNAN BERNILAI TINGGI",
    heroSub: "LEWAT PESONA GAYA TROPIS. DETAIL DESAIN DAN KONSTRUKSI AMANKAN NILAI INVESTASI.",
    filterTitle: "Sebelum Melangkah Lebih Jauh, Pastikan Rumah Tropis Adalah Partner yang Tepat untuk Investasi Properti Ini",
    filterPilihTitle: "PILIH JIKA",
    filterPilihSub: "Kami adalah spesialisasi impian Anda",
    filterJanganTitle: "JANGAN PILIH JIKA",
    filterJanganSub: "Kami bukan partner yang efisien untuk ini",
    pilihJika: [
      "Siap lindungi uang kas dalam bentuk property",
      "Mau fokus pada keawetan fungsi dan ketahanan asset",
      "Fokus pada apresiasi harga",
      "Hargai keahlian teknis kontraktor resmi",
      "Cari hasil yang terjamin kuatnya",
      "Ingin fasad tropis yang menaikkan valuasi",
      "Serahkan teknis pada pakar konstruksi"
    ],
    janganPilihJika: [
      "Asal bangun rumah tanpa konsep",
      "Mau pangkas biaya tanpa ilmu",
      "Suka kompromi mutu struktur dasar",
      "Abaikan standar spesifikasi bangunan",
      "Nekat atur tukang tanpa ilmu manajerial",
      "Suka material murah demi ilusi visual fana",
      "Suka atur tukang dan pusing"
    ],
    whyUsTitle: "KENAPA RUMAH TROPIS?",
    whyUsLabel: "FILOSOFI & INTEGRITAS",
    whyUsCards: [
      {
        iconId: "award",
        title: "Senior Architects & Field Craftsmen",
        desc: "Architects and builders with 5+ years of practical field experience."
      },
      {
        iconId: "leaf",
        title: "Natural Resource Chemistry",
        desc: "Skill in blending natural stone, hard woods, and humidity venting systems."
      },
      {
        iconId: "shield",
        title: "Zero-Failure Structural Quality",
        desc: "A meticulous process, from structural iron calculations to concrete density."
      }
    ],
    whyUsParas: [
      "Karena mengurus rancang dan bangun properti sendirian itu mahal dan sangat merugi. Bersama Rumah Tropis klien tidak cuma terima gambar, klien akan masuk ke standar kualitas praktisi yang sudah lebih dari lima tahun di bidang konstruksi. Lihat cara kami merespons iklim secara makro, meracik material alamnya, dan menjaga nilai fungsional aset.",
      "Kebanyakan orang membuang dana ratusan juta karena membangun properti dengan cara yang keliru, bangunan rusak dulu baru paham. Di Rumah Tropis seluruh klien akan dipandu dari nol sampai rampung lewat manajemen terpadu yang mencakup legalitas, kekuatan struktur & presisi desain, sampai lansekap tropis. Semua dipandu arsitek senior dan kontraktor yang hidupnya memang di lapangan.",
      "Hampir semua aset properti mewah dan bernilai tinggi dibangun oleh praktisi yang menjaga kualitas, bukan memotong standar mutunya. Setiap klien berhak atas akses pendampingan eksklusif di fase perawatan struktur demi menjaga kualitas fisik properti, langkah pasti menuju tujuan yang sama yaitu investasi aman."
    ],
    whyUsSlogan: "Rumah Tropis tidak akan bisa menciptakan aset properti asli sebanyak ini jika kami tidak konsisten dan disiplin mengontrol konstruksi serta fasilitas perawatan struktur terbaik.",
    statsLabel: "INVESTASI TERBAIK ADALAH PROPERTI",
    statsSub: "Kredibilitas Kokoh & Bukti Kerja Terstandar",
    stats: [
      { value: "7+", label: "Years Of Experience", iconId: "milestone" },
      { value: "100+", label: "Completed Project", iconId: "check" },
      { value: "10.000+", label: "SQ Meter Realized", iconId: "ruler" },
      { value: "30+", label: "Professional Team", iconId: "users" }
    ],
    servicesLabel: "CORE SERVICES",
    servicesTitle: "Layanan Utama",
    services: [
      {
        id: "rancang-bangunan",
        title: "Rancang Bangunan",
        subtitle: "Layanan 1",
        description: "Kebanyakan klien bangun properti secara asal dan rugi karena salah kelola budget serta mutu bangunan. Layanan ini merombak cara pandang standar, dari sekadar mendirikan tembok menjadi pencipta aset berkelas dengan spesifikasi tinggi. Ini bukti nyata yang dipakai klien sukses untuk menaikkan nilai properti. Klien akan menguasai cara membaca iklim tapak sebelum lahan terbangun, strategi tata ruang & fasad yang murni berbasis fungsi bukan ego estetika, cara memilih material alam yang tahan cuaca, tahap mengelola struktur dari nol, dan cara membaca rencana anggaran biaya yang dipakai arsitek untuk mencegah bocornya dana tunai. Klien akan dapat Analisis iklim tapak alami, Strategi denah & struktur pas, Manajemen risiko konstruksi, Pilihan material & tata udara, Ceklis mutu proyek, dan Cara ukur nilai aset properti.",
        highlights: [
          "Analisis iklim tapak alami",
          "Strategi denah & struktur pas",
          "Manajemen risiko konstruksi",
          "Pilihan material & tata udara",
          "Ceklis mutu proyek",
          "Cara ukur nilai aset properti"
        ]
      },
      {
        id: "konstruksi-presisi",
        title: "Konstruksi Presisi",
        subtitle: "Layanan 2",
        description: "97% proyek gagal. Klien tidak harus jadi salah korbannya. Kebanyakan orang rugi di lapangan bukan karena material yang jelek, tapi karena belum menguasai satu hal yang tidak diajarkan di mana-mana, yaitu kontrol & sistem yang tepat. Di layanan ini, klien akan belajar cara membaca mutu asli material saat pengerjaan, mengenali jebakan seperti overbudgeting, mark-up, dan molor waktu sebelum hal itu menguras saldo proyek. Lebih dari itu, klien akan paham bagaimana arsitek merancang, cara menggunakan proporsi ruang demi kenyamanan, dan bagaimana menerapkan standar sipil, interior, serta taman sesuai gaya hidup klien.",
        highlights: [
          "Kontrol & standar sipil",
          "Proporsi ruang kenyamanan",
          "Cegah jebakan overbudgeting",
          "Deteksi mark-up & molor waktu",
          "Mutu asli material lapangan",
          "Sistem taman & estetika tropis"
        ]
      },
      {
        id: "ilmu-rancang",
        title: "Ilmu Rancang Bangunan",
        subtitle: "Layanan 3",
        description: "Banyak orang bangun rumah mewah bertahun-tahun tanpa paham inti struktur yang menopangnya. Padahal, klien yang paham sistem bangunan inilah yang selangkah lebih maju dari yang lain, baik sebagai pemakai, pemilik, maupun para pewarisnya. Di proyek ini, klien melihat realisasi dari nol secara konkret bukan sekadar gambar 3D diarahkan langsung oleh desainer. Klien akan memahami bagaimana baja dirangkai dan dikuatkan dalam kerangka balok utama, bagaimana utilitas dan sirkulasi bekerja di balik dinding, apa itu standar kerja dan mengapa mampu mengamankan nilai aset investasi, hingga material terbaru seperti natural stone yang sedang membentuk masa depan gaya tropis ini.",
        highlights: [
          "Realisasi struktur riil nol-ke-akhir",
          "Perakitan rangka baja utama",
          "Sirkulasi & utilitas balik dinding",
          "Formulasi natural stone premium",
          "Pengamanan nilai fisik investasi",
          "Diarahkan langsung oleh desainer"
        ]
      },
      {
        id: "manajemen-konstruksi",
        title: "Manajemen Konstruksi",
        subtitle: "Layanan 4",
        description: "Skill pengawasan ketat sangat dicari di ranah mewah. Sementara banyak orang asyik menumpuk lahan, hanya segelintir yang mau mengawal standar kokoh di atasnya. Mereka yang bisa jaga konstruksi presisi adalah yang menentukan naiknya nilai bangunan tersebut Di proyek ini, klien tidak hanya terima gambar. Klien dikawal langsung tahap demi tahap oleh praktisi yang hidup di lapangan, mulai dari nol hingga klien bisa merasakan kemewahan rumah tropis ini tanpa ada beban cemas. Klien akan menguasai Standardisasi, bahasa material tropis modern, memahami struktur pembesian beton yang padat, bekerja dengan kontrak terperinci, mengamankan budget dengan Checklist pengawasan, hingga proses serah terima yang memuaskan. Kualitas ini tidak ada di kontraktor biasa manapun di Indonesia. Yang klien dapatkan di sini adalah aset yang tidak lekang waktu, bukan tren sesaat saja.",
        highlights: [
          "Standarisasi bahasa material tropis",
          "Struktur pembesian beton padat",
          "Kontrak kerja detail & aman",
          "Checklist pengawasan ketat",
          "Proses serah terima tanpa cemas",
          "Dunia arsitektur bebas risiko meluap"
        ]
      },
      {
        id: "investasi-properti",
        title: "Investasi Properti",
        subtitle: "Layanan 5",
        description: "Aset di lahan emas dinilai 3-5 miilar per tahun. Pemborong biasa mengandalkan tebakan. Tim kontraktor mengandalkan standarisasi dan sistem yang bekerja tanpa drama, tanpa molor, tanpa bias. Dan di dunia properti yang nilainya melonjak tajam. Selama ini, ilmu ini hanya dipakai di proyek mewah dan developer kelas atas. Di proyek ini, klien didampingi desainer yang mengawalnya dari nol sampai klien benar-benar bisa menempati dan menikmati hasil karya aset impiannya sendiri. Mulai dari konsep hingga fasad, klien akan melihat cara menata ruang, memilih material, melakukan cek lokasi untuk membuktikan apakah mutu proyek itu benar-benar sempurna, dan akhirnya menempatinya di akhir proyek Ini bukan jasa kontraktor biasa. Ini adalah standar rancang properti tropis unggulan di dunia dan klien ada di barisan yang menikmati paling awal dari siapapun di Indonesia.",
        highlights: [
          "Apresiasi nilai 3-5 milar per tahun",
          "Kerja sistematis tanpa drama & molor",
          "Pendampingan desainer nol-ke-tempat",
          "Uji keaslian material lapangan",
          "Standar tata ruang tropis unggulan",
          "Eksklusivitas pertama di Indonesia"
        ]
      }
    ],
    facilitiesLabel: "CLIENT PRIVILEGE",
    facilitiesTitle: "FASILITAS EKSKLUSIF PROYEK SEBAGAI KLIEN RESMI RUMAH TROPIS",
    facilities: [
      {
        id: "progress",
        title: "Laporan Progres Terperinci",
        description: "Kondisi proyek berubah setiap bulan. Harga bahan di bulan Januari belum tentu stabil di bulan Maret. Lewat sesi update bulanan, klien tidak akan kecolongan pembengkakan dana, jadwal lama, dan progres yang sedang terhambat di proyek langsung dari praktisi yang aktif kontrol tiap harinya."
      },
      {
        id: "mutu",
        title: "Cek Mutu Struktur Asli",
        description: "Rugi terparah di proyek hampir selalu dipicu oleh faktor cuaca bukan hanya material. Dengan pengawasan ketat yang selalu update setiap ada progres, klien tahu kapan tahap melaju dan kapan waktu amankan modal. Bukan cuma menduga. Bukan cemas. Tapi mengambil keputusan berdasarkan data murni dan struktur kokoh."
      },
      {
        id: "desain",
        title: "Ide Desain & Investasinya",
        description: "Aset properti impian bukan hanya soal fasad. Kami akan susun rincian tata kelola bangunan dengan tahapan yang pasti untuk bantu klien memahami kerangka berpikir tentang standar kualitas lapangan dan bisa kontrol keamanan dananya dengan presisi."
      }
    ],
    comparisonTitle: "Pilih Aset Yang Terbaik? Properti Ini Punya 2 Sisi Nilai, Aset Tropis Bernilai Tinggi, Dirancang & Dibangun Presisi Atau Dan Yang Menunda Berinvestasi.",
    comparisonCardLeft: {
      title: "DIRANCANG & DIBANGUN PRESISI",
      sub: "Apresiasi harga konsisten & perlindungan cashflow",
      badge: "ASET UTAMA",
      points: [
        "Material premium tahan cuaca ekstrem melindungai ketahanan struktur dasar.",
        "Spesifikasi teknik sipil matang bebas bocor air & kelembapan tinggi.",
        "Nilai apresiasi properti meningkat 15-20% per tahun karena desain khas tropis mewah."
      ],
      footer: "PERTUMBUHAN DAN NILAI SEJATI"
    },
    comparisonCardRight: {
      title: "MENUNDA BERINVESTASI",
      sub: "Kerap terjebak devaluasi uang kas & inflasi bahan",
      badge: "RESIKO RESESI",
      points: [
        "Harga bahan baku semen, besi, & kayu naik 8-12% rata-rata setiap tahun.",
        "Kerugian dana karena spekulasi kontraktor tak berlisensi di pasaran bebas.",
        "Kehilangan kesempatan menempati paradise modern bebas beban pikiran."
      ],
      footer: "DEVALUASI DAN DEPRESIASI NILAI"
    },
    portfolioLabel: "MASTERPIECE PORTFOLIO",
    portfolioTitle: "Buktinya Bukan dari Kata-Kata",
    portfolioSub: "Lihat Hasil Karya yang Sudah Terwujud (Slide Portfolio Project)",
    portfolioFilter: ["All", "Jakarta", "Bali", "Bandung", "Surabaya", "Pontianak", "Sulawesi"],
    portfolioItems: [
      {
        id: "p1",
        path: "/images/portfolio/portofolio-ai-house.webp",
        title: "The AI House Oasis",
        location: "Jakarta Selatan",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Premium Lossy Profile)",
        fileSize: "142 KB",
        styleTheme: "Modernist Inteligente Residence",
        keyMaterials: ["Smart Graphene Concrete", "Automated Louvered Wood", "High-density Glass Panel"],
        designStory: "Hunian masa depan dengan perpaduan asimetri kontemporer bergaya tropis modern berseni tinggi serta tata ruang ramah iklim mikro."
      },
      {
        id: "p2",
        path: "/images/portfolio/portofolio-ss-house.webp",
        title: "The SS House Pavilion",
        location: "Uluwatu, Bali",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Ultra Low Latency Web)",
        fileSize: "115 KB",
        styleTheme: "Tropical Minimalist Cubic",
        keyMaterials: ["Cedar Wood Paneling", "Polished Terrazzo Floors", "Monolithic Concrete Slab"],
        designStory: "Desain paviliun tropis dengan dominasi bukaan udara lebar menghadap lanskap alam terbuka dan sirkulasi silang optimal."
      },
      {
        id: "p3",
        path: "/images/portfolio/portofolio-ra-house.webp",
        title: "The RA Residence Sanctuary",
        location: "Ciumbuleuit, Bandung",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (High Density)",
        fileSize: "135 KB",
        styleTheme: "Organic Modernist Hillside",
        keyMaterials: ["Natural Basalt Stone Slats", "Solid Teak Frameless Door", "Frameless Tempered Glass"],
        designStory: "Sanctuary premium di kawasan bukit sejuk dengan penataan struktur berundak yang harmonis dan interior bermandikan cahaya alami."
      },
      {
        id: "p4",
        path: "/images/portfolio/portofolio-fl-house.webp",
        title: "The FL House Modernist",
        location: "Canggu, Bali",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (High Precision)",
        fileSize: "108 KB",
        styleTheme: "Warm Minimalist Manor",
        keyMaterials: ["Textured White Stucco", "Ironwood Ceiling Planks", "Bespoke Pivot Portal"],
        designStory: "Inovasi hunian mewah ramah lingkungan dengan sistem pencahayaan zenithal dan kanopi peneduh tritisan lebar."
      },
      {
        id: "p5",
        path: "/images/portfolio/portofolio-ad-house.webp",
        title: "AD Tropical Manor",
        location: "Dago, Bandung",
        dimensions: "1080.x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Medium Quality)",
        fileSize: "128 KB",
        styleTheme: "Brutalist Tropical Barn",
        keyMaterials: ["Board-formed Reinforced Concrete", "Ulin Wood Shingles", "Low-E Sun Control Glass"],
        designStory: "Menampilkan estetika lumbung modern dengan ketahanan kokoh beton ekspos beralur serat alami kayu ulin tahan cuaca ekstrem."
      },
      {
        id: "p6",
        path: "/images/portfolio/portofolio-nn-house.webp",
        title: "NN House Retreat",
        location: "Jakarta Barat",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (High Density Lossless)",
        fileSize: "124 KB",
        styleTheme: "Contemporary Linear Mansion",
        keyMaterials: ["Satin White Plaster", "Integrated LED Profiles", "Teak Louver Screens"],
        designStory: "Karya agung arsitektur linier kontemporer dengan fasad monolitik megah berlapis panel louver kayu pelindung radiasi panas."
      },
      {
        id: "p7",
        path: "/images/portfolio/portofolio-nd-house.webp",
        title: "ND Cubic Courtyard",
        location: "Citraland, Surabaya",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Studio Profile)",
        fileSize: "148 KB",
        styleTheme: "Symmetrical Saffron Palace",
        keyMaterials: ["Golden Sandstone Tiles", "Teak Sun Screens", "Structural Steel Portal"],
        designStory: "Seni simetri agung yang menonjolkan keunikan batuan alam berpori dipadukan dengan courtyard taman asri dalam tata ruang."
      },
      {
        id: "p8",
        path: "/images/portfolio/portofolio-ea-house.webp",
        title: "EA Breeze Villa",
        location: "Sanur, Bali",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Light Profile)",
        fileSize: "96 KB",
        styleTheme: "Classic Modernist Ranch",
        keyMaterials: ["Steel Structural Canopy", "Siberian Larch Siding", "Slim Profile Aluminium Frames"],
        designStory: "Kebahagiaan satu tingkat dengan koridor sirkulasi silang berventilasi melimpah di pesisir pantai Sanur nan teduh."
      },
      {
        id: "p9",
        path: "/images/portfolio/portofolio-bf-house.webp",
        title: "BF House Symmetrical",
        location: "Pontianak",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Lossless High Fidelity)",
        fileSize: "159 KB",
        styleTheme: "Geometric Screen Manor",
        keyMaterials: ["Clay Roster Blocks", "Polished Black Granite", "Tropical Green Wall"],
        designStory: "Sistem fasad selubung ganda menggunakan roster terracotta premium untuk memblokir intensitas panas matahari langsung."
      },
      {
        id: "p10",
        path: "/images/portfolio/portofolio-yo-house.webp",
        title: "YO Glasshouse Barn",
        location: "Sulawesi",
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5 Portrait",
        fileFormat: "WEBP (Hyper Compressed)",
        fileSize: "132 KB",
        styleTheme: "Eco-Luxury Atrium Villa",
        keyMaterials: ["Slab Limestone", "Precision Steel Mullions", "Waterproof Wood Decking"],
        designStory: "Vila kontemporer berlimpah bukaan kaca yang diimbangi kanopi tritisan lebar untuk mereduksi radiasi panas tropis."
      }
    ],
    testimonialLabel: "CLIENT SATISFACTION",
    testimonialTitle: "Testimonial",
    testimonialSub: "Simak ulasan para klien. Bukan asal visualisasi 3D dan janji seperti kontraktor di pasaran luar, tetapi tim Rumah Tropis menghadirkan properti yang berhasil naik valuasinya lewat detail struktur yang kokoh.",
    testimonials: [
      {
        id: "t1",
        name: "Bpk. H. Sakirin",
        avatar: "/images/portfolio/IMG_7838.webp",
        location: "Jakarta",
        status: "Rumah Selesai",
        text: "Alhamdulillah, rumah kami sudah ditempati, semoga kelak rumah ini menjadi sumber kebahagian untuk kami sekeluarga, Aamiin. Terima kasih Rumah Tropis"
      },
      {
        id: "t2",
        name: "Bpk. Romy - Bogor",
        avatar: "/images/portfolio/IMG_7840.webp",
        location: "Bogor",
        status: "Sangat Puas",
        text: "Sayang sebenernya kalian gak branding di socmed, tapi it's okay, last but not least, thanks sudah mewujudkan rumah impian saya, design cpt, dan utk konstruksi hmm walau lewat beberapa hari, but it's not our big problem, saya puas dgn Rumah Tropis!"
      },
      {
        id: "t3",
        name: "Ibu Andini - Bukit",
        avatar: "/images/portfolio/IMG_7841.webp",
        location: "Bukit",
        status: "Project Selesai",
        text: "Halo mas mas Rumah Tropis semua, selesai juga ya proyek ini dengan drama drama & labil nya aku 😊 sukses & lancar ya kalian kedepannya, Amin"
      },
      {
        id: "t4",
        name: "Ibu Maria - Boyolali",
        avatar: "/images/portfolio/IMG_7842.webp",
        location: "Boyolali",
        status: "Sangat Indah",
        text: "Puji Tuhan rumah kami terselesaikan dengan baik, kami tidak bisa berkata apa2 selain rasa terima kasih kami kepada Tim Rumah Tropis yang telah mewujudkan rumah kami, semoga rumah ini bisa menjadi pelindung untuk kami sekeluarga 🙏"
      },
      {
        id: "t5",
        name: "Bpk. Lukman",
        avatar: "/images/portfolio/IMG_7843.webp",
        location: "Bali Project",
        status: "Repeat Order",
        text: "good job Rumah Tropis, next kita collabs untuk villa saya di bali ya 👍"
      },
      {
        id: "t6",
        name: "Bpk. Gamma - Pontianak",
        avatar: "/images/portfolio/IMG_7844.webp",
        location: "Pontianak",
        status: "Top Quality",
        text: "Awal saya skeptis 👍 Karena jauh project di Pontianak, ternyata disanggupin juga sampai selesai 👍 Top! Kapan2 main kesini lagi ya mas2 Rumah Tropis 👍"
      },
      {
        id: "t7",
        name: "Ibu Jessica - Bandung",
        avatar: "/images/portfolio/IMG_7846.webp",
        location: "Bandung",
        status: "Puas & Rekomendasi",
        text: "aku bahagia banget sih dengan temen\" dari Rumah Tropis, ya walaupun pernah beberapa kali miscom, tapi kalian tetep responsible, sukses ya"
      },
      {
        id: "t8",
        name: "Ibu Evelyn - Surabaya",
        avatar: "/images/portfolio/IMG_7847.webp",
        location: "Surabaya",
        status: "Dream Home",
        text: "hey team, thank you for an amazing 1.5 years together! our family dream home is finally done, way ahead of the 2-year target. couldn't be happier. wishing Rumah Tropis continued success!"
      },
      {
        id: "t9",
        name: "Bpk. Nawara - Palopo",
        avatar: "/images/portfolio/IMG_7849.webp",
        location: "Palopo",
        status: "Highly Satisfied",
        text: "Thank a lot Rumah Tropis! kalau tidak ada referral dari vendor tempat kerja saya, saya mungkin tidak akan pernah tau ada jasa Design & Build khusus rumah dengan tema Tropis ini, walau saya ada referensi tema lain, value Design & Build nya bisa di combine sesuai dengan kemauan saya! next kita bisa bertemu di project lainnya ya 👍"
      },
      {
        id: "t10",
        name: "Ibu Lely - Manado",
        avatar: "/images/portfolio/IMG_7851.webp",
        location: "Manado",
        status: "Komitmen Tinggi",
        text: "malam teman-teman Rumah Tropis, senang kenal dengan kalian, anak muda energic and ambisius, terima kasih ya telah mewujudkan rumah saya dan keluarga, walau kendala jarak yang jauh, tapi kalian tetap jaga komitmen, dan selalu berusaha dengan maksimal menyelesaikan semuanya dengan baik, sehat dan sukses selalu buat teman-teman semua 😊"
      }
    ],
    pricingLabel: "REGULAR & PROMO PACKAGES",
    pricingTitle: "INVESTASI TERBAIK UNTUK PROPERTI INI",
    pricingSub: "Pilih Layanan yang Paling Tepat Sesuai Kebutuhan Proyek (Promo diskon 50% coret menyala warna emas)",
    pricingPackages: [
      {
        id: "furniture-package",
        title: "FURNITURE PACKAGE",
        normalPrice: "Rp150.000 / m²",
        promoPrice: "Rp75.000 / m²",
        specs: [
          "3D Furniture Design",
          "3D Visualization",
          "Rincian Anggaran Biaya",
          "Project Schedule",
          "Project S Curve",
          "Detail Engineering Drawing (Furniture, Assembly Instruction, Mechanical, Electrical)"
        ]
      },
      {
        id: "landscape-package",
        title: "LANDSCAPE PACKAGE",
        normalPrice: "Rp200.000 / m²",
        promoPrice: "Rp100.000 / m²",
        specs: [
          "3D Landscape Design",
          "3D Visualization",
          "Rincian Anggaran Biaya",
          "Project Schedule",
          "Project S Curve",
          "Detail Engineering Drawing (Landscape, Vegetation, Civil, Mechanical, Electrical)"
        ]
      },
      {
        id: "interior-package",
        title: "INTERIOR PACKAGE",
        normalPrice: "Rp250.000 / m²",
        promoPrice: "Rp125.000 / m²",
        specs: [
          "3D Interior Design",
          "3D Visualization",
          "Rincian Anggaran Biaya",
          "Project Schedule",
          "Project S Curve",
          "Detail Engineering Drawing (Interior, Furniture, Civil, Mechanical, Electrical)"
        ]
      },
      {
        id: "architecture-package",
        title: "ARCHITECTURE PACKAGE",
        normalPrice: "Rp300.000 / m²",
        promoPrice: "Rp150.000 / m²",
        specs: [
          "3D Architecture Design",
          "3D Interior Design (Basic Reference Layout)",
          "3D Landscape Design (Basic Reference Layout)",
          "3D Furniture Design (Basic Reference Layout)",
          "3D Visualization",
          "Rincian Anggaran Biaya",
          "Laporan Analisis Struktur",
          "Project Schedule",
          "Project S Curve",
          "Detail Engineering Drawing (Architecture, Civil, Mechanical, Electrical)"
        ]
      },
      {
        id: "all-in-package",
        title: "ALL IN DESIGN (ARCHITECTURE, INTERIOR, LANDSCAPE, FURNITURE) PACKAGE",
        normalPrice: "Rp350.000 / m²",
        promoPrice: "Rp175.000 / m²",
        popular: true,
        specs: [
          "3D Architecture Design",
          "3D Interior Design",
          "3D Landscape Design",
          "3D Furniture Design",
          "3D Visualization",
          "Rincian Anggaran Biaya",
          "Laporan Analisis Struktur",
          "Detail Engineering Drawing (Architecture, Interior, Landscape, Furniture, Vegetation, Civil, Mechanical, Electrical)"
        ]
      }
    ],
    rebateLabel: "REBATE BANNER • PROMO TAHAP PEMBANGUNAN",
    rebateTitle: "Lanjut ke Tahap Pembangunan Bersama Rumah Tropis? Seluruh Biaya Desain Akan Dikembalikan 100% Menjadi Gratis!",
    rebateBtnText: "Klaim Gratis Biaya Desain",
    quoteText: "“Good buildings come from good people, and all problems are solved by good design.”",
    quoteAuthor: "Stephen Gardiner",
    faqLabel: "FREQUENTLY ASKED QUESTION",
    faqTitle: "Frequently Asked Question",
    faqs: [
      {
        id: "faq-1",
        question: "Apakah menggunakan jasa Rumah Tropis benar-benar sepadan dengan nilai investasinya?",
        answer: "Setiap pembangunan adalah keputusan jangka panjang. Nilai terbaik bukan hanya berasal dari tampilan yang menarik, tetapi dari perencanaan yang matang, penggunaan material yang tepat, dan pelaksanaan yang terkontrol. Dengan pendekatan desain tropis yang fungsional, Rumah Tropis membantu menciptakan bangunan yang nyaman, efisien, tahan lama, dan memiliki nilai properti yang terus meningkat."
      },
      {
        id: "faq-2",
        question: "Apakah harus menyiapkan anggaran besar untuk mulai merancang atau membangun?",
        answer: "Tidak harus langsung dalam skala besar. Proses dapat dimulai dari tahap desain, renovasi sebagian, hingga pembangunan bertahap sesuai prioritas dan kemampuan anggaran. Sejak awal, setiap keputusan dirancang agar biaya yang dikeluarkan tetap efektif dan memberikan hasil maksimal tanpa pengeluaran yang tidak perlu."
      },
      {
        id: "faq-3",
        question: "Belum pernah membangun atau renovasi, apakah hal ini akan menjadi kendala?",
        answer: "Sama sekali tidak. Justru banyak proyek dimulai dari pemilik yang belum memiliki pengalaman. Rumah Tropis mendampingi seluruh proses secara terstruktur, mulai dari konsep, gambar kerja, estimasi biaya, hingga pelaksanaan di lapangan, sehingga setiap tahap dapat dipahami dengan jelas dan berjalan lebih tenang."
      },
      {
        id: "faq-4",
        question: "Apakah desain tropis hanya cocok untuk rumah mewah?",
        answer: "Tidak. Prinsip tropis dapat diterapkan pada berbagai skala rumah, kantor, maupun ruang usaha. Pencahayaan alami, sirkulasi udara yang baik, dan hubungan dengan elemen hijau membuat bangunan terasa lebih nyaman sekaligus mengurangi biaya operasional dalam jangka panjang."
      },
      {
        id: "faq-5",
        question: "Apakah renovasi tetap bisa meningkatkan nilai properti?",
        answer: "Tentu. Renovasi yang direncanakan dengan baik dapat memperbaiki fungsi ruang, meningkatkan kualitas bangunan, dan memperkuat daya tarik visual. Dengan strategi yang tepat, renovasi bukan sekadar pengeluaran, melainkan investasi yang meningkatkan nilai jual maupun nilai pakai properti."
      },
      {
        id: "faq-6",
        question: "Bagaimana jika ingin satu tim yang menangani semuanya?",
        answer: "Rumah Tropis menyediakan layanan desain, pembangunan, renovasi, interior, hingga penataan taman dalam satu koordinasi terpadu. Dengan sistem kerja yang terintegrasi, proses menjadi lebih efisien, hasil lebih konsisten, dan setiap keputusan tetap terarah pada tujuan utama: menghadirkan bangunan yang bernilai, nyaman, dan menguntungkan untuk jangka panjang."
      }
    ],
    footerProfile: "Rumah Tropis di bawah PT Tata Ruang Kota menghadirkan layanan desain, bangun, dan renovasi dengan spesialisasi Modern Tropical Luxury. Setiap proyek dirancang dengan detail yang matang, visual yang realistis, serta sistem kerja terukur untuk menghasilkan properti yang nyaman, bernilai tinggi, dan layak menjadi investasi jangka panjang.",
    footerAddress: "Eightyeight @Kasablanka Office Tower A Lantai 26 Unit F, Jl. Casablanca Raya No.Kav. 88, Menteng Dalam, Kec. Tebet, Daerah Khusus Ibukota Jakarta 12870",
    footerContact: "+62 813-8969-965",
    footerEmail: "hello@rumahtropis.co.id"
  },

  // === TEMPLATE 2: AKADEMI CRYPTO (CYBER INTENSIVE TRADING & BLOCKCHAIN ACADEMY) ===
  "akademicrypto": {
    name: "Akademi Crypto",
    subName: "Wealth & Decentralization",
    tagline: "PT Akademi Crypto Inovasi",
    heroBadge: "The #1 Cryptocurrency & Trading Education Hub",
    heroTitle: "AMANKAN FINANSIAL LEWAT TEKNOLOGI BLOCKCHAIN",
    heroSub: "\"LEWAT ANALISIS TEKNIKAL TINGGI. POLA MINDSET DAN STRATEGI ON-CHAIN MENGAMANKAN NILAI PORTFOLIO INFLASI.\"",
    filterTitle: "Sebelum Melangkah Lebih Jauh, Pastikan Akademi Crypto Adalah Partner yang Tepat untuk Perjalanan Finansial Ini",
    filterPilihTitle: "GABUNG JIKA",
    filterPilihSub: "Anda berkomitmen penuh meraih kebebasan finansial",
    filterJanganTitle: "ANGAN GABUNG JIKA",
    filterJanganSub: "Anda ingin kaya instan tanpa belajar dasar teknikal",
    pilihJika: [
      "Siap mengamankan uang kas dari gerusan inflasi global",
      "Mau fokus pada konsistensi cuan & meminimalkan resiko trading",
      "Fokus pada apresiasi aset digital Blue-Chip jangka panjang",
      "Hargai analisis teknikal & on-chain data dari mentor berlisensi",
      "Cari komunitas investor yang terbukti kuat fundamentalnya",
      "Ingin menguasai web3 & smart contract yang merevolusi industri",
      "Serahkan technical charting pada master trading berpengalaman"
    ],
    janganPilihJika: [
      "Membeli koin hanya berdasarkan berita FOMO di media sosial",
      "Mau kaya instan tanpa mau mempelajari manajemen resiko",
      "Suka berasumsi & berspekulasi tanpa dasar analisis teknikal",
      "Abaikan standar spec fundamental (tokenomics & whitepaper)",
      "Nekat trading dengan margin leverage tinggi tanpa mentor",
      "Suka sinyal gratisan murah demi ilusi profit jangka pendek",
      "Suka overtrade berujung pusing & margin call beruntun"
    ],
    whyUsTitle: "KENAPA AKADEMI CRYPTO?",
    whyUsLabel: "RISET, STRATEGI & INTEGRITAS",
    whyUsCards: [
      {
        iconId: "award",
        title: "Certified Master Traders & Analysts",
        desc: "Mentors with 7+ years of experience in both Bull & Bear market cycles."
      },
      {
        iconId: "leaf",
        title: "On-Chain & Decentralized Chemistry",
        desc: "Skill in scanning whale wallets, smart money flow, and upcoming DeFi gems."
      },
      {
        iconId: "shield",
        title: "Absolute Risk management Protocols",
        desc: "A meticulous approach from precise stoploss setups to capital allocation maps."
      }
    ],
    whyUsParas: [
      "Karena mengelola portofolio crypto sendirian tanpa ilmu itu mahal dan sangat membahayakan modal. Bersama Akademi Crypto, murid tidak cuma terima rekomendasi koin, murid akan masuk ke ekosistem terstruktur di bawah bimbingan praktisi ahli yang sudah melewati siklus bear market ekstrem.",
      "Kebanyakan orang kehilangan ratusan juta karena membeli koin di pucuk tren, merugi dulu baru tersadar. Di Akademi Crypto, seluruh murid dipandu dari nol secara fundamental mencakup sekuritas wallet, analisis teknikal, on-chain data, hingga psikologi trading agar tidak mudah goyah oleh market panik.",
      "Hampir semua portofolio bernilai jutaan dollar dibangun oleh spekulator yang konsisten menjaga modal besarnya, bukan memotong SOP tradingnya. Setiap member berhak mendapatkan akses riset eksklusif berkala demi mengamankan performa portofolio digital dalam iklim perekonomian makro."
    ],
    whyUsSlogan: "Akademi Crypto tidak akan bisa menciptakan melahirkan ribuan alumni mandiri sebanyak ini jika kami tidak konsisten mendisiplinkan pengajaran manajemen resiko secara ketat.",
    statsLabel: "INVESTASI TERBAIK ADALAH PENGETAHUAN",
    statsSub: "Metodologi Riset Komprehensif & Kurikulum Terstandar",
    stats: [
      { value: "5+ Years", label: "Market Cycle Survived", iconId: "milestone" },
      { value: "15.000+", label: "Elite Members", iconId: "check" },
      { value: "$20M+", label: "Alumni Trading Volume", iconId: "ruler" },
      { value: "12+", label: "Professional Analysts", iconId: "users" }
    ],
    servicesLabel: "ACADEMY DIRECTIVES",
    servicesTitle: "Layanan Kelas Utama",
    services: [
      {
        id: "crypto-fundamental",
        title: "Masterclass Trading",
        subtitle: "Layanan 1",
        description: "Banyak pemula merugi akibat trading asal tebak. Layanan ini merombak total pemahaman dasar Anda, dari sekadar pencet tombol buy/sell menjadi analis market mandiri bersertifikat tinggi. Ini bukti nyata yang diajarkan oleh tim mentor sukses untuk melipatgandakan return dan menekan resiko kerugian. Murid menguasai manajemen stoploss, membaca pergerakan bandar (whales), swing trading di bursa spot, hingga teknik leverage aman di pasar futures yang menantang.",
        highlights: [
          "Konsep Supply-Demand & Order Blocks",
          "Fibonacci Retracement & Trendlines",
          "Setups Risk-Reward Ratio 1:3",
          "Whale Watcher & Wallet Scanning",
          "Manajemen Likuiditas Ekstrem",
          "Membaca Sentimen Makroekonomi Fed"
        ]
      },
      {
        id: "onchain-analytics",
        title: "On-Chain Analytics",
        subtitle: "Layanan 2",
        description: "95% trader gagal karena hanya mengandalkan indikator lagging chart biasa. Melalui layanan analisis on-chain ini, Anda mempelajari data asli transaksi blockchain secara real-time. Anda akan diajarkan cara melacak alamat dompet para miliarder (smart money), mendeteksi kapan institusi mulai akumulasi, serta melihat sirkulasi koin masuk-keluar bursa sebelum ledakan harga terjadi di pasar retail.",
        highlights: [
          "Tracking Exchange Flow & Netflow",
          "Glassnode & CryptoQuant Mastery",
          "Mendeteksi Akumulasi Smart Money",
          "Analisis Tokenomics & Siklus Emisi",
          "Security Audits Kode Smart Contract",
          "Scan Token Scam & Honeypots Baru"
        ]
      },
      {
        id: "web3-programming",
        title: "Web3 Programming",
        subtitle: "Layanan 3",
        description: "Jadilah pengembang di garda depan revolusi desentralisasi. Murid tidak sekadar menjadi penonton berspekulasi harga, namun ikut membangun smart contract, protokol dApps mandiri, hingga peluncuran koleksi NFT revolusioner menggunakan bahasa Solidity. Akademi membimbing Anda dari nol baris kode pemrograman hingga meluncurkan decentralized app komersial yang bernilai guna tinggi dan aman.",
        highlights: [
          "Logika Dasar Solidity & EVM",
          "Deploy ERC-20 & ERC-721 Smart Contracts",
          "Interaksi Web3 dengan Ethers.js & React",
          "Membangun Protokol Yield Farming",
          "Audit Mutu Kemananan Jaringan",
          "Dimentori langsung oleh Lead Dev Web3"
        ]
      },
      {
        id: "portfolio-strategic",
        title: "Strategic Advisory",
        subtitle: "Layanan 4",
        description: "Portofolio yang berantakan adalah jalan tercepat menuju kehancuran finansial. Di program penasehat strategi ini, murid dikawal langsung merancang alokasi pembagian dana investasi antara koin fundamental aman (Bitcoin & Ethereum) dengan koin ekosistem berkembang berpotensi naik 50x-100x demi mengamankan akselerasi pertumbuhan modal tanpa cemas.",
        highlights: [
          "Optimasi Alokasi Portofolio 4 Tier",
          "Strategi Dollar-Cost Averaging (DCA)",
          "Rebalancing Koin saat Profit Taking",
          "Riset Koin Sektor AI, L2, & DePIN",
          "Konsultasi Portofolio Bulanan",
          "Koneksi Eksklusif VC Global"
        ]
      },
      {
        id: "defi-yield",
        title: "DeFi Yield Farming",
        subtitle: "Layanan 5",
        description: "Hasilkan passive income 24/7 di atas rantai blockchain secara terukur tanpa bergantung pada fluktuasi harga harian yang mengerikan. Murid mempelajari teknik staking, lending, penyedia likuiditas pools di decentralized exchanges terpercaya guna mendatangkan yield stabil yang jauh melampaui bunga deposito perbankan konvensional manapun di Indonesia saat ini.",
        highlights: [
          "Mekanisme Automated Market Maker (AMM)",
          "Menghindari Impermanent Loss",
          "Strategi Leverage Staking Teraman",
          "Perburuan Airdrops Koin Bernilai Tinggi",
          "Platform Uniswap, GMX & Curve Mastery",
          "Manajemen Keamanan Dompet Hardware"
        ]
      }
    ],
    facilitiesLabel: "MEMBER BENEFITS",
    facilitiesTitle: "FASILITAS EKSKLUSIF SEBAGAI MEMBER RESMI AKADEMI CRYPTO ELITE",
    facilities: [
      {
        id: "market-signals",
        title: "Daily Sinyal & Analisis Market (Fasilitas 1)",
        description: "Keadaan pasar crypto berubah super cepat. Lewat update info harian, member tidak akan ketinggalan momentum buy-low sebelum pam atau panik-sell ketika market terindikasi jenuh. Semuanya langsung di-update oleh tim analis internal bersertifikat."
      },
      {
        id: "exclusive-community",
        title: "Inner Circle & Discord Private (Fasilitas 2)",
        description: "Diskusi berkualitas tinggi menentukan kesuksesan investasi Anda. Bergabunglah dalam jaringan Discord VIP tertutup tempat berkumpulnya sesama investor beraset miliaran rupiah untuk berdiskusi sehat bebas dari kebisingan koin meme sampah."
      },
      {
        id: "whale-alerts",
        title: "Whale Wallet Tracking Alerts (Fasilitas 3)",
        description: "Jangan menebak arah pasar sendirian. Kami menyusun dashboard alert khusus yang langsung mendeteksi pergerakan whale memindahkan dana ribuan Bitcoin sebelum long atau short squeeze besar terjadi, memberi member waktu amankan modal lebih awal."
      }
    ],
    comparisonTitle: "Pilih Jalan Finansial Terbaik? Era Keuangan Masa Depan Memiliki Dua Sisi Investasi, Berprestasi di Akademi Crypto Atau Menolak Belajar & Tergerus Inflasi.",
    comparisonCardLeft: {
      title: "BELAJAR SECARA SISTEMATIS DI AKADEMI",
      sub: "Apresiasi return konsisten & perlindungan capital",
      badge: "ALUMNI SUKSES",
      points: [
        "Memahami pola chart & manipulasi bandar sebelum melakukan entri posisi.",
        "Mengerti on-chain data asli blockchain untuk konfirmasi modal keluar-masuk.",
        "Mendapatkan return portofolio bertumbuh sehat berkat compounding konsisten."
      ],
      footer: "KEBEBASAN FINANSIAL SEJATI"
    },
    comparisonCardRight: {
      title: "TRADING SPEKULATIF TANPA ILMU",
      sub: "Kerap terjebak koin scam & membeli di harga tertinggi",
      badge: "RESIKO KERUGIAN",
      points: [
        "Mudah terpengaruh berita palsu media sosial serta buying mania yang fana.",
        "Menggunakan leverage berlebih tanpa manajemen resiko stoploss ketat.",
        "Saldo tabungan terus tergerus inflasi fiat konvensional tanpa adanya perisai aset."
      ],
      footer: "DEVALUASI FINANSIAL & MARGIN CALL"
    },
    portfolioLabel: "ALUMNI GAINS PROOF",
    portfolioTitle: "Bukti Hasil Nyata Bukan Dari Kata-Kata",
    portfolioSub: "Lihat Hasil Profit Nyata & Karir Web3 yang Sudah Terwujud (Portofolio Alumni)",
    portfolioFilter: ["All", "Trading", "Solidity", "dApps", "DeFi", "Investment"],
    portfolioItems: [
      { id: "p1", path: "/images/portfolio/portfolio-fl-house.webp", title: "Futures Swing Setup +420%", location: "Trading Elite" },
      { id: "p2", path: "/images/portfolio/portfolio-nd-house.webp", title: "Arbitrage Flashloan Bot Deploy", location: "Solidity Developer" },
      { id: "p3", path: "/images/portfolio/portfolio-yo-house.webp", title: "Bitcoin DCA Accumulation Map", location: "Long Investment" },
      { id: "p4", path: "/images/portfolio/portfolio-nn-house.webp", title: "DeFi Yield Farming 45% APY", location: "DeFi Spec" },
      { id: "p5", path: "/images/portfolio/portfolio-ra-house.webp", title: "Custom Smart Contract Layer-2", location: "dApps Production" },
      { id: "p6", path: "/images/portfolio/portfolio-pn-house.webp", title: "Airdrop Claiming Victory $25k", location: "DeFi Spec" }
    ],
    testimonialLabel: "MEMBER CHATS",
    testimonialTitle: "Testimonial Alumni",
    testimonialSub: "Simak ulasan para member. Bukan sekedar grafik demo, tetapi tim riset Akademi Crypto menghadirkan kurikulum komprehensif yang berhasil mengubah mindset & kemampuan finansial murid.",
    testimonials: [
      {
        id: "t1",
        name: "Bpk. H. Sakirin",
        avatar: "/images/portfolio/IMG_7838.webp",
        location: "Jakarta",
        status: "Exclusive Member",
        text: "Alhamdulillah, portofolio trading futures saya sekarang konsisten bertumbuh sehat setelah memahami Supply-Demand. Terima kasih banyak tim mentor Akademi Crypto!"
      },
      {
        id: "t2",
        name: "Bpk. Romy - Bogor",
        avatar: "/images/portfolio/IMG_7840.webp",
        location: "Bogor",
        status: "Sangat Puas",
        text: "Keren banget kurikulum kelas on-chain nya. Saya bisa deteksi akumulasi whale di koin layer-2 kemarin lusa sebelum harganya naik 150%! Sangat puas belajar di sini."
      },
      {
        id: "t3",
        name: "Ibu Andini - Bukit",
        avatar: "/images/portfolio/IMG_7841.webp",
        location: "Bukit",
        status: "Web3 Graduate",
        text: "Halo mentor semua, selesai juga kelas Solidity Web3 nya meskipun sempat pusing coding dApps nya hehe. Sukses terus ya Akademi Crypto ke depannya, Amin!"
      },
      {
        id: "t4",
        name: "Ibu Maria - Boyolali",
        avatar: "/images/portfolio/IMG_7842.webp",
        location: "Boyolali",
        status: "Crypto Investor",
        text: "Puji Tuhan tabungan masa tua kami aman sekarang dalam cold wallet Bitcoin, terhindar dari inflasi bank konvensional berkat bimbingan intensif dari tim Akademi."
      },
      {
        id: "t5",
        name: "Bpk. Lukman",
        avatar: "/images/portfolio/IMG_7843.webp",
        location: "Surabaya",
        status: "Swing Trader",
        text: "Kerja bagus para analyst di Discord VIP. Sinyal harian spot nya akurat sekali, modal merangkak naik tiap harinya tanpa cemas 👍"
      }
    ],
    pricingLabel: "MEMBERSHIP PROMO FEES",
    pricingTitle: "INVESTASI TERBAIK ADALAH UNTUK ILMU ANDA",
    pricingSub: "Pilih Tipe Pembelajaran Sesuai Kapasitas & Tujuan Investasi Anda (Promo diskon 50% coret menyala warna emas)",
    pricingPackages: [
      {
        id: "basic",
        title: "Basic Course",
        normalPrice: "Rp1.500.000",
        promoPrice: "Rp750.000",
        specs: [
          "Akses 12 Modul Video Pembelajaran Dasar",
          "Konsep Membeli & Menjual di Spot Market",
          "Panduan Pengamanan Wallet & Private Keys",
          "Akses Komunitas Discord Basic selama 1 bulan"
        ]
      },
      {
        id: "trading-pro",
        title: "Trading Pro",
        normalPrice: "Rp3.000.000",
        promoPrice: "Rp1.500.000",
        specs: [
          "Seluruh keuntungan Basic Course",
          "Analisis Teknikal Advance & Order Blocks",
          "Sinyal Trading Spot & Futures Harian",
          "Discord VIP Channel Sinyal & Analis Live Chatting"
        ]
      },
      {
        id: "onchain-advisory",
        title: "On-Chain Expert",
        normalPrice: "Rp5.000.000",
        promoPrice: "Rp2.500.000",
        specs: [
          "Metodologi On-Chain Tracking data Glassnode",
          "Live Zoom Analisis Koin Fundamentally Underpriced",
          "Strategi Mengikut Jejak Whales & Smart Money",
          "Modul Riset Makroekonomi Premium Bulanan"
        ]
      },
      {
        id: "solidity-web3",
        title: "Solidity Developer Academy",
        normalPrice: "Rp6.000.000",
        promoPrice: "Rp3.000.000",
        popular: true,
        specs: [
          "Kurikulum Coding Smart Contracts dari Nol",
          "Deploy dApps DeFi, NFT, & ERC-20 Tokens",
          "Sertifikasi Web3 Internasional dari Developer Partner",
          "Akses ke Lowongan Kerja Perusahaan Blockchain Global",
          "Wajib menyala emas & paling populer"
        ]
      },
      {
        id: "elite-lifetime",
        title: "Elite Lifetime Membership",
        normalPrice: "Rp12.000.000",
        promoPrice: "Rp6.000.000",
        specs: [
          "Akses Selamanya untuk Seluruh Materi & Update",
          "Sesi One-on-One Portfolio Consult dengan Senior Analyst",
          "VIP Dinner & Networking dengan VC dan Whale Investor",
          "Akses Alfa-Sinyal Proyek Crypto Sebelum Launching di Pasar"
        ]
      }
    ],
    rebateLabel: "REBATE BANNER • PROMO MEMBER AKADEMI",
    rebateTitle: "Lanjut ke Kelas Trading Pro? Seluruh Biaya Kelas Basic Akan Dikembalikan 100% Mengurangi Biaya Upgrade!",
    rebateBtnText: "Klaim Diskon Upgrade 100%",
    quoteText: "“Blockchain is not just a technology; it is a system of trust without third-party gatekeepers.”",
    quoteAuthor: "Satoshi Nakamoto",
    faqLabel: "SUPPORT SYSTEM",
    faqTitle: "FAQ (FREQUENTLY ASKED QUESTIONS)",
    faqs: [
      {
        id: "faq-1",
        question: "Apakah pemula tanpa latar belakang finansial bisa belajar di Akademi Crypto?",
        answer: "Sangat bisa. Kurikulum kami dirancang ramah untuk pemula secara bertahap mulai dari pengenalan blockchain, cara membuat wallet yang aman, hingga teknik pembacaan grafik teknis yang canggih."
      },
      {
        id: "faq-2",
        question: "Bagaimana cara kerja klaim pengembalian biaya kelas basic?",
        answer: "Jika Anda memutuskan untuk meng-upgrade keanggotaan ke kelas Trading Pro atau Elite dalam waktu 14 hari, seluruh biaya pendaftaran kelas Basic sebelumnya akan kami refund utuh sebagai pengurang langsung dari biaya upgrade keanggotaan."
      },
      {
        id: "faq-3",
        question: "Apakah ada jaminan uang kembali jika saya menderita loss dalam trading?",
        answer: "Kami adalah akademi edukasi, bukan pengelola dana ataupun penyelenggara investasi titipan. Kami fokus mendidik murid agar mampu bertransaksi mandiri secara cerdas dengan manajemen resiko yang mapan. Keputusan trading sepenuhnya berada di tangan peserta."
      },
      {
        id: "faq-4",
        question: "Berapa lama akses ke Discord VIP Sinyal berlaku setelah mendaftar?",
        answer: "Tergantung paket yang dipilih. Kelas Trading Pro memberikan akses selama 6 bulan, sementara paket Elite Lifetime memberikan akses selamanya ke komunitas premium eksklusif kami."
      }
    ],
    footerProfile: "Akademi Crypto di bawah PT Akademi Crypto Inovasi menghadirkan sistem belajar trading komprehensif, riset teknikal mutakhir, serta on-chain data tracking bagi para pejuang finansial modern demi menggapai kebebasan finansial berpancar desentralisasi.",
    footerAddress: "Eightyeight @Kasablanka Office Tower A Lantai 26 Unit F, Jl. Casablanca Raya No.Kav. 88, Menteng Dalam, Kec. Tebet, Jakarta Selatan, 12870",
    footerContact: "+62 813-8969-965",
    footerEmail: "hello@akademicrypto.co.id"
  },

  // === TEMPLATE 3: AKADEMI CREATOR (CONTENT CREATOR MASTERCLASS) ===
  "akademicreator": {
    name: "Akademi Creator",
    subName: "Viral Sequencing & Brand Deals",
    tagline: "PT Akademi Kreator Nusantara",
    heroBadge: "The Ultimate Creator Academy for Digital Authority",
    heroTitle: "KUASAI ALGORITMA DAN BANGUN OTORITAS DIGITAL",
    heroSub: "\"LEWAT POLA KAIT VIRAL. FORMULA PENYUSUNAN VIDEO DAN KEAHLIAN BRAND DEALS MENJAMIN KESUKSESAN OTORITAS DIGITAL.\"",
    filterTitle: "Sebelum Melangkah Lebih Jauh, Pastikan Akademi Creator Adalah Partner yang Tepat untuk Karir Kreatif Ini",
    filterPilihTitle: "GABUNG JIKA",
    filterPilihSub: "Anda siap membangun pengaruh digital sejati",
    filterJanganTitle: "ANGAN GABUNG JIKA",
    filterJanganSub: "Anda hanya mendambakan views instan dari gosip fana",
    pilihJika: [
      "Siap membangun pengaruh digital yang mendatangkan cashflow",
      "Mau fokus pada konsistensi konten berdurasi & retensi audiens",
      "Fokus pada pembentukan personal branding bernilai tinggi",
      "Hargai formula copywriting hooks & struktur editing premium",
      "Cari ekosistem kreator yang konsisten kolaborasi & bertumbuh",
      "Ingin menguasai multi-platform sequencing (YouTube, TikTok, IG Reels)",
      "Serahkan strategi monetisasi pada pakar negosiasi brand deal resmi"
    ],
    janganPilihJika: [
      "Asal merekam video tanpa merancang naskah script yang matang",
      "Mau viral instan dengan meniru konten negatif murahan",
      "Suka berasumsi & malas mempelajari statistik retensi video",
      "Abaikan standar spec video (pencahayaan, audio jernih, editing rapi)",
      "Nekat membeli fake followers atau bot views di pasaran bebas",
      "Suka mengeluh algoritma sepi tanpa mau evaluasi 3 detik pertama",
      "Suka berdebat di medsos berujung stress & kehabisan ide segar"
    ],
    whyUsTitle: "KENAPA AKADEMI CREATOR?",
    whyUsLabel: "VIRAL ENGINE, STRATEGI & RETENSI",
    whyUsCards: [
      {
        iconId: "award",
        title: "Viral Director Mentors",
        desc: "Mentors who have garnered 1B+ cumulative views across multiple accounts."
      },
      {
        iconId: "leaf",
        title: "Dynamic Hooks & Narrative Chemistry",
        desc: "Skill in crafting script psychological hooks, cinematic framing, and retention hacks."
      },
      {
        iconId: "shield",
        title: "Monetization Framework Blueprint",
        desc: "A step-by-step roadmap from brand presentation to signing high-ticket sponsorships."
      }
    ],
    whyUsParas: [
      "Karena merintis karir sebagai content creator sendirian tanpa formula itu melelahkan dan sangat merugi waktu. Bersama Akademi Creator, murid tidak cuma belajar cara editing video, murid akan diajarkan sistem menulis script terperinci yang memanipulasi retensi penonton agar betah menyimak video Anda hingga detik akhir.",
      "Kebanyakan pemula membuang jutaan rupiah membeli kamera mahal namun videonya tetap sepi penonton, merasa frustrasi dulu baru paham. Di Akademi Creator seluruh murid dibimbing dari nol merumuskan pilar konsep, teknik pencahayaan murah berkualitas bioskop, penulisan hook 3 detik pertama, sampai cara membaca algoritma analitik dashboard.",
      "Hampir semua influencer dengan tarif endorsement fantastis membangun personal branding mereka secara disiplin, bukan asal upload video. Setiap siswa mendapatkan akses pendampingan portofolio konten berkala demi menjaga estetika visual serta kredibilitas akun di mata para brand manager kelas atas."
    ],
    whyUsSlogan: "Akademi Creator tidak akan bisa mencetak ratusan alumni berpenghasilan puluhan juta sebanyak ini jika kami tidak konsisten membedah formula retensi video secara disiplin.",
    statsLabel: "INVESTASI TERBAIK ADALAH PERSONAL BRANDING",
    statsSub: "Kurikulum Tergokil & Ekosistem Creator Terbaik",
    stats: [
      { value: "1B+", label: "Combined Views Realized", iconId: "milestone" },
      { value: "5.000+", label: "Creators Graduated", iconId: "check" },
      { value: "500M+", label: "Total Follower Base Network", iconId: "ruler" },
      { value: "25+", label: "Top Agency Partners", iconId: "users" }
    ],
    servicesLabel: "CREATOR CURRICULUM",
    servicesTitle: "Materi Kelas Unggulan",
    services: [
      {
        id: "viral-hooks",
        title: "Scripts & Viral Hooks",
        subtitle: "Layanan 1",
        description: "Banyak kreator membuang konten bagus karena 3 detik pertama yang membosankan. Layanan ini merombak total cara penyusunan naskah video Anda. Anda akan menguasai 17 formula hook psikologis yang mengikat mata audiens, struktur narasi jembatan emosi (tension & release), cara meramu visual cues, serta menyusun call-to-action yang meningkatkan rasio share video hingga 200%.",
        highlights: [
          "17 Formula Hook Psikologis Pengikat Saraf",
          "Struktur Scripting 3 Detik Pembuka",
          "Mekanisme Tension-Release Narasi Video",
          "Optimasi Call-to-Action Penambah Share",
          "Membaca Tren Audio & Musik Pengiring",
          "Riset Ide Segar Tanpa Kehabisan Topik"
        ]
      },
      {
        id: "camera-setup",
        title: "Visual Framing & Lighting",
        subtitle: "Layanan 2",
        description: "Video yang buram dan bersuara bising adalah pembunuh karir kreator tercepat. Di modul ini, murid mempelajari cara memaksimalkan kamera smartphone biasa dan lampu sederhana agar terlihat layaknya kualitas studio televisi miliaran rupiah. Anda diajarkan teknik pencahayaan cinematically, penempatan mikrofon antimampet, serta framing grid estetika.",
        highlights: [
          "Teknik Pencahayaan Cinema Kualitas Tinggi",
          "Setup Mikrofon Jernih Bebas Noise",
          "Framing Grid Estetis Aturan Ketiga",
          "Teori Psikologi Warna & Grading Mood",
          "Optimasi Kamera Smartphone Standard",
          "Manajemen File Footage Terstruktur"
        ]
      },
      {
        id: "editing-alchemy",
        title: "Video Editing Alchemy",
        subtitle: "Layanan 3",
        description: "Bahan video biasa berubah menjadi visual luar biasa di fase editing. Akademi melatih Anda menguasai aplikasi CapCut (mobile/PC) & Adobe Premiere Pro dengan teknik transisi dinamis, sound design menggetarkan telinga, teks subtitle otomatis yang pop-up estetis, pembagian b-roll dinamis agar visual tetap mengikat konsentrasi audiens.",
        highlights: [
          "Editing Dinamis Potong Ketukan Musik",
          "Sound Design Efek & Soundscapes Alami",
          "Subtitle Otomatis Pop-Up Font Estetis",
          "Penyusunan B-Roll Dinamis Tanpa Bosan",
          "Color Grading Cinematic Khusus Tropis",
          "Dimentori Editor Senior Channel Viral"
        ]
      },
      {
        id: "brand-deals",
        title: "Brand Deals Negotiator",
        subtitle: "Layanan 4",
        description: "Berhentilah bergantung pada adsense recehan yang fluktuatif. Program ini membekali Anda cara membuat Media Kit modern yang memukau perwakilan agensi periklanan, melakukan negosiasi harga endorsement bernilai tinggi tanpa canggung, serta merumuskan konsep iklan yang disukai penonton sekaligus memuaskan kebutuhan klien.",
        highlights: [
          "Penyusunan Media Kit Modern Memukau",
          "Negosiasi Harga Endorsement Puluhan Juta",
          "Konsep Iklan Storytelling Ramah Audiens",
          "Manajemen Kontrak Hukum Sponsoring",
          "Pendampingan Presentasi Pitching Brand",
          "Database Kontak Brand Manager Indonesia"
        ]
      },
      {
        id: "multi-platform",
        title: "Multi-Platform Sequencing",
        subtitle: "Layanan 5",
        description: "Jangan meletakkan telur karir Anda di satu keranjang algoritma saja. Di layanan ini, murid mempelajari strategi memotong satu video panjang menjadi 10 format micro-konten vertikal yang siap disebarkan secara simultan ke TikTok, Instagram Reels, YouTube Shorts demi mendatangkan limpahan pengikut organik dengan efisiensi tenaga kerja maksimal.",
        highlights: [
          "Format Konversi Micro-Konten Vertikal",
          "Algoritma TikTok, Reels & Shorts Mastery",
          "Scheduling Posting Lintas Platform",
          "Piramida Otoritas Konten Digital",
          "Manajemen Tim Penulis & Editor Asisten",
          "Membangun Komunitas Fans Loyal (Tribes)"
        ]
      }
    ],
    facilitiesLabel: "CREATOR PRIVILEGES",
    facilitiesTitle: "FASILITAS EKSKLUSIF BAGAIKAN KLIEN RESMI AKADEMI CREATOR",
    facilities: [
      {
        id: "daily-analysis",
        title: "Membedah Ide Konten Viral (Fasilitas 1)",
        description: "Tren media sosial berubah setiap minggu. Melalui bimbingan mingguan, peserta tidak akan ketinggalan hook atau suara latar yang sedang dicari jutaan penonton di algoritma teratas, langsung disajikan oleh tim kreatif berpengalaman."
      },
      {
        id: "studio-access",
        title: "Akses Studio & Alat Konten (Fasilitas 2)",
        description: "Kendala fasilitas pencahayaan tidak boleh menghambat kreatifitas Anda. Murid berhak berkunjung dan menggunakan fasilitas studio mock-up rekaman lengkap dengan lighting premium & kamera profesional di kantor pusat akademi kami."
      },
      {
        id: "agency-connection",
        title: "Koneksi Langsung ke Brand (Fasilitas 3)",
        description: "Kami percaya jembatan relasi itu penting. Seluruh portofolio karya kelulusan murid terbaik akan kami salurkan langsung ke 25+ partner agensi periklanan di Indonesia untuk mempermudah Anda mendapatkan job sponsorship pertama."
      }
    ],
    comparisonTitle: "Pilih Karir Digital Terbaik? Perekonomian Kreator Modern Memiliki Dua Sisi Pilihan, Sukses Menjadi Influencer Berpengaruh Atau Menolak Beradaptasi Tetap Penonton Pasif.",
    comparisonCardLeft: {
      title: "GABUNG BELAJAR DI AKADEMI CREATOR",
      sub: "Personal branding premium & monetisasi tak terbatas",
      badge: "KREATOR MANDIRI",
      points: [
        "Memahami retensi data analitik naskah sebelum menekan tombol rekam video.",
        "Mengerti teknik merekam visual mewah berkualitas bioskop bermodal smartphone.",
        "Mendapatkan endorse premium dari brand besar berkat kredibilitas portfolio digital."
      ],
      footer: "PENGARUH DIGITAL SEJATI"
    },
    comparisonCardRight: {
      title: "ALASAN SPEKULATIF PENYALURAN HOAX",
      sub: "Kerap membuang waktu & lelah tanpa adanya penonton",
      badge: "VIEWER PASIF",
      points: [
        "Merekam video serampangan tanpa adanya hook ataupun naskah yang rapi.",
        "Frustrasi dan menyerah akibat views nol karena menyembunyikan kesalahan retensi.",
        "Hanya menonton kesuksesan finansial orang lain tanpa berani mencoba adaptasi."
      ],
      footer: "DEVALUASI ATTENTION SPAN"
    },
    portfolioLabel: "ALUMNI CHANNELS",
    portfolioTitle: "Buktinya Nyata Bukan Dari Kata-Kata",
    portfolioSub: "Lihat Akun & Kolaborasi Brand yang Sudah Terwujud (Saluran Alumni)",
    portfolioFilter: ["All", "YouTube", "TikTok", "Shorts", "Sponsorships"],
    portfolioItems: [
      { id: "p1", path: "/images/portfolio/portfolio-fl-house.webp", title: "Tech Channel Growth 0 to 100k", location: "YouTube" },
      { id: "p2", path: "/images/portfolio/portfolio-nd-house.webp", title: "Kuliner Travel Hook +5M Views", location: "TikTok" },
      { id: "p3", path: "/images/portfolio/portfolio-yo-house.webp", title: "Brand Sponsorship Deal Nike", location: "Sponsorships" },
      { id: "p4", path: "/images/portfolio/portfolio-nn-house.webp", title: "Lifestyle Vlog Aesthetic Series", location: "Shorts" },
      { id: "p5", path: "/images/portfolio/portfolio-ra-house.webp", title: "Finance Educational Content Hook", location: "TikTok" },
      { id: "p6", path: "/images/portfolio/portfolio-pn-house.webp", title: "Collaboration with Top Agencies", location: "Sponsorships" }
    ],
    testimonialLabel: "CREATOR FEEDBACKS",
    testimonialTitle: "Simak Kepuasan Siswa",
    testimonialSub: "Review asli dari kawan-kawan kreator. Bukan janji lip-sync belaka, tetapi tim riset Akademi Creator menyusun kurikulum penulisan naskah yang berhasil melambungkan viewer akun alumni.",
    testimonials: [
      {
        id: "t1",
        name: "Bpk. H. Sakirin",
        avatar: "/images/portfolio/IMG_7838.webp",
        location: "Youtuber",
        status: "Silver Play Button",
        text: "Alhamdulillah setelah merombak script 3 detik pertama sesuai arahan mentor, video review gadget saya akhirnya pecah menembus 100 ribu penonton reguler!"
      },
      {
        id: "t2",
        name: "Bpk. Romy - Bogor",
        avatar: "/images/portfolio/IMG_7840.webp",
        location: "TikToker",
        status: "Sangat Puas",
        text: "Gila sih cara penyampaian materi brand deals nya. Kemarin saya tawarkan media kit rancangan akademi ke brand kopi lokal, langsung deal kontrak 3 bulan!"
      },
      {
        id: "t3",
        name: "Ibu Andini - Bukit",
        avatar: "/images/portfolio/IMG_7841.webp",
        location: "IG Reels",
        status: "Viral Creator",
        text: "Halo mas-mas semua, selesai juga ya keluh kesah drama nulis script video resep kue saya kemarin hehe. Sangat bersyukur diajari sound design yang syahdu."
      }
    ],
    pricingLabel: "CREATOR COURSE FEES",
    pricingTitle: "INVESTASI TERBAIK UNTUK PENGARUH DIGITAL ANDA",
    pricingSub: "Pilih Tipe Pembelajaran Sesuai Tujuan & Platform Prioritas Anda (Promo diskon 50% coret menyala warna emas)",
    pricingPackages: [
      {
        id: "creator-basic",
        title: "Creator Basic",
        normalPrice: "Rp1.200.000",
        promoPrice: "Rp600.000",
        specs: [
          "Modul Video Penulisan Naskah Hook Sederhana",
          "Panduan Pengambilan Gambar dengan HP Layak",
          "Akses ke Asset B-Roll & backsound bebas hak cipta",
          "Komunitas Kreatif Discord selama 1 Bulan"
        ]
      },
      {
        id: "viral-editor",
        title: "Viral Video Editor Pro",
        normalPrice: "Rp2.400.000",
        promoPrice: "Rp1.200.000",
        specs: [
          "Dasar & Advance CapCut + Premiere Pro Editing",
          "Cara setting sound effect yang memicu retensi",
          "Gaya subtitle pop-up bergaya influencer internasional",
          "Database preset color grading cinematic exclusive"
        ]
      },
      {
        id: "authority-scripting",
        title: "Naskah & Hook Masterclass",
        normalPrice: "Rp3.000.000",
        promoPrice: "Rp1.500.000",
        specs: [
          "Formula 17 Scripting Hook Penahan Retensi Penonton",
          "Bedah Struktur Cerita Visual (Storytelling Alchemy)",
          "Sesi review naskah mingguan langsung oleh mentor",
          "Riset Kata Kunci SEO Algoritma TikTok & Shorts"
        ]
      },
      {
        id: "monetization-deals",
        title: "Sponsorship & Monetization Academy",
        normalPrice: "Rp4.000.000",
        promoPrice: "Rp2.000.000",
        popular: true,
        specs: [
          "Desain Media Kit & Rate Card yang bernilai premium",
          "Simulasi negosiasi endorsement kontrak bernilai tinggi",
          "Disalurkan langsung ke agensi-agensi periklanan rekanan",
          "Wajib sebutan lencana popular & border menyala emas"
        ]
      },
      {
        id: "creator-inner",
        title: "Creator Inner Circle VIP",
        normalPrice: "Rp8.000.000",
        promoPrice: "Rp4.000.000",
        specs: [
          "Konsultasi Portofolio Konten Pribadi Lifetime",
          "Pertemuan Offline Creator Gathering Bulanan",
          "Akses Gratis Penggunaan Fasilitas Studio Rekaman Utama",
          "Kolaborasi eksklusif dengan top kreator di dalam jaringan kami"
        ]
      }
    ],
    rebateLabel: "REBATE BANNER • PROMO CREATOR UPGRADE",
    rebateTitle: "Melanjutkan Pelatihan Ke Jenjang Executive Brand? Biaya Kelas Basic Akan Dikembalikan 100% Menjadi Kupon Diskon Penuh!",
    rebateBtnText: "Klaim Cashback Kelas 100%",
    quoteText: "“The currency of the digital age is not money, but human attention. Whosoever owns attention controls cashflow.”",
    quoteAuthor: "Andrew Huberman",
    faqLabel: "SUPPORT SYSTEM",
    faqTitle: "FAQ (FREQUENTLY ASKED QUESTIONS)",
    faqs: [
      {
        id: "faq-1",
        question: "Apakah saya harus memiliki wajah yang rupawan untuk menjadi content creator?",
        answer: "Tidak harus sama sekali. Ratusan kreator sukses mengandalkan faceless channel, di mana kekuatan video terletak pada visualisasi b-roll, storytelling naskah mumpuni, serta sound design yang mengesankan."
      },
      {
        id: "faq-2",
        question: "Bagaimana cara kerja klaim pengembalian biaya kelas basic?",
        answer: "Jika Anda memutuskan untuk meng-upgrade keanggotaan ke kelas sponsorship atau inner circle dalam waktu 20 hari, seluruh biaya pendaftaran kelas Basic sebelumnya akan kami kembalikan utuh sebagai pengurang langsung dari biaya upgrade keanggotaan."
      },
      {
        id: "faq-3",
        question: "Apakah diajarkan cara negosiasi dengan agensi luar negeri?",
        answer: "Sangat diajarkan. Kami memiliki modul khusus cara menulis email representatif dalam bahasa Inggris serta standardisasasi kontrak periklanan bertaraf internasional."
      }
    ],
    footerProfile: "Akademi Creator di bawah PT Akademi Kreator Nusantara melahirkan ribuan alumni mandiri berpengaruh di platform TikTok, YouTube, & IG Reels melalui penguatan hook psikologis naskah serta negosiasi brand deals legal profesional.",
    footerAddress: "Eightyeight @Kasablanka Office Tower A Lantai 26 Unit F, Jl. Casablanca Raya No.Kav. 88, Menteng Dalam, Kec. Tebet, Jakarta Selatan, 12870",
    footerContact: "+62 813-8969-965",
    footerEmail: "hello@akademicreator.co.id"
  }
};
