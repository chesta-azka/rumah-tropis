import React, { useState, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";
import { 
  ChevronLeft, 
  ChevronRight, 
  PhoneCall, 
  ArrowLeft, 
  Video, 
  Phone, 
  MoreVertical, 
  Smile, 
  Paperclip, 
  Mic, 
  Check, 
  CheckCheck,
  Sparkles,
  MessageSquare
} from "lucide-react";

interface ChatBubble {
  sender: "client" | "admin";
  text: string;
  time: string;
  quoted?: string;
}

interface TestimonialChat {
  id: string;
  name: string;
  avatarColor: string;
  status: string;
  messages: ChatBubble[];
}

export default function TestimonialSection() {
  const { theme, activeTemplate } = useTemplate();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const waLink = "https://wa.me/628138969965";

  // Reset slider index when template changes
  useEffect(() => {
    setActiveSlide(0);
  }, [activeTemplate]);

  // High-fidelity chat data tailored for each template
  const getChatsData = (): TestimonialChat[] => {
    if (activeTemplate === "arsitetika-studio") {
      return [
        {
          id: "febri-bekasi",
          name: "bapak Febri ( Bekasi )",
          avatarColor: "bg-orange-600",
          status: "online",
          messages: [
            {
              sender: "admin",
              text: "Sore pa Febri, bagaimana kabarnya pengerjaan struktur di Bekasi? Semua lancar?",
              time: "18.39"
            },
            {
              sender: "client",
              text: "Sore pa wahyu, baik pa sy cek terlebih dahulu. Dan saya ucapkan terimakasih atas bantuannya 🙏",
              time: "18.41"
            },
            {
              sender: "admin",
              text: "Sama-sama pak Febri semoga lancar untuk pembangunannya, saya juga sangat terimakasih karena bapak sudah mempercayakan desainnya kepada kami",
              time: "18.41"
            },
            {
              sender: "client",
              text: "Semoga ada pekerjaan2 lainnya yg bisa sy share ke bapak nanti. Aamiin",
              time: "18.42"
            },
            {
              sender: "admin",
              text: "Aamiin pak ditunggu project selanjutnya",
              time: "18.42"
            },
            {
              sender: "client",
              text: "Sama2 pa. Desain bapak sangat bagus",
              time: "18.48",
              quoted: "Sama-sama pak Febri semoga lancar..."
            }
          ]
        },
        {
          id: "romy-bogor",
          name: "bapak Romy ( Bogor )",
          avatarColor: "bg-blue-600",
          status: "online",
          messages: [
            {
              sender: "admin",
              text: "Selamat sore Pak Romy, penulisan detail gambar SIPIL untuk kolom penyangga di kavling utama sudah selesai direvisi agar aman dari kelembapan tanah.",
              time: "16.15"
            },
            {
              sender: "client",
              text: "Sayang sebenernya kalian gak branding di socmed, tapi it's okay, last but not least, thanks sudah mewujudkan rumah impian saya.",
              time: "16.18"
            },
            {
              sender: "admin",
              text: "Siap Pak Romy, kami memang mengutamakan pembuktian lapangan daripada sekedar gembar-gembor di media sosial agar investasi klien terproteksi.",
              time: "16.20"
            },
            {
              sender: "client",
              text: "design cpt, dan utk konstruksi hmm walau lewat beberapa hari, but it's not our big problem, saya puas dgn Rumah Tropis!",
              time: "16.22"
            }
          ]
        },
        {
          id: "andini-bukit",
          name: "Ibu Andini ( Bukit )",
          avatarColor: "bg-fuchsia-600",
          status: "offline",
          messages: [
            {
              sender: "admin",
              text: "Selamat siang Ibu Andini. Struktur pondasi bore-pile untuk villa bukit hari ini sudah selesai kami uji ketahanannya ya bu.",
              time: "13.44"
            },
            {
              sender: "client",
              text: "Halo mas mas Rumah Tropis semua, selesai juga ya proyek ini dengan drama drama & labil nya aku 😊",
              time: "13.46"
            },
            {
              sender: "admin",
              text: "Hahaha tidak apa-apa bu, wajar sekali demi mewujudkan impian paradise yang sempurna.",
              time: "13.47"
            },
            {
              sender: "client",
              text: "Sukses & lancar ya kalian kedepannya, Amin. Saya sekeluarga sangat puas desainnya mewah & kokoh sekali 🙏",
              time: "13.50"
            }
          ]
        },
        {
          id: "maria-boyolali",
          name: "Ibu Maria ( Boyolali )",
          avatarColor: "bg-emerald-600",
          status: "online",
          messages: [
            {
              sender: "admin",
              text: "Selamat sore Ibu Maria, pengerjaan pemasangan kisi-kisi jati keliling facade sudah tuntas diperiksa pengawas sipil. Hasilnya simetris & kokoh.",
              time: "17.02"
            },
            {
              sender: "client",
              text: "Puji Tuhan rumah kami terselesaikan dengan baik, kami tidak bisa berkata apa2 selain rasa terima kasih kami kepada Tim Rumah Tropis.",
              time: "17.05"
            },
            {
              sender: "admin",
              text: "Terima kasih kembali Ibu Maria, kami sangat bangga bisa menjadi partner pembangunan rumah pelindung keluarga yang abadi.",
              time: "17.07"
            },
            {
              sender: "client",
              text: "semoga rumah ini bisa menjadi pelindung untuk kami sekeluarga, desain bapak dan tim luar biasa 🙏",
              time: "17.08"
            }
          ]
        }
      ];
    }

    if (activeTemplate === "akademicrypto") {
      return [
        {
          id: "romy-crypto",
          name: "Bpk. Romy ( Member VIP )",
          avatarColor: "bg-emerald-600",
          status: "online",
          messages: [
            {
              sender: "admin",
              text: "Malam pak Romy, bagaimana setup charting supply-demand untuk pair BTC kemarin malam?",
              time: "20.10"
            },
            {
              sender: "client",
              text: "Keren banget kurikulum kelas on-chain nya. Saya bisa deteksi akumulasi whale di koin layer-2 kemarin lusa sebelum harganya naik 150%! Sangat puas belajar di sini.",
              time: "20.12"
            },
            {
              sender: "admin",
              text: "Luar biasa! Tetap disiplin dengan money management dan trailing stopnya ya pak.",
              time: "20.15"
            },
            {
              sender: "client",
              text: "Sipp mentor, saldo portofolio sekarang bertumbuh sehat berkat formula compounding di akademi.",
              time: "20.16"
            }
          ]
        },
        {
          id: "sakirin-crypto",
          name: "Bpk. H. Sakirin",
          avatarColor: "bg-orange-600",
          status: "online",
          messages: [
            {
              sender: "admin",
              text: "Selamat siang Pak Agung, bagaimana perkembangan portofolio trading futures bapak sejak bergabung?",
              time: "11.20"
            },
            {
              sender: "client",
              text: "Alhamdulillah, portofolio trading futures saya sekarang konsisten bertumbuh sehat setelah memahami Supply-Demand. Terima kasih banyak tim mentor Akademi Crypto!",
              time: "11.23"
            },
            {
              sender: "admin",
              text: "Alhamdulillah, senang mendengarnya. Yang penting emosi terjaga dan hindari spekulasi liar.",
              time: "11.25"
            },
            {
              sender: "client",
              text: "Aamiin. Ilmu dari bapak beneran membuka gerbang berpikir logis di web3 ini.",
              time: "11.28"
            }
          ]
        },
        {
          id: "andini-crypto",
          name: "Ibu Andini ( Solidity Graduate )",
          avatarColor: "bg-fuchsia-600",
          status: "offline",
          messages: [
            {
              sender: "admin",
              text: "Halo bu Andini, pengerjaan deploy smart contract smart-vesting di Sepolia Testnet kemarin sudah beres?",
              time: "14.30"
            },
            {
              sender: "client",
              text: "Halo mentor semua, selesai juga kelas Solidity Web3 nya meskipun sempat pusing coding dApps nya hehe. Sukses terus ya Akademi Crypto ke depannya, Amin!",
              time: "14.33"
            },
            {
              sender: "admin",
              text: "Selamat bu! Pemahaman on-chain data ini adalah fondasi mahal di industri kreativitas tokenisasi.",
              time: "14.35"
            },
            {
              sender: "client",
              text: "Sangat bersyukur belajar di sini dibimbing sampai beneran paham logika onstack.",
              time: "14.38"
            }
          ]
        }
      ];
    }

    // Default / akademicreator
    return [
      {
        id: "sakirin-creator",
        name: "Bpk. H. Sakirin ( Youtuber )",
        avatarColor: "bg-blue-600",
        status: "online",
        messages: [
          {
            sender: "admin",
            text: "Selamat malam Pak Sakirin, bagaimana grafik retensi video review gadget bapak minggu ini?",
            time: "21.11"
          },
          {
            sender: "client",
            text: "Alhamdulillah setelah merombak script 3 detik pertama sesuai arahan mentor, video review gadget saya akhirnya pecah menembus 100 ribu penonton reguler!",
            time: "21.15"
          },
          {
            sender: "admin",
            text: "Luar biasa! Hook 3 detik pertama adalah penentu utama algoritma merekomendasikan feed penonton.",
            time: "21.17"
          },
          {
            sender: "client",
            text: "Betul mas, penulisan naskah rancangan mentor emang gak ada tandingannya.",
            time: "21.19"
          }
        ]
      },
      {
        id: "romy-creator",
        name: "Bpk. Romy ( TikToker )",
        avatarColor: "bg-emerald-600",
        status: "online",
        messages: [
          {
            sender: "admin",
            text: "Malam Pak Romy, bagaimana negosiasi endorse dengan brand kopi kemarin lusa?",
            time: "19.45"
          },
          {
            sender: "client",
            text: "Gila sih cara penyampaian materi brand deals nya. Kemarin saya tawarkan media kit rancangan akademi ke brand kopi lokal, langsung deal kontrak 3 bulan!",
            time: "19.48"
          },
          {
            sender: "admin",
            text: "Alhamdulillah! Media kit yang terstruktur memang menaikkan nilai tawar kreator di mata pemilik modal.",
            time: "19.50"
          },
          {
            sender: "client",
            text: "Thanks banget Akademi Creator bimbingannya gak kaleng-kaleng!",
            time: "19.52"
          }
        ]
      },
      {
        id: "andini-creator",
        name: "Ibu Andini ( Viral Kitchen )",
        avatarColor: "bg-orange-600",
        status: "offline",
        messages: [
          {
            sender: "admin",
            text: "Halo bu Andini, video resep masakan estetik terbarunya terpantau ramai di Reels ya bu?",
            time: "15.02"
          },
          {
            sender: "client",
            text: "Halo mas-mas semua, selesai juga ya keluh kesah drama nulis script video resep kue saya kemarin hehe. Sangat bersyukur diajari sound design yang syahdu.",
            time: "15.05"
          },
          {
            sender: "admin",
            text: "Sama-sama bu, sound design dan tone warna yang pas membuat konten biasa jadi sinematik berselera tinggi.",
            time: "15.08"
          },
          {
            sender: "client",
            text: "Sekarang view stabil melambung naik terus mas, kuncinya di naskah dan hook emang!",
            time: "15.10"
          }
        ]
      }
    ];
  };

  const chats = getChatsData();
  const currentChat = chats[activeSlide] || chats[0];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + chats.length) % chats.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % chats.length);
  };

  const getSectionTexts = () => {
    if (activeTemplate === "arsitetika-studio") {
      return {
        label: "TESTIMONI",
        title: "Cerita Jujur Klien Kami",
        sub: "Bukan asal visualisasi 3D dan janji seperti kontraktor di pasaran luar, tetapi tim Rumah Tropis menghadirkan properti yang berhasil naik valuasinya lewat detail struktur yang kokoh.",
        ctaText: "Konsultasi Gratis",
        ctaPlaceholder: "Halo%20Rumah%2520Tropis,%20saya%20tertarik%20konsultasi%20mengenai%20pembangunan%20dan%20ingin%20melihat%20detail%20karya%20terwujud"
      };
    }
    if (activeTemplate === "akademicrypto") {
      return {
        label: "BUKTI NYATA MEMBER",
        title: "Cerita Jujur Alumni",
        sub: "Bukan rekayasa screenshot demo atau janji kaya kilat tanpa usaha, tetapi bimbingan teknis analisis on-chain mendalam demi ketahanan aset yang berdaya saing.",
        ctaText: "Konsultasi Kelas Gratis",
        ctaPlaceholder: "Halo%20Akademi%2520Crypto,%20saya%20tertarik%20belajar%20on-chain%20dan%20ingin%20bergabung%20VIP"
      };
    }
    return {
      label: "BUKTI HASIL KREATOR",
      title: "Cerita Jujur Siswa Kami",
      sub: "Bukan asal membuat video viral sesaat, kurikulum penulisan naskah yang matang terbukti meningkatkan retensi audiens dan mendatangkan sponsor brand ternama.",
      ctaText: "Konsultasi Gratis",
      ctaPlaceholder: "Halo%20Akademi%2520Creator,%20saya%20tertarik%20merancang%20personal%2520brand"
    };
  };

  const textMeta = getSectionTexts();

  return (
    <section id="testimonial" className="py-24 border-b border-white/[0.03] relative overflow-hidden bg-[#020204]" style={{ backgroundColor: theme.bg }}>
      
      {/* Absolute luxurious background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] bg-emerald-500/20" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] bg-fuchsia-500/20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span 
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] font-extrabold block"
            style={{ color: theme.primary }}
          >
            {textMeta.label}
          </span>
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none text-center">
            {textMeta.title}
          </h2>
          <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed max-w-2xl mx-auto opacity-90 italic">
            "{textMeta.sub}"
          </p>
          <div className="w-12 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* High-Fidelity Phone Simulator Carousel */}
        <div className="max-w-md mx-auto relative px-8 sm:px-0">
          
          {/* External Left Navigation Trigger Button */}
          <div className="absolute left-[-20px] sm:left-[-64px] top-1/2 -translate-y-1/2 z-30">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#1A1A22]/80 hover:bg-[#252530] text-white border border-white/10 hover:border-white/20 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-[1.08] active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-300" />
            </button>
          </div>

          {/* External Right Navigation Trigger Button */}
          <div className="absolute right-[-20px] sm:right-[-64px] top-1/2 -translate-y-1/2 z-30">
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#1A1A22]/80 hover:bg-[#252530] text-white border border-white/10 hover:border-white/20 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-[1.08] active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-zinc-300" />
            </button>
          </div>

          {/* Smartphone Frame Outer Bezel */}
          <div className="mx-auto w-full max-w-[340px] aspect-[9/18.5] rounded-[42px] p-[10px] bg-[#15151b] border-4 border-[#2f313a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] relative flex flex-col overflow-hidden select-none">
            
            {/* Top Speaker Grille & Dynamic Island Camera Punchhole */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              <div className="w-14 h-3 rounded-full bg-[#0a0a0d] border border-neutral-800/40" />
            </div>

            {/* Inner Phone Screen */}
            <div className="w-full h-full rounded-[34px] overflow-hidden bg-[#0b141a] flex flex-col relative z-10 border border-black/80">
              
              {/* STATUS BAR (Symmetric Details match references exactly) */}
              <div className="px-5 pt-3.5 pb-1 flex justify-between items-center bg-[#1f2c34] text-white font-sans text-[10px] font-bold z-20">
                <span>08.51</span>
                <div className="flex items-center gap-1.5 opacity-85">
                  <span className="text-[8px] font-semibold text-white/90">4G</span>
                  {/* Signal bars */}
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="16" width="3" height="5" rx="0.5" />
                    <rect x="7" y="12" width="3" height="9" rx="0.5" />
                    <rect x="12" y="8" width="3" height="13" rx="0.5" />
                    <rect x="17" y="4" width="3" height="17" rx="0.5" />
                  </svg>
                  {/* Battery */}
                  <div className="w-5 h-2.5 rounded-sm border border-white/60 p-0.5 flex items-center">
                    <div className="w-full h-full bg-[#14c35a] rounded-[1px]" />
                  </div>
                  <span className="text-[7.5px] text-white/90">70%</span>
                </div>
              </div>

              {/* WHATSAPP CHAT HEADER */}
              <div className="px-3 py-2 bg-[#1f2c34] text-white flex items-center justify-between z-20 border-b border-black/10 shadow-md">
                
                {/* Back button, Avatar, Chat details */}
                <div className="flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4 text-white hover:opacity-80 cursor-pointer" />
                  
                  {/* Custom Styled Circle Avatar resembling a real contact */}
                  <div className={`w-9 h-9 rounded-full ${currentChat.avatarColor} text-white flex items-center justify-center font-sans font-bold text-xs ring-1 ring-white/10 shrink-0`}>
                    {currentChat.name.substring(0, 2).toUpperCase()}
                  </div>

                  <div className="ml-1 select-none">
                    <h4 className="text-white text-xs font-black tracking-wide leading-tight max-w-[130px] truncate">
                      {currentChat.name}
                    </h4>
                    <span className="text-[8.5px] text-[#00e676] font-medium block animate-pulse">
                      {currentChat.status}
                    </span>
                  </div>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-3 text-white/90">
                  <Video className="w-4 h-4 hover:opacity-100 opacity-80" />
                  <Phone className="w-3.5 h-3.5 hover:opacity-100 opacity-80" />
                  <MoreVertical className="w-4 h-4 hover:opacity-100 opacity-80" />
                </div>

              </div>

              {/* WHATSAPP CHAT THREAD VIEW (Includes background wallpaper) */}
              <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-3.5 relative bg-[#0b141a]">
                
                {/* Visual Doodled Subtle Wallpaper layer (Absolute authenticity) */}
                <div className="absolute inset-0 bg-opacity-5 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* System Timestamp Badge Divider */}
                <div className="flex justify-center my-1 relative z-10">
                  <span className="bg-[#121b22] text-[#8696a0] text-[8.5px] font-sans font-medium px-2.5 py-1 rounded-md shadow uppercase tracking-[0.1em]">
                    HARI INI
                  </span>
                </div>

                {/* Bubbles iteration */}
                {currentChat.messages.map((bubble, bIdx) => {
                  const isOutgoing = bubble.sender === "admin";
                  
                  return (
                    <div 
                      key={bIdx}
                      className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} w-full relative z-10`}
                    >
                      {/* Bubble Body styled after realistic Android WhatsApp bubble specs */}
                      <div 
                        className={`max-w-[85%] rounded-[14px] px-3.5 py-1.8 shadow-[0_1px_1.5px_rgba(0,0,0,0.3)] relative text-left ${
                          isOutgoing 
                            ? 'bg-[#005c4b] text-white rounded-tr-none' 
                            : 'bg-[#202c33] text-zinc-100 rounded-tl-none'
                        }`}
                      >
                        {/* Quote reply bubble if defined (Matches "Bapak Febri" Screenshot style) */}
                        {bubble.quoted && (
                          <div className="mb-2 bg-black/20 border-l-[3px] border-[#00a884] rounded p-1.5 text-[10px] opacity-90 select-none">
                            <span className="text-[#00e676] font-bold block text-[8px] uppercase">
                              {currentChat.name}
                            </span>
                            <span className="text-zinc-300 truncate block">
                              {bubble.quoted}
                            </span>
                          </div>
                        )}

                        <p className="font-sans text-[11px] sm:text-[11.5px] leading-relaxed break-words select-none font-medium">
                          {bubble.text}
                        </p>

                        {/* Timestamp & Double Check Verification Indicator inside chat bubble */}
                        <div className="flex justify-end items-center gap-0.5 mt-1">
                          <span className="text-[7.5px] font-mono text-zinc-400">
                            {bubble.time}
                          </span>
                          {isOutgoing && (
                            <CheckCheck className="w-3 h-3 text-[#53bdeb] shrink-0" />
                          )}
                        </div>

                        {/* Speech Bubble Triangular Side-Tails */}
                        {isOutgoing ? (
                          <div className="absolute top-0 -right-1.5 w-0 h-0 border-t-[8px] border-t-[#005c4b] border-r-[8px] border-r-transparent" />
                        ) : (
                          <div className="absolute top-0 -left-1.5 w-0 h-0 border-t-[8px] border-t-[#202c33] border-l-[8px] border-l-transparent" />
                        )}

                      </div>
                    </div>
                  );
                })}

              </div>

              {/* WHATSAPP FOOTER INPUT BAR SIMULATOR */}
              <div className="p-1.5 bg-[#1f2c34] flex items-center gap-1 z-20">
                <div className="flex-1 bg-[#2a3942] rounded-full h-8 px-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smile className="w-4 h-4 text-[#8696a0]" />
                    <span className="text-[10px] text-[#8696a0] select-none">Message</span>
                  </div>
                  <Paperclip className="w-4 h-4 text-[#8696a0]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
                  <Mic className="w-4 h-4 text-white" />
                </div>
              </div>

            </div>

          </div>

          {/* Core Interactive Pagination Dots (Indicator Bullets below phone bezel) */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {chats.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveSlide(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === dotIdx 
                    ? 'scale-125' 
                    : 'bg-zinc-700/60 hover:bg-zinc-600'
                }`}
                style={{
                  backgroundColor: activeSlide === dotIdx ? theme.primary : undefined
                }}
              />
            ))}
          </div>

        </div>

        {/* Action Call Section (Underneath CTA block matching screenshots seamlessly) */}
        <div className="text-center mt-16 md:mt-20 space-y-6 max-w-xl mx-auto pb-4">
          
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0" style={{ color: theme.primary }} />
            <span className="text-[8.5px] md:text-[9.5px] font-mono text-zinc-400 uppercase tracking-widest leading-none">
              REKOMENDASI: MULAI DISKUSI GRATIS HARI INI
            </span>
          </div>

          <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed max-w-md mx-auto opacity-90">
            Dapatkan sesi tukar pikiran langsung dengan perancang & tenaga teknis kami tanpa dipungut biaya sepeser pun.
          </p>

          <div className="flex flex-col items-center">
            
            {/* Main Central Action CTA Trigger button */}
            <a
              href={`${waLink}?text=${textMeta.ctaPlaceholder}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 px-12 py-5 text-black font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: `0 10px 25px ${theme.primary}30`
              }}
            >
              <PhoneCall className="w-4 h-4 text-black shrink-0 animate-bounce" />
              <span>{textMeta.ctaText}</span>
            </a>

            {/* Fine print info */}
            <span className="text-[8.5px] font-mono text-zinc-600 uppercase tracking-widest block mt-4">
              • TERHUBUNG LANGSUNG KE TELEPON WHATSAPP RESMI KAMI
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
