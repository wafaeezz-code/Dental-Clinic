import { Link } from "react-router";
import { Footer } from "./Footer";
import { SpecialtySidebar } from "../SpecialtySidebar";
import doctorImg from "figma:asset/aafc456a914736160f11227a96d5149ca641e552.png";
import beforeAfterImg from "figma:asset/bd1b2d1685caed1f47e77d488f6e2861b6f5748e.png";

const advantages = [
  "Imagerie haute résolution",
  "Réduction de l'exposition aux radiations",
  "Suivi simplifié et efficace",
  "Technologie moderne et fiable",
  "Prise en charge rapide",
  "Diagnostic précis et rapide",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]">
      <circle cx="10" cy="10" r="10" fill="white" stroke="#D8DEDE" />
      <path d="M6 10L8.5 12.5L14 7" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RadiologiePage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="bg-white border-b border-[#e2e6e6] px-[80px] py-[12px]">
        <nav className="flex items-center gap-[8px] text-[13px] max-w-[1440px] mx-auto" style={{ fontWeight: 200 }}>
          <Link to="/" className="text-[#657e7e] hover:text-[#39b7bb]">Accueil</Link>
          <span className="text-[#657e7e]">›</span>
          <Link to="/specialites" className="text-[#657e7e] hover:text-[#39b7bb]">Spécialités</Link>
          <span className="text-[#657e7e]">›</span>
          <span className="text-[#39b7bb]">Radiologie dentaire numérique</span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px]">
        <div className="flex gap-[40px] items-start">
          <SpecialtySidebar />

          <div className="flex-1">
            <h1 className="text-[#173435] text-[52px] leading-[64.8px] tracking-[-1px] mb-[32px]" style={{ fontWeight: 400 }}>
              Radiologie dentaire numérique
            </h1>

            <div className="rounded-[15px] overflow-hidden mb-[32px] h-[400px]">
              <img src={doctorImg} alt="Radiologie dentaire" className="w-full h-full object-cover" />
            </div>

            <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[20px]" style={{ fontWeight: 400 }}>
              Notre cabinet dispose de deux niveaux de radiologie numérique pour répondre à tous les besoins diagnostiques. La radiologie numérique standard, panoramique et bitewing, offre des images à haute résolution, immédiatement disponibles sur écran, avec une exposition aux rayonnements réduite par rapport aux anciennes radiographies sur film.
            </p>
            <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[40px]" style={{ fontWeight: 400 }}>
              Nous disposons également d'un scanner CBCT (Cone Beam CT), qui génère des reconstructions 3D complètes de vos mâchoires et de vos structures osseuses. Cette technologie est indispensable pour la planification des implants dentaires : elle permet de mesurer précisément le volume osseux disponible, d'identifier les structures anatomiques à respecter et de préparer une chirurgie guidée avec une précision au dixième de millimètre.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-[#F8F8F8] rounded-[30px] p-[48px] mx-[80px] mt-[-40px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid gap-[40px] lg:grid-cols-[1.35fr_1fr] items-center">
            <div>
              <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[16px]">
                <span className="text-[#14bec9] text-[14px]" style={{ fontWeight: 200 }}>Nos avantages</span>
              </div>
              <h2 className="text-[#173435] text-[42px] leading-[52px] tracking-[-1px] mb-[18px]" style={{ fontWeight: 400 }}>
                Pourquoi la Radiologie dentaire numérique ?
              </h2>
              <p className="text-[#657e7e] text-[18px] leading-[32px] mb-[32px]" style={{ fontWeight: 400 }}>
                Nous utilisons la radiologie dentaire numérique de pointe pour un diagnostic précis et rapide, offrant des soins de qualité supérieure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mb-[32px]">
                {advantages.map((a) => (
                  <div key={a} className="flex items-start gap-[10px]">
                    <CheckIcon />
                    <span className="text-[#173435] text-[15px] leading-[24px]" style={{ fontWeight: 200 }}>{a}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block bg-[#0d4685] text-white rounded-[30px] px-[32px] py-[14px] text-[16px] hover:opacity-90 transition-opacity"
                style={{ fontWeight: 700 }}
              >
                Réserver une consultation
              </Link>
            </div>
            <div className="rounded-[28px] overflow-hidden shadow-[0px_24px_50px_rgba(23,52,53,0.08)]">
              <img src={beforeAfterImg} alt="Avant / Après" className="w-full h-full min-h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
