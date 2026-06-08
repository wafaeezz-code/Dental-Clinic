import { Link } from "react-router";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import heroBg from "../../../assets/fbc164cbff245adea9f7894ff0846d77b5947573.png";
import smile1 from "../../../assets/848d405cde2d06792f037092eeff68b483725aa6.png";
import smile2 from "../../../assets/05dfdc575c62dc3444993e9c9455e33389952497.png";
import smile3 from "../../../assets/837cdc35d1d09eec70b3cd0f1843844f2fc723a8.png";
import dept1 from "../../../assets/78b7d448e9eaffdd475d39d9f37cadcf9f3d9025.png";
import dept3 from "../../../assets/100c7ab5430f1d9a76a16421f28efd5579575051.png";
import dept4 from "../../../assets/af48ef06dd80f082d3eda068fe3f0fb4a99c0023.png";
import dept6 from "../../../assets/a03e0ec93a6470b1259ab4ce6cb900715a3adbab.png";

const specialties = [
  { img: dept1, label: "Chirurgie implantaire guidée", to: "/specialites/implantologie" },
  { img: dept3, label: "Radiologie dentaire numérique", to: "/specialites/radiologie" },
  { img: dept4, label: "Réhabilitation esthétique et fonctionnelles", to: "/specialites/rehabilitations" },
  { img: dept6, label: "Orthodontie", to: "/specialites/orthodontie" },
];

const technologies = [
  {
    title: "Empreinte Optique SIRONA",
    features: ["Rapide et précis", "Confortable pour le patient", "Résultat immédiat"],
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
    features: ["Réduction de la douleur", "Meilleure désinfection", "Précision élevée"],
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-[3px]">
      <circle cx="9" cy="9" r="9" fill="#e1f8fa" />
      <path d="M5 9L7.5 11.5L13 6" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AccueilPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[680px] w-full overflow-hidden pt-16 md:pt-0">
        <img src={heroBg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(23,52,53,0.45)]" />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="max-w-[780px] text-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[68px] leading-[1.05] tracking-[-1px] mb-4 sm:mb-6 md:mb-8 lg:mb-[32px]" style={{ fontWeight: 400 }}>
              Soins dentaires modernes et esthétiques
            </h1>
            <Link
              to="/contact"
              className="inline-block bg-[#39b7bb] text-white rounded-full px-4 sm:px-6 md:px-8 lg:px-[42px] py-2 sm:py-3 md:py-4 lg:py-[18px] text-sm sm:text-base md:text-lg lg:text-[20px] hover:opacity-90 transition-opacity"
              style={{ fontWeight: 700 }}
            >
              Prendre un Rendez-vous
            </Link>
          </div>
        </div>
      </div>

      {/* À propos section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px] flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-[60px]">
          <div className="flex-1 w-full">
            <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-4 md:mb-[16px]">
              <span className="text-[#14bec9] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 200 }}>Notre cabinet</span>
            </div>
            <h2 className="text-[#173435] text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-[1.25] md:leading-[1.25] lg:leading-[52.5px] tracking-[-1px] mb-4 md:mb-[24px]" style={{ fontWeight: 400 }}>
              Votre cabinet dentaire de confiance à Agadir
            </h2>
            <p className="text-[#657e7e] text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.5] md:leading-[1.5] lg:leading-[31.5px]" style={{ fontWeight: 400 }}>Situé à Agadir Bay, Technopole 2, Dental Clinic est votre cabinet dentaire de référence à Agadir. Nous proposons des soins dentaires modernes dans un cadre confortable et sécurisé, avec une expertise en implantologie, orthodontie et esthétique dentaire. Notre priorité : la précision des traitements et la durabilité des résultats, grâce à des technologies depointe, laser dentaire, empreinte optique Sirona, radiologie numérique 3D et impression dentaire 3D.</p>
            <Link
              to="/contact"
              className="mt-6 md:mt-8 lg:mt-[32px] inline-block bg-[#0d4685] text-white rounded-[30px] px-6 md:px-8 lg:px-[32px] py-2 md:py-3 lg:py-[14px] text-sm md:text-base lg:text-[16px] hover:opacity-90 transition-opacity"
              style={{ fontWeight: 700 }}
            >
              Prendre un Rendez-vous
            </Link>
          </div>
          <div className="hidden sm:flex gap-2 md:gap-3 lg:gap-[12px] shrink-0 flex-wrap sm:flex-nowrap justify-center sm:justify-start">
            <img src={smile1} alt="" className="w-24 sm:w-28 md:w-32 lg:w-[180px] h-32 sm:h-40 md:h-48 lg:h-[260px] object-cover rounded-[12px]" />
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-[12px] mt-0 sm:mt-6 md:mt-8 lg:mt-[40px]">
              <img src={smile2} alt="" className="w-24 sm:w-28 md:w-32 lg:w-[180px] h-24 sm:h-28 md:h-32 lg:h-[180px] object-cover rounded-[12px]" />
              <img src={smile3} alt="" className="w-24 sm:w-28 md:w-32 lg:w-[180px] h-16 sm:h-20 md:h-24 lg:h-[120px] object-cover rounded-[12px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Nos spécialités */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-[80px] bg-[#f8fafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-4 md:mb-[16px]">
            <span className="text-[#14bec9] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 200 }}>Spécialités</span>
          </div>
          <h2 className="text-[#173435] text-xl sm:text-2xl md:text-3xl lg:text-[42px] tracking-[-1px] mb-6 md:mb-8 lg:mb-[40px]" style={{ fontWeight: 400 }}>
            Nos spécialités de soins dentaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-[16px]">
            {specialties.map((s) => (
              <Link key={s.to} to={s.to} className="group relative rounded-[10px] overflow-hidden h-[240px] sm:h-[280px] md:h-[340px] lg:h-[388px] block">
                <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[49%] to-[rgba(23,52,53,0.75)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-[25px]">
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-[21px] leading-[1.4] lg:leading-[29.4px]" style={{ fontWeight: 200 }}>{s.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-4 md:mb-[16px]">
            <span className="text-[#14bec9] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 200 }}>Technologies</span>
          </div>
          <h2 className="text-[#173435] text-xl sm:text-2xl md:text-3xl lg:text-[42px] tracking-[-1px] mb-6 md:mb-8 lg:mb-[40px]" style={{ fontWeight: 400 }}>
            Nos technologies de soins dentaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[24px]">
            {technologies.map((tech) => (
              <Link key={tech.title} to="/technologies" className="group rounded-[15px] shadow-[0px_4px_60px_0px_rgba(25,49,57,0.1)] p-6 md:p-8 lg:p-[40px] hover:shadow-[0px_8px_60px_0px_rgba(25,49,57,0.18)] transition-shadow bg-white">
                <div className="w-16 md:w-20 lg:w-[80px] h-16 md:h-20 lg:h-[80px] bg-white rounded-[40px] shadow-[0px_4px_20px_rgba(25,49,57,0.08)] flex items-center justify-center mb-4 md:mb-6 lg:mb-[24px]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" fill="#e1f8fa" />
                    <path d="M15 20C15 17.24 17.24 15 20 15C22.76 15 25 17.24 25 20C25 22.76 22.76 25 20 25C17.24 25 15 22.76 15 20Z" fill="#39b7bb" />
                    <path d="M20 12V28M12 20H28" stroke="#39b7bb" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </div>
                <h3 className="text-[#173435] text-base sm:text-lg md:text-xl lg:text-[40px] leading-[1.3] lg:leading-[52px] mb-3 md:mb-4 lg:mb-[16px]" style={{ fontWeight: 200 }}>
                  {tech.title}
                </h3>
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-[8px]">
                  {tech.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 md:gap-3 lg:gap-[8px]">
                      <CheckIcon />
                      <span className="text-[#173435] text-xs sm:text-sm md:text-base lg:text-[15px]" style={{ fontWeight: 200 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chirurgien-dentiste */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-[80px] bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px]">
          <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-3 md:mb-5 lg:mb-[20px]">
            <span className="text-[#14bec9] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 200 }}>Notre équipe</span>
          </div>
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-[52px] leading-[1.25] md:leading-[1.25] lg:leading-[64.8px] tracking-[-1px] mb-3 md:mb-6 lg:mb-[24px]" style={{ fontWeight: 400 }}>
            Notre Chirurgien-dentiste
          </h2>
          <p className="text-[#657e7e] text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.5] md:leading-[1.5] lg:leading-[31.5px] max-w-[700px]" style={{ fontWeight: 400 }}>Dr. FANI Lahcen, chirurgien-dentiste, met son expertise au service de votre santé bucco-dentaire avec une approche moderne et précise, spécialisé en dentisterie digitale, esthétique et orthodontie. Chaque traitement vise des résultats fonctionnels et esthétiques durables.</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
