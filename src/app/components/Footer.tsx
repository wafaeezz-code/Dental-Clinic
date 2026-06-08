import { Link } from "react-router";
import logoImg from "../../assets/049e18c660c202068054f76dac750df540371106.png";
import mapImg from "../../assets/c807e8c72fb2e3e8c342be0700b1ff3428049648.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#d8dede]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-[20px]">
            <Link to="/">
              <img src={logoImg} alt="Agadir Bay Dental Clinic" className="h-12 md:h-14 lg:h-[60px] w-auto object-contain max-w-[120px] md:max-w-[140px] lg:max-w-[160px]" />
            </Link>
            <p className="text-[#657e7e] text-xs sm:text-sm md:text-base lg:text-[14px] leading-[1.5] md:leading-[1.5] lg:leading-[22px]" style={{ fontWeight: 200 }}>
              Un cabinet dentaire de confiance à Agadir, spécialisé en implantologie, orthodontie et esthétique dentaire.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px]">
            <h4 className="text-[#173435] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 600 }}>Liens utiles</h4>
            <div className="grid grid-cols-2 gap-x-3 md:gap-x-4 lg:gap-x-[16px] gap-y-2 md:gap-y-3 lg:gap-y-[10px]">
              {([
                { label: "Accueil", to: "/" },
                { label: "Galerie", to: "/galerie" },
                { label: "À propos", to: "/apropos" },
                { label: "Contact", to: "/contact" },
                { label: "Spécialités", to: "/specialites" },
                { label: "Technologies", to: "/technologies" },
              ] as const).map((item) => (
                <Link key={item.label + item.to} to={item.to} className="text-[#657e7e] text-xs sm:text-sm md:text-base lg:text-[14px] hover:text-[#39b7bb] transition-colors" style={{ fontWeight: 200 }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px]">
            <h4 className="text-[#173435] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 600 }}>Contact</h4>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-[10px]">
              <div>
                <p className="text-[#173435] text-xs sm:text-sm md:text-base lg:text-[14px]" style={{ fontWeight: 600 }}>Adresse</p>
                <p className="text-[#657e7e] text-xs md:text-sm lg:text-[13px] leading-[1.5] lg:leading-[20px]" style={{ fontWeight: 200 }}>
                  Agadir Bay Technopole 2<br />
                  Immeuble A9, Bloc A, Étage 4, N° 409<br />
                  Agadir Bay, 80010
                </p>
              </div>
              <div>
                <p className="text-[#173435] text-xs sm:text-sm md:text-base lg:text-[14px]" style={{ fontWeight: 600 }}>Téléphone</p>
                <p className="text-[#657e7e] text-xs md:text-sm lg:text-[13px]" style={{ fontWeight: 200 }}>+212 5 28 23 23 48</p>
              </div>
              <div>
                <p className="text-[#173435] text-xs sm:text-sm md:text-base lg:text-[14px]" style={{ fontWeight: 600 }}>Email</p>
                <p className="text-[#657e7e] text-xs md:text-sm lg:text-[13px]" style={{ fontWeight: 200 }}>dentalclinic@email.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px]">
            <h4 className="text-[#173435] text-sm md:text-base lg:text-[16px]" style={{ fontWeight: 600 }}>Localisation</h4>
            <div className="rounded-[10px] overflow-hidden h-24 md:h-28 lg:h-[150px]">
              <img src={mapImg} alt="Localisation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#d8dede] mt-6 md:mt-8 lg:mt-[40px] pt-4 md:pt-5 lg:pt-[20px]">
          <p className="text-[#657e7e] text-xs md:text-sm lg:text-[13px]" style={{ fontWeight: 200 }}>
            Agadir Bay Dental Clinic © 2025 · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
