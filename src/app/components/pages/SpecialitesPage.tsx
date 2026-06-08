import { Link } from "react-router";
import { Footer } from "./Footer";
import heroBg from "../../../assets/51e6edc7a217cbef1a57061dabbbcf76f6452a75.png";
import deptImg from "../../../assets/13fcd1d366638a51e5541c23296811fa1f20d0c9.png";

const specialties = [
  {
    to: "/specialites/implantologie",
    title: "Chirurgie implantaire guidée et Parodontologie",
    description:
      "L'implantologie dentaire vise à remplacer les dents manquantes par des implants en titane pour réhabiliter la fonction masticatoire et l'esthétique du sourire en créant des prothèses durables et biologiquement appropriées.",
  },
  {
    to: "/specialites/rehabilitations",
    title: "Réhabilitations esthétiques et fonctionnelles",
    description:
      "Les réhabilitations esthétiques et fonctionnelles visent à restaurer à la fois l'apparence et la fonction de la dentition du patient, en intégrant des soins prothétiques qui s'harmonisent avec la dynamique de la mâchoire.",
  },
  {
    to: "/specialites/radiologie",
    title: "Radiologie dentaire numérique",
    description:
      "La radiologie numérique offre des diagnostics dentaires précis grâce à des images à haute résolution, réduisant les risques d'exposition aux radiations tout en permettant un diagnostic plus rapide et efficace.",
  },
  {
    to: "/specialites/orthodontie",
    title: "Orthodontie",
    description:
      "L'orthodontie vise à corriger les malpositions et les malocclusions des dents et des mâchoires pour améliorer à la fois l'esthétique du sourire et la santé fonctionnelle du patient à long terme.",
  },
];

export function SpecialitesPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <div className="relative h-[340px] w-full overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(23,52,53,0.25)]" />
        <div className="relative z-10 h-full px-[80px] max-w-[1440px] mx-auto">
          <div className="flex h-full flex-col justify-end pb-[120px]">
            <h1 className="text-[#173435] text-[54px] leading-[64.8px] tracking-[-1px]" style={{ fontWeight: 400 }}>
              Spécialités
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
              Spécialités
            </span>
          </nav>
        </div>
      </div>

      {/* Cards grid */}
      <section className="py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-2 gap-[32px]">
            {specialties.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group rounded-[15px] border border-[#e2e6e6] overflow-hidden hover:shadow-[0px_8px_40px_rgba(25,49,57,0.12)] transition-shadow"
              >
                <div className="relative h-[320px] overflow-hidden rounded-tl-[15px] rounded-tr-[15px]">
                  <img
                    src={deptImg}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-[32px]">
                  <h3 className="text-[#173435] text-[26px] leading-[34px] mb-[16px]" style={{ fontWeight: 200 }}>
                    {s.title}
                  </h3>
                  <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[24px]" style={{ fontWeight: 400 }}>
                    {s.description}
                  </p>
                  <span className="text-[#39b7bb] text-[18px] flex items-center gap-[6px]" style={{ fontWeight: 400 }}>
                    En savoir plus
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="#39b7bb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
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
