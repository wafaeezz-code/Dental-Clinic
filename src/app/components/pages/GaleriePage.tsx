import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "./Footer";
import heroBg from "figma:asset/51e6edc7a217cbef1a57061dabbbcf76f6452a75.png";
import galleryImg from "figma:asset/79e10df032f05c8aab740313b3228d891dfbef20.png";

const images = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  src: galleryImg,
  alt: `Photo dentaire ${i + 1}`,
}));

export function GaleriePage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <div className="relative h-[340px] w-full overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(23,52,53,0.25)]" />
        <div className="relative z-10 h-full px-[80px] max-w-[1440px] mx-auto">
          <div className="flex h-full flex-col justify-end pb-[120px]">
            <h1 className="text-[#173435] text-[54px] leading-[64.8px] tracking-[-1px]" style={{ fontWeight: 400 }}>
              Galerie
            </h1>
          </div>
          <nav className="absolute left-[80px] bottom-[1px] inline-flex items-center gap-[10px] rounded-full bg-white px-[20px] py-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <Link
              to="/"
              className="text-[#6ea7b1] hover:text-[#39b7bb] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Accueil
            </Link>
            <span className="text-[#5c6f6f]">/</span>
            <span className="text-[#173435] font-semibold">
              Galerie
            </span>
          </nav>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-[60px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-3 gap-[16px]">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img.id)}
                className="group relative overflow-hidden rounded-[10px] aspect-[3/2] block w-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(23,52,53,0)] group-hover:bg-[rgba(23,52,53,0.3)] transition-colors flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.9)" />
                    <path d="M20 13V27M13 20H27" stroke="#39b7bb" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[rgba(0,0,0,0.9)] flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-[24px] right-[24px] text-white text-[40px] leading-none hover:opacity-70"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-[24px] text-white text-[40px] hover:opacity-70"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.length) % images.length);
            }}
          >
            ‹
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-[8px]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-[24px] text-white text-[40px] hover:opacity-70"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
          >
            ›
          </button>
          <div className="absolute bottom-[24px] text-white text-[14px]" style={{ fontWeight: 200 }}>
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
