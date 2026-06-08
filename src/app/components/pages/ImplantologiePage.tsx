import { Link } from "react-router";
import { Footer } from "./Footer";
import { SpecialtySidebar } from "../SpecialtySidebar";
import doctorImg from "../../../assets/805dda9a1cbaff46fda2672dd448fa61912ff236.png";
import beforeAfterImg from "../../../assets/bd1b2d1685caed1f47e77d488f6e2861b6f5748e.png";

const advantages = [
  "Fonction naturelle restaurée",
  "Durabilité à long terme",
  "Esthétique améliorée",
  "Prévention de la perte osseuse",
  "Soins Personnalisés",
  "Gencives Saines",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]">
      <circle cx="10" cy="10" r="10" fill="#e1f8fa" stroke="#14BEC9" />
      <path d="M6 10L8.5 12.5L14 7" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImplantologiePage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e2e6e6] px-[80px] py-[12px]">
        <nav className="flex items-center gap-[8px] text-[13px] max-w-[1440px] mx-auto" style={{ fontWeight: 200 }}>
          <Link to="/" className="text-[#657e7e] hover:text-[#39b7bb]">Accueil</Link>
          <span className="text-[#657e7e]">›</span>
          <Link to="/specialites" className="text-[#657e7e] hover:text-[#39b7bb]">Spécialités</Link>
          <span className="text-[#657e7e]">›</span>
          <span className="text-[#39b7bb]">Implantologie & Parodontologie</span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px]">
        <div className="flex gap-[40px] items-start">
          <SpecialtySidebar />

          {/* Main content */}
          <div className="flex-1">
            <h1 className="text-[#173435] text-[52px] leading-[64.8px] tracking-[-1px] mb-[32px]" style={{ fontWeight: 400 }}>
              Chirurgie implantaire guidée et parodontologie
            </h1>

            <div className="rounded-[15px] overflow-hidden mb-[32px] h-[400px]">
              <img src={doctorImg} alt="Chirurgie implantaire" className="w-full h-full object-cover" />
            </div>

            <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[20px]" style={{ fontWeight: 400 }}>
              Vous recherchez des implants dentaires à Agadir ? Dental Clinic vous propose une solution moderne et fiable pour remplacer les dents manquantes, grâce à des implants de haute qualité posés avec une précision optimale. Nous recréons non seulement la fonction masticatoire, mais aussi l'apparence naturelle du sourire — pour un résultat indiscernable d'une dent naturelle. Nos traitements en parodontologie viennent compléter cette approche en assurant la santé des gencives, condition essentielle à la stabilité à long terme des implants.
            </p>
            <p className="text-[#657e7e] text-[18px] leading-[31.5px] mb-[40px]" style={{ fontWeight: 400 }}>
              Le traitement implantaire se déroule en plusieurs étapes : une consultation initiale avec bilan radiologique 3D, la pose chirurgicale de l'implant sous anesthésie locale, puis une période d'ostéointégration de quelques semaines à quelques mois. Une fois cette phase terminée, la couronne définitive est posée. En parallèle, nos traitements parodontaux prennent en charge les gingivites et parodontites pour assainir le tissu gingival avant la pose et préserver le résultat sur le long terme.
            </p>
          </div>
        </div>
      </div>

      {/* Advantages section */}
      <section className="bg-[#F8F8F8] rounded-[30px] p-[48px] mx-[80px] mt-[-40px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid gap-[40px] lg:grid-cols-[1.35fr_1fr] items-center">
            <div>
              <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[16px]">
                <span className="text-[#14bec9] text-[14px]" style={{ fontWeight: 200 }}>Nos avantages</span>
              </div>
              <h2 className="text-[#173435] text-[42px] leading-[52px] tracking-[-1px] mb-[18px]" style={{ fontWeight: 400 }}>
                Pourquoi la chirurgie implantaire guidée et la parodontologie ?
              </h2>
              <p className="text-[#657e7e] text-[18px] leading-[32px] mb-[32px]" style={{ fontWeight: 400 }}>
                Nous proposons des soins d'implantologie et de parodontologie de qualité, réalisés par des experts avec les dernières technologies.
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
