import { Link } from "react-router";
import { Footer } from "./Footer";
import heroBg from "../../../assets/51e6edc7a217cbef1a57061dabbbcf76f6452a75.png";
import techImg from "../../../assets/13fcd1d366638a51e5541c23296811fa1f20d0c9.png";

const technologies = [
  {
    title: "Laser dentaire",
    description:
      "Le laser dentaire permet de réaliser certains soins avec plus de précision, tout en réduisant la douleur et en favorisant une cicatrisation rapide.",
    features: ["Réduction de la douleur", "Meilleure désinfection", "Précision élevée"],
  },
  {
    title: "Radiologie numérique 3D",
    description:
      "La radiologie numérique 3D permet des diagnostics plus précis et plus rapides, avec une réduction significative de l'exposition aux rayonnements pour le patient.",
    features: ["Vue 3D", "Réduction du risque", "Planification précise"],
  },
  {
    title: "Impression 3D dentaire",
    description:
      "L'impression 3D permet de concevoir des prothèses et dispositifs sur mesure avec une grande précision, réduisant les coûts et les délais de fabrication.",
    features: ["Gain de temps", "Personnalisation", "Réduction coûts"],
  },
  {
    title: "Empreinte Optique SIRONA",
    description:
      "L'empreinte optique SIRONA remplace les empreintes traditionnelles par une méthode numérique élégante, offrant une précision et un confort nettement supérieurs pour le patient.",
    features: ["Diagnostic précis", "Visualisation claire", "Résultats précis"],
  },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="white" stroke="#D8DEDE" />
      <path d="M6 10L8.5 12.5L14 7" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TechnologiesPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <div className="relative h-[340px] w-full overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(23,52,53,0.25)]" />
        <div className="relative z-10 h-full px-[80px] max-w-[1440px] mx-auto">
          <div className="flex h-full flex-col justify-end pb-[120px]">
            <h1 className="text-[#173435] text-[54px] leading-[64.8px] tracking-[-1px]" style={{ fontWeight: 400 }}>
              Technologies
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
              Technologies
            </span>
          </nav>
        </div>
      </div>

      {/* Cards grid */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-2 gap-[32px]">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] overflow-hidden bg-white"
              >
                <div className="h-[320px] overflow-hidden relative">
                  <img src={techImg} alt={tech.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-[40px]">
                  <h3 className="text-[#173435] text-[40px] leading-[50px] mb-[16px]" style={{ fontWeight: 200 }}>
                    {tech.title}
                  </h3>
                  <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[24px]" style={{ fontWeight: 400 }}>
                    {tech.description}
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {tech.features.map((f) => (
                      <div key={f} className="flex items-center gap-[8px]">
                        <CheckIcon />
                        <span className="text-[#173435] text-[16px]" style={{ fontWeight: 200 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
