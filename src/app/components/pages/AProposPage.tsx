import { Link } from "react-router";
import { Footer } from "./Footer";
import heroBg from "../../../assets/51e6edc7a217cbef1a57061dabbbcf76f6452a75.png";
import smile1 from "../../../assets/848d405cde2d06792f037092eeff68b483725aa6.png";
import smile2 from "../../../assets/05dfdc575c62dc3444993e9c9455e33389952497.png";
import smile3 from "../../../assets/837cdc35d1d09eec70b3cd0f1843844f2fc723a8.png";

const technologies = [
  {
    title: "Empreinte Optique SIRONA",
    features: ["Rapide et précis", "Confortable", "Résultat immédiat"],
  },
  {
    title: "Radiologie numérique 3D",
    features: ["Haute résolution", "Réduction d'exposition", "Fiable et rapide"],
  },
  {
    title: "Impression 3D dentaire",
    features: ["Précision maximale", "Délai réduit", "Qualité supérieure"],
  },
  {
    title: "Laser dentaire",
    features: ["Moins de douleur", "Meilleure désinfection", "Précision élevée"],
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-[2px]">
      <circle cx="9" cy="9" r="9" fill="#e1f8fa" />
      <path d="M5 9L7.5 11.5L13 6" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AProposPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <div className="relative h-[340px] w-full overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(23,52,53,0.3)]" />
        <div className="relative z-10 h-full px-[80px] max-w-[1440px] mx-auto">
          <div className="flex h-full flex-col justify-end pb-[120px]">
            <h1 className="text-[#173435] text-[54px] leading-[64.8px] tracking-[-1px]" style={{ fontWeight: 400 }}>
              À propos
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
              À propos
            </span>
          </nav>
        </div>
      </div>

      {/* Cabinet section */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px] flex items-center gap-[60px]">
          <div className="flex-1">
            <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[16px]">
              <span className="text-[#14bec9] text-[16px]" style={{ fontWeight: 200 }}>À propos</span>
            </div>
            <h2 className="text-[#173435] text-[42px] leading-[52.5px] tracking-[-1px] mb-[24px]" style={{ fontWeight: 400 }}>
              Un cabinet dentaire à Agadir fondé sur l'expertise et la confiance
            </h2>
            <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[32px]" style={{ fontWeight: 400 }}>Fondé par le Dr. Lahcen FANI, Dental Clinic est un cabinet dentaire installé à Agadir avec une vision claire : offrir des soins dentaires de haute précision dans un environnement rassurant et moderne. Chaque aspect du cabinet a été pensé pour mettre le patient à l'aise, de l'accueil jusqu'au suivi post-traitement, parce qu'une bonne expérience chez le dentiste, ça change tout.</p>
            <Link
              to="/contact"
              className="inline-block bg-[#0d4685] text-white rounded-[30px] px-[32px] py-[14px] text-[16px] hover:opacity-90 transition-opacity"
              style={{ fontWeight: 700 }}
            >
              Prendre un Rendez-vous
            </Link>
          </div>
          <div className="flex gap-[12px] shrink-0">
            <img src={smile1} alt="" className="w-[180px] h-[260px] object-cover rounded-[12px]" />
            <div className="flex flex-col gap-[12px] mt-[40px]">
              <img src={smile2} alt="" className="w-[180px] h-[180px] object-cover rounded-[12px]" />
              <img src={smile3} alt="" className="w-[180px] h-[120px] object-cover rounded-[12px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Chirurgien-dentiste */}
      <section className="py-[80px] bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[16px]">
            <span className="text-[#14bec9] text-[16px]" style={{ fontWeight: 200 }}>Notre équipe</span>
          </div>
          <h2 className="text-black text-[42px] tracking-[-1px] mb-[24px]" style={{ fontWeight: 400 }}>
            Notre Chirurgien-dentiste
          </h2>
          <p className="text-black text-[18px] leading-[31.5px] max-w-[760px]" style={{ fontWeight: 400 }}>Le Dr. Lahcen FANI est chirurgien-dentiste spécialisé en dentisterie digitale, esthétique et orthodontie. Formé aux techniques modernes d'implantologie guidée et de réhabilitation prothétique, il exerce avec une approche rigoureuse et personnalisée : chaque patient est un cas unique, et chaque traitement est conçu pour l'être aussi. Son objectif est simple — des résultats fonctionnels et esthétiques qui durent, et un suivi qui ne s'arrête pas à la sortie du cabinet.</p>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[16px]">
            <span className="text-[#14bec9] text-[16px]" style={{ fontWeight: 200 }}>Technologies</span>
          </div>
          <h2 className="text-[#173435] text-[42px] tracking-[-1px] mb-[40px]" style={{ fontWeight: 400 }}>
            Nos technologies de soins dentaires
          </h2>
          <div className="grid grid-cols-4 gap-[24px]">
            {technologies.map((tech) => (
              <Link
                key={tech.title}
                to="/technologies"
                className="rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] p-[32px] hover:shadow-[0px_8px_60px_0px_rgba(25,49,57,0.18)] transition-shadow bg-white block"
              >
                <div className="w-[72px] h-[72px] bg-white rounded-[36px] shadow-[0px_4px_20px_rgba(25,49,57,0.08)] flex items-center justify-center mb-[20px]">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="16" fill="#e1f8fa" />
                    <circle cx="18" cy="18" r="6" fill="#39b7bb" />
                  </svg>
                </div>
                <h3 className="text-[#173435] text-[40px] leading-[52px] mb-[16px]" style={{ fontWeight: 200 }}>
                  {tech.title}
                </h3>
                <div className="flex flex-col gap-[8px]">
                  {tech.features.map((f) => (
                    <div key={f} className="flex items-center gap-[8px]">
                      <CheckIcon />
                      <span className="text-[#173435] text-[14px]" style={{ fontWeight: 200 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
