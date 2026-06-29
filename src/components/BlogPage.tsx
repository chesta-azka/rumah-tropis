import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Share2, MessageSquare, Check } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";
import { blogPosts, BlogPost } from "../blogData";

interface BlogPageProps {
  onBackToHome: () => void;
  selectedPostSlug?: string;
  onSelectPost: (slug: string | null) => void;
}

export default function BlogPage({ onBackToHome, selectedPostSlug, onSelectPost }: BlogPageProps) {
  const { theme } = useTemplate();
  const [selectedTag, setSelectedTag] = useState<string>("Semua");
  const [copied, setCopied] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPostSlug]);

  const activePost = blogPosts.find((post) => post.slug === selectedPostSlug);

  // Extract unique tags
  const allTags = ["Semua", ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))];

  const filteredPosts = selectedTag === "Semua"
    ? blogPosts
    : blogPosts.filter((post) => post.tags.includes(selectedTag));

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waLink = "https://wa.me/628138969965?text=Halo%20Rumah%20Tropis%20-%20PT%20Tata%20Ruang%20Kota%2C%20saya%20tertarik%20untuk%20konsultasi%20desain%20setelah%20membaca%20artikel%20Anda.";

  if (activePost) {
    return (
      <div className="bg-[#050505] min-h-screen text-stone-100 pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb & Back navigation */}
          <button
            onClick={() => onSelectPost(null)}
            className="group flex items-center gap-2 text-[#A3A3A3] hover:text-white font-sans text-sm tracking-wider uppercase mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Jurnal
          </button>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {activePost.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-sans tracking-widest uppercase px-3 py-1 bg-white/5 text-stone-300 border border-white/5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 
              className="text-3xl md:text-5xl font-serif font-medium tracking-tight leading-tight text-white mb-6"
              style={{ fontFamily: theme.fontTitle }}
            >
              {activePost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[#A3A3A3] font-sans text-sm border-y border-white/5 py-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#B88A6E]" style={{ color: theme.primary }} />
                <span>
                  <strong className="text-white">{activePost.author}</strong> — {activePost.authorRole}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{activePost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{activePost.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-white/5">
            <img
              src={activePost.coverImage}
              alt={activePost.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-2">
              <div 
                className="prose prose-invert prose-stone max-w-none font-sans text-stone-300 leading-relaxed text-base space-y-6"
                dangerouslySetInnerHTML={{ __html: activePost.content }}
              />

              {/* Share & Support Action buttons */}
              <div className="flex flex-wrap gap-4 items-center justify-between border-t border-white/10 mt-12 pt-8">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors text-sm font-sans tracking-wide cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Link Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Bagikan Artikel</span>
                    </>
                  )}
                </button>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-black font-sans text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg hover:scale-[1.02] cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Konsultasikan Rencana Desain
                </a>
              </div>
            </div>

            {/* Sidebar with dynamic CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 rounded-2xl bg-stone-900/60 border border-white/5 text-center relative overflow-hidden">
                  <div 
                    className="absolute -top-[40%] -right-[40%] w-[180px] h-[180px] rounded-full blur-[80px] opacity-[0.15]"
                    style={{ backgroundColor: theme.primary }}
                  />
                  
                  <span className="text-xs font-mono tracking-widest text-[#B88A6E] uppercase block mb-2" style={{ color: theme.primary }}>
                    PT TATA RUANG KOTA
                  </span>
                  
                  <h3 className="text-xl font-serif text-white mb-3">Wujudkan Rumah Impian Anda</h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-6">
                    Konsultasikan desain arsitektur rumah tropis modern, kantor, atau ruang usaha Anda bersama tim arsitek profesional kami secara gratis sekarang juga.
                  </p>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-black font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-90 shadow-xl"
                    style={{ backgroundColor: theme.primary }}
                  >
                    Mulai Konsultasi
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* More Posts list */}
                <div className="p-6 rounded-2xl bg-stone-900/20 border border-white/5">
                  <h3 className="text-base font-serif text-white mb-4 border-b border-white/5 pb-2">Artikel Lainnya</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter((p) => p.slug !== selectedPostSlug)
                      .slice(0, 3)
                      .map((post) => (
                        <button
                          key={post.id}
                          onClick={() => onSelectPost(post.slug)}
                          className="w-full text-left group cursor-pointer block"
                        >
                          <h4 className="text-sm font-sans font-medium text-stone-300 group-hover:text-[#B88A6E] transition-colors line-clamp-2" style={{ "--hover-color": theme.primary } as React.CSSProperties}>
                            {post.title}
                          </h4>
                          <span className="text-xs font-sans text-stone-500 block mt-1">{post.date}</span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog list view
  return (
    <div className="bg-[#050505] min-h-screen text-stone-100 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-12 flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-stone-500">
          <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">BERANDA</button>
          <span>/</span>
          <span className="text-white">JURNAL ARSITEKTUR</span>
        </div>

        {/* Head Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 
            className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-tight text-white mb-4"
            style={{ fontFamily: theme.fontTitle }}
          >
            Jurnal Arsitektur &amp; Inspirasi Hunian Mewah
          </h1>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: theme.primary }} />
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed">
            Temukan inspirasi arsitektur terbaik, tren desain Rumah Tropis Mewah di Bali &amp; Jakarta, panduan material berkualitas tinggi, serta tips konstruksi premium dari PT Tata Ruang Kota.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                selectedTag === tag
                  ? "text-black border-transparent"
                  : "text-stone-400 border-white/5 hover:text-white hover:bg-white/5"
              }`}
              style={{
                backgroundColor: selectedTag === tag ? theme.primary : "transparent",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post.slug)}
              className="group cursor-pointer bg-stone-900/30 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 flex gap-1">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-sans tracking-widest uppercase px-2.5 py-1 bg-black/85 text-stone-200 border border-white/5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Meta & Description */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-mono text-stone-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B88A6E]" style={{ color: theme.primary }} />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 
                  className="text-xl font-serif text-white font-medium mb-3 group-hover:text-[#B88A6E] transition-colors line-clamp-2"
                  style={{ fontFamily: theme.fontTitle }}
                >
                  {post.title}
                </h3>

                <p className="text-stone-400 font-sans text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Arrow Link footer */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-widest uppercase text-white group-hover:text-[#B88A6E] transition-colors" style={{ "--hover-color": theme.primary } as React.CSSProperties}>
                  <span>BACA ARTIKEL</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No posts fall-back */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400 text-sm font-sans">Tidak ada artikel dalam kategori ini.</p>
          </div>
        )}

      </div>
    </div>
  );
}
