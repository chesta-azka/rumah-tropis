import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { 
  Check, 
  X, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Calendar, 
  Award, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Cpu, 
  TrendingDown,
  Video,
  Play,
  Users
} from "lucide-react";

export default function WhyUsSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  // Function to render highlighted narrative text following matching Akademi Crypto styles
  const renderHighlightedText = (index: number) => {
    if (activeTemplate === "arsitetika-studio") {
      if (index === 0) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-sans font-medium">
            <span className="text-[#5B6A56] font-extrabold font-serif">Karena mengurus rancang dan bangun properti sendirian itu mahal dan sangat merugi.</span>{" "}
            Bersama Rumah Tropis klien{" "}
            <span className="text-white underline decoration-[#B88A6E] underline-offset-4 font-bold">tidak cuma terima gambar</span>
            , klien akan masuk ke{" "}
            <span className="text-[#B88A6E] font-extrabold uppercase tracking-wide">standar kualitas praktisi</span>{" "}
            yang sudah lebih dari lima tahun di bidang konstruksi. Lihat cara kami{" "}
            <span className="text-[#FEF9ED] font-bold bg-[#B88A6E]/20 px-1.5 py-0.5 rounded">merespons iklim secara makro</span>,{" "}
            <span className="text-zinc-100 font-bold border-b border-[#B88A6E]/30">meracik material alamnya</span>, dan{" "}
            <span className="text-[#5B6A56] font-bold">menjaga nilai fungsional aset.</span>
          </p>
        );
      }
      if (index === 1) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-sans font-medium">
            <span className="text-[#B88A6E] font-extrabold block mb-3">Kebanyakan orang membuang dana ratusan juta karena membangun properti dengan cara yang keliru, bangunan rusak dulu baru paham.</span>{" "}
            Di Rumah Tropis seluruh klien akan{" "}
            <span className="text-[#5B6A56] font-extrabold underline decoration-[#5B6A56]/60 underline-offset-4">dipandu dari nol sampai rampung</span>{" "}
            lewat manajemen terpadu yang mencakup{" "}
            <span className="text-[#FEF9ED] font-bold">legalitas, kekuatan struktur & presisi desain, sampai lansekap tropis.</span>{" "}
            Semua dipandu arsitek senior dan kontraktor yang{" "}
            <span className="text-[#B88A6E] font-bold italic bg-[#4D3C2F]/30 px-1.5 py-0.5 rounded border border-white/5">hidupnya memang di lapangan.</span>
          </p>
        );
      }
      if (index === 2) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-sans font-medium">
            <span className="text-[#F5E6D3] font-extrabold">Hampir semua aset properti mewah dan bernilai tinggi dibangun oleh praktisi yang menjaga kualitas, bukan memotong standar mutunya.</span>{" "}
            Setiap klien berhak atas{" "}
            <span className="text-[#5B6A56] font-extrabold">akses pendampingan eksklusif di fase perawatan struktur</span>{" "}
            demi menjaga kualitas fisik properti, langkah pasti menuju tujuan yang sama yaitu{" "}
            <span className="text-[#FEF9ED] font-black uppercase tracking-widest bg-[#5B6A56]/15 border border-[#5B6A56]/30 px-2.5 py-1 rounded inline-block mt-2">investasi aman.</span>
          </p>
        );
      }
    }

    if (activeTemplate === "akademicrypto") {
      if (index === 0) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-mono font-medium">
            <span className="text-[#00FC8B] font-extrabold">Karena mengelola portofolio crypto sendirian tanpa ilmu itu mahal dan sangat membahayakan modal.</span>{" "}
            Bersama Akademi Crypto, murid <span className="text-white font-bold underline decoration-[#00FC8B] underline-offset-4">tidak cuma terima rekomendasi koin</span>, murid akan masuk ke ekosistem terstruktur di bawah bimbingan praktisi ahli yang sudah melewati siklus bear market ekstrem. Lihat cara mendeduksi market secara makro, mengelola resiko, dan mengambil keputusan real-time.
          </p>
        );
      }
      if (index === 1) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-mono font-medium">
            <span className="text-red-400 font-extrabold block mb-3">Kebanyakan orang kehilangan ratusan juta karena membeli koin di pucuk tren, merugi dulu baru tersadar.</span>{" "}
            Di Akademi Crypto, seluruh murid <span className="text-[#00FC8B] font-extrabold underline decoration-[#00FC8B]/40">dipandu dari nol secara fundamental</span> mencakup sekuritas wallet, analisis teknikal, on-chain data, hingga psikologi trading agar tidak mudah goyah oleh market panik. Semua dipandu mentor aktif yang hidupnya memang di industri ini.
          </p>
        );
      }
      if (index === 2) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-mono font-medium">
            <span className="text-purple-400 font-extrabold">Hampir semua portofolio bernilai jutaan dollar dibangun oleh spekulator yang konsisten menjaga modal besarnya, bukan memotong SOP tradingnya.</span>{" "}
            Setiap member berhak mendapatkan <span className="text-[#00FC8B] font-extrabold">akses riset eksklusif berkala</span> demi mengamankan performa portofolio digital dalam iklim perekonomian makro, langkah pasti menuju tujuan yang sama yaitu bebas secara finansial.
          </p>
        );
      }
    }

    if (activeTemplate === "akademicreator") {
      if (index === 0) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-sans font-medium">
            <span className="text-fuchsia-400 font-extrabold">Karena merintis karir sebagai content creator sendirian tanpa formula itu melelahkan dan sangat merugi waktu.</span>{" "}
            Bersama Akademi Creator, murid <span className="text-white font-bold underline decoration-[#D846EF] underline-offset-4">tidak cuma belajar cara editing video</span>, murid akan diajarkan sistem menulis script terperinci yang memanipulasi retensi penonton agar betah menyimak video Anda hingga detik akhir.
          </p>
        );
      }
      if (index === 1) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-sans font-medium">
            <span className="text-red-400 font-extrabold block mb-3">Kebanyakan pemula membuang jutaan rupiah membeli kamera mahal namun videonya tetap sepi penonton, merasa frustrasi dulu baru paham.</span>{" "}
            Di Akademi Creator seluruh murid <span className="text-fuchsia-400 font-extrabold underline decoration-fuchsia-500/50">dibimbing dari nol</span> merumuskan pilar konsep, teknik pencahayaan murah berkualitas bioskop, penulisan hook 3 detik pertama, sampai cara membaca algoritma analitik dashboard.
          </p>
        );
      }
      if (index === 2) {
        return (
          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-sans font-medium">
            <span className="text-[#D846EF] font-extrabold">Hampir semua influencer dengan tarif endorsement fantastis membangun personal branding mereka secara disiplin, bukan asal upload video.</span>{" "}
            Setiap siswa mendapatkan <span className="text-white font-extrabold">akses pendampingan portofolio konten berkala</span> demi menjaga estetika visual serta kredibilitas akun di mata para brand manager kelas atas.
          </p>
        );
      }
    }

    const rawPara = data.whyUsParas && data.whyUsParas[index] ? data.whyUsParas[index] : "";
    return <p className="text-zinc-300 text-sm md:text-lg leading-relaxed">{rawPara}</p>;
  };

  // Helper functions to render beautiful, hyper-visual floating cards for each step
  const renderVisualContent = (index: number) => {
    if (activeTemplate === "arsitetika-studio") {
      if (index === 0) {
        // Engineering Spec & Client Interaction Map
        return (
          <div className="bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl relative shadow-2xl overflow-hidden min-h-[220px]">
            {/* Visual design compass element */}
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Compass className="w-48 h-48 text-[#B88A6E]" />
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B88A6E] animate-ping" />
                <span className="text-[10px] font-mono tracking-widest text-[#B88A6E] uppercase font-bold">
                  Kajian Iklim Mandiri
                </span>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase">
                LATITUDE: -6.2088° S
              </span>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Client Reply Simulation */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-[#B88A6E] border border-[#B88A6E]/30 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  RT
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white font-bold font-sans">Rizky (Senior Site Lead)</span>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#B88A6E]/10 text-[#B88A6E]">ARCHITECT</span>
                  </div>
                  <p className="text-zinc-400 text-[10px] mt-1 pr-2">
                    "Pak, cek kemiringan tumpuk bata roster. Sudut 15° untuk cegah air tampias masuk tapi sirkulasi silang tetap optimal 24 jam."
                  </p>
                </div>
              </div>

              {/* Specification badge matrix */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-black/40 border border-[#B88A6E]/15 p-2 rounded-lg text-center">
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">Humidity Intake</span>
                  <span className="text-[10px] font-mono text-white uppercase font-bold mt-0.5 block">Automated Vent</span>
                </div>
                <div className="bg-black/40 border border-[#B88A6E]/15 p-2 rounded-lg text-center">
                  <span className="text-[8px] font-mono text-zinc-500 uppercase block">Sunpath Protection</span>
                  <span className="text-[10px] font-mono text-[#B88A6E] uppercase font-bold mt-0.5 block">Deep Overhang 1.8M</span>
                </div>
              </div>
            </div>
          </div>
        );
      }

      if (index === 1) {
        // Complete Project Phase Tracker
        return (
          <div className="bg-[#0A0A0C] border border-white/5 p-6 rounded-2xl relative shadow-2xl overflow-hidden min-h-[220px]">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#B88A6E] uppercase font-bold">
                Progress Management Tracker
              </span>
              <span className="text-[#5B6A56] text-[8px] font-mono bg-[#5B6A56]/15 border border-[#5B6A56]/30 px-2 py-0.5 rounded font-bold uppercase animate-pulse">
                Active Client Board
              </span>
            </div>

            <div className="space-y-3">
              {[
                { name: "Legalitas & IMB Tapak", state: "Completed / Amdal Verified", verified: true },
                { name: "Pengecoran Struktur Beton K-350", state: "Cured & Slump Certified", verified: true },
                { name: "Sistem Konstruksi Presisi Atap", state: "Active Construction Plan", verified: false, current: true },
                { name: "Penataan Lansekap Mikro", state: "Scheduled Stage 4", verified: false }
              ].map((phase, i) => (
                <div key={i} className={`flex items-center justify-between p-2 rounded-lg border ${phase.current ? 'bg-[#B88A6E]/5 border-[#B88A6E]/30 shadow-md' : 'bg-white/[0.01] border-white/5'}`}>
                  <div className="flex items-center gap-2.5">
                    {phase.verified ? (
                      <div className="w-4 h-4 rounded-full bg-[#5B6A56]/20 border border-[#5B6A56] flex items-center justify-center text-[#5B6A56] text-[8px] font-bold">✓</div>
                    ) : phase.current ? (
                      <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-500 text-[8px] font-bold animate-spin">•</div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 text-[7px] font-bold">0{i+1}</div>
                    )}
                    <span className={`text-[11px] font-sans ${phase.verified ? 'text-zinc-400 line-through' : 'text-zinc-200'}`}>{phase.name}</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#B88A6E]">{phase.state}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }

      if (index === 2) {
        // Structural SLA Lifetime Warranty Deed
        return (
          <div className="bg-[#0E0E12] border-2 border-[#B88A6E]/20 p-6 rounded-2xl relative shadow-2xl overflow-hidden min-h-[220px]">
            {/* Background luxury seal badge icon overlay */}
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
              <Award className="w-36 h-36 text-yellow-500" />
            </div>

            <div className="border border-white/10 p-4 rounded-xl relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold block">Exclusive Indemnity Act</span>
                    <h4 className="text-white font-serif-title text-sm font-extrabold uppercase tracking-wide">
                      VIP SLA Warranty Deed
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono border border-[#B88A6E]/30 text-[#B88A6E] px-2 py-0.5 rounded font-bold uppercase bg-[#B88A6E]/10">
                    SLA-A1
                  </span>
                </div>

                <div className="w-8 h-0.5 bg-[#B88A6E] my-3" />

                <ul className="space-y-2 mt-2">
                  {["36 Months Structural Rigidity Contract", "180-Day Calibration on Structural Seals", "VIP Priority Restoration Team"].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] text-zinc-300 font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5B6A56]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[8px] font-mono text-zinc-500 uppercase">PT ARCHITECTURAL INTEGRATED</span>
                <span className="text-[9px] font-mono text-[#B88A6E] font-bold uppercase tracking-wider">SECURE ASSET</span>
              </div>
            </div>
          </div>
        );
      }
    }

    if (activeTemplate === "akademicrypto") {
      if (index === 0) {
        // Crypto Order Book & Live Feed Graphic
        return (
          <div className="bg-[#05050A] border border-[#00FC8B]/10 p-5 rounded-xl text-left font-mono relative min-h-[180px] flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-[10px] text-[#00FC8B] font-bold uppercase tracking-widest">LIVE RESEARCH CONSOLE</span>
              <span className="text-[8px] text-zinc-500 uppercase">STATUS: STREAMING</span>
            </div>
            <div className="space-y-1.5 my-3 text-[10px] text-zinc-300">
              <p className="text-emerald-400 font-bold">▲ ENTRY RANGE CALIBRATED: $58,200 - $59,100</p>
              <p className="text-zinc-500">└ STOPLOSS DECREED: $56,400 (Max 3% Portfolio risk)</p>
              <p className="text-[#00FC8B] font-semibold">─────────────────────────</p>
              <p className="text-zinc-400">🚨 Discord Feed Update: "Mentor Timothy Ronald just entered long BTC position."</p>
            </div>
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-[#00FC8B] opacity-80">
              <span>H4 Cycle MACD crossover</span>
              <span className="text-emerald-400">92% ACCURACY</span>
            </div>
          </div>
        );
      }
      if (index === 1) {
        // Wallet Security & Technical research board
        return (
          <div className="bg-[#05050A] border border-[#00FC8B]/10 p-5 rounded-xl text-left font-mono relative min-h-[180px] flex flex-col justify-between">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-[10px] text-white uppercase tracking-wider">Security Wallet Config</span>
              <span className="text-[9px] text-emerald-400">SECURE 100%</span>
            </div>
            <div className="space-y-2 mt-2 font-sans">
              <div className="bg-white/[0.02] border border-white/5 p-2 rounded flex items-center justify-between">
                <span className="text-[11px] text-zinc-300">1. Multisig Shield (Gnosis)</span>
                <span className="text-[9px] font-mono text-emerald-400">ACTIVE</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-2 rounded flex items-center justify-between">
                <span className="text-[11px] text-zinc-300">2. Cold Wallet Isolation</span>
                <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
              </div>
            </div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase mt-4">
              *Taught by certified on-chain experts
            </div>
          </div>
        );
      }
      if (index === 2) {
        return (
          <div className="bg-[#0D0D15] border-2 border-[#00FC8B]/30 p-5 rounded-xl text-left font-mono relative min-h-[180px] flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-[10px] text-[#00FC8B] uppercase tracking-widest font-bold">VIP RESEARCH CERT DEED</span>
              <span className="text-[9px] bg-red-500/10 border border-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold uppercase">HOT TARGET</span>
            </div>
            <p className="text-zinc-300 text-xs mt-3 font-sans leading-relaxed">
              "Akses berkala eksklusif laporan riset triwulanan keadaan Likuiditas Global, Pola Siklus On-chain, dan Rekomendasi Alokasi Aset."
            </p>
            <div className="pt-3 border-t border-white/5 text-[9px] text-zinc-500 flex justify-between uppercase">
              <span>Class-Elite Membership No. 9210</span>
              <span className="text-white">AUTHORIZED ACT</span>
            </div>
          </div>
        );
      }
    }

    if (activeTemplate === "akademicreator") {
      if (index === 0) {
        return (
          <div className="bg-[#0B0515] border border-[#D846EF]/10 p-5 rounded-xl text-left relative min-h-[180px] flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-fuchsia-400 tracking-wider uppercase font-bold">Script Hook Blueprint</span>
              <span className="text-[9px] text-zinc-500 font-mono">RETENTION ENGINE</span>
            </div>
            <div className="my-3 space-y-1.5 font-mono text-[9px]">
              <p className="text-zinc-300"><span className="text-fuchsia-400 font-bold">[0-3s Hook]:</span> "Rahasia tersembunyi arsitek kelas atas..." (91.2% Retention)</p>
              <p className="text-zinc-300"><span className="text-zinc-400 font-bold">[3-15s Frame]:</span> Introduce pain point & loss projection</p>
              <p className="text-zinc-300"><span className="text-zinc-400 font-bold">[15-45s Deliver]:</span> Exploding concrete structure demo</p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[10px] font-sans text-fuchsia-400 font-bold flex items-center justify-between">
              <span>Auto-retention loops applied</span>
              <span>10x Viral Multiplier</span>
            </div>
          </div>
        );
      }
      if (index === 1) {
        return (
          <div className="bg-[#0B0515] border border-[#D846EF]/10 p-5 rounded-xl text-left relative min-h-[180px] flex flex-col justify-between">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-zinc-300 uppercase">A/B Frame Testing Suite</span>
              <span className="text-[9px] text-emerald-400 font-mono">ACTIVE CTR</span>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <div className="border border-[#D846EF]/20 bg-black/40 p-2 rounded text-center">
                <span className="text-[8px] text-zinc-500 font-mono uppercase block">Title Style A (Generic)</span>
                <span className="text-[11px] text-red-400 font-bold block mt-1">"Bikin rumah model tropis"</span>
                <span className="text-[8px] text-zinc-500 font-mono block mt-1">CTR: 2.1%</span>
              </div>
              <div className="border border-emerald-500/30 bg-black/40 p-2 rounded text-center">
                <span className="text-[8px] text-zinc-500 font-mono uppercase block">Title Style B (Hyper Loop)</span>
                <span className="text-[11px] text-[#00FC8B] font-bold block mt-1">"Desain Atap yang Selamatkan Rumah Klien 2M"</span>
                <span className="text-[8px] text-[#00FC8B] font-mono block mt-1">CTR: 15.8%</span>
              </div>
            </div>
            <div className="text-[8px] font-mono text-zinc-500 uppercase">
              *Taught by premium platform veterans
            </div>
          </div>
        );
      }
      if (index === 2) {
        return (
          <div className="bg-[#0F0520] border-2 border-[#D846EF]/30 p-5 rounded-xl text-left relative min-h-[180px] flex flex-col justify-between shadow-2xl">
            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono text-fuchsia-400 uppercase font-bold">Brand PR Deal Negotiator</span>
              <span className="text-[9px] text-[#00FC8B] font-mono uppercase font-bold">In-Demand</span>
            </div>
            <p className="text-zinc-300 text-xs my-3 font-sans leading-relaxed">
              "Fase pengajaran komprehensif cara menaikkan tarif endorsement, teknik pitching lewat e-mail profesional, dan cara lolos seleksi agensi ternama."
            </p>
            <div className="pt-3 border-t border-white/5 text-[9px] font-mono text-zinc-500 flex justify-between uppercase">
              <span>Sponsor Pitch Book v1.2</span>
              <span className="text-white">APPROVED PROFILES</span>
            </div>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <section id="whyus-timeline" className="py-24 border-b border-white/[0.03] relative overflow-hidden" style={{ backgroundColor: theme.bg }}>
      {/* Dynamic graphic lighting elements matching screenshot vibes */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.03]" style={{ backgroundColor: theme.primary }} />
      <div className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] rounded-full blur-[170px] pointer-events-none opacity-[0.02]" style={{ backgroundColor: theme.secondary }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Title Block precisely styled with luxurious uppercase and custom borders */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span 
            className="text-[10px] font-mono uppercase tracking-[0.25em] block mb-4 font-bold" 
            style={{ color: theme.primary }}
          >
            {data.whyUsLabel || "TENTANG MITRA ARSITEKTUR"}
          </span>
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none">
            {data.whyUsTitle || "KENAPA RUMAH TROPIS?"}
          </h2>
          <div className="w-16 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Timeline Layout Container */}
        <div className="relative border-l-2 border-white/5 pl-8 md:pl-16 ml-4 sm:ml-6 md:ml-12 space-y-24 pb-12">
          
          {/* Vertical Lines Indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B88A6E] via-white/5 to-transparent pointer-events-none" />

          {data.whyUsParas.map((para, i) => (
            <div key={i} className="relative group/timeline transition-all duration-300">
              
              {/* Chronological Glowing Number Pin */}
              <div 
                className="absolute -left-[41px] md:-left-[73px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border font-mono text-xs md:text-sm font-bold z-10 transition-all duration-500 cursor-pointer shadow-lg"
                style={{ 
                  backgroundColor: "#050505",
                  borderColor: i === 0 ? theme.primary : "rgba(255,255,255,0.08)",
                  boxShadow: i === 0 ? `0 0 15px ${theme.primary}50` : "none"
                }}
              >
                <div 
                  className="rounded-full w-full h-full flex items-center justify-center transition-all duration-300 group-hover/timeline:text-black"
                  style={{
                    color: i === 0 ? "#ffffff" : "#A3A3A3"
                  }}
                >
                  #{String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Secondary Check overlay on the pin representing active checklist */}
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border border-black flex items-center justify-center text-black font-extrabold text-[7px] shadow-sm">
                  ✓
                </div>
              </div>

              {/* Sequential Content Panel Grid */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Text Block Column */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span 
                      className="text-[10px] font-mono uppercase tracking-widest font-extrabold"
                      style={{ color: theme.primary }}
                    >
                      DIREKTIF TAHAN ASSET #{i + 1}
                    </span>
                    <div className="w-2.5 h-0.5 bg-white/10" />
                    <span className="text-[10px] font-sans text-zinc-500">STANDARD PROCESS</span>
                  </div>

                  {/* High Quality Highlighted Copywriting */}
                  <div className="text-zinc-300 leading-relaxed font-sans text-opacity-95">
                    {renderHighlightedText(i)}
                  </div>
                </div>

                {/* Highly Visual Layout Mockups Column */}
                <div className="md:col-span-5">
                  <div className="transform transition-transform duration-500 group-hover/timeline:scale-[1.02] group-hover/timeline:-translate-y-1">
                    {renderVisualContent(i)}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Beautiful bottom CTA Button block at the end of Why Us */}
        <div className="text-center mt-20 relative select-none flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[8.5px] font-mono text-zinc-400 uppercase tracking-widest">
              LINDUNGI VALUASI INVESTASI ANDA SEKARANG
            </span>
          </div>

          <a
            href="https://wa.me/628138969965?text=Halo%20Rumah%20Tropis,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20rancang%20dan%20bangun%20properti."
            target="_blank"
            rel="noopener noreferrer"
            className="group/whyusbtn relative px-10 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,138,110,0.25)] hover:scale-[1.03] active:scale-95 border border-[#B88A6E]/30 flex items-center gap-3"
          >
            {/* Elegant gradient background with copper and aged teak */}
            <div 
              className="absolute inset-0 transition-opacity duration-500 group-hover/whyusbtn:opacity-95"
              style={{
                background: "linear-gradient(135deg, #B88A6E 0%, #4D3C2F 100%)"
              }}
            />
            {/* Luminous shimmer gloss effect */}
            <div className="absolute inset-0 opacity-0 group-hover/whyusbtn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(254,249,237,0.15)_0%,transparent_70%)]" />
            
            <PhoneCall className="w-4 h-4 text-[#FEF9ED] relative z-10 animate-pulse group-hover/whyusbtn:scale-110 transition-transform" />
            <span className="relative z-10 transition-colors duration-300">
              Konsultasi Gratis
            </span>
          </a>
          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mt-4">
            * Konsultasi awal gratis via WhatsApp
          </span>
        </div>

      </div>
    </section>
  );
}
