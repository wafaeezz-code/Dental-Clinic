import { Link } from "react-router";
import logoImg from "figma:asset/049e18c660c202068054f76dac750df540371106.png";
import mapImg from "figma:asset/c807e8c72fb2e3e8c342be0700b1ff3428049648.png";

const googleMapsUrl = "https://share.google/8W1Zi1NbTeZIYxbFs";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#d8dede]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px]">
        <div className="grid grid-cols-4 gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <Link to="/">
              <img src={logoImg} alt="Agadir Bay Dental Clinic" className="h-[60px] w-[160px] object-contain" />
            </Link>
            <p className="text-[#657e7e] text-[14px] leading-[22px]" style={{ fontWeight: 200 }}>
              Un cabinet dentaire de confiance à Agadir, spécialisé en implantologie, orthodontie et esthétique dentaire.
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#173435] text-[16px]" style={{ fontWeight: 600 }}>Liens utiles</h4>
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[10px]">
              {[
                { label: "Accueil", to: "/" },
                { label: "Galerie", to: "/galerie" },
                { label: "À propos", to: "/apropos" },
                { label: "Contact", to: "/contact" },
                { label: "Spécialités", to: "/specialites" },
                { label: "Technologies", to: "/technologies" },
              ].map((item) => (
                <Link key={item.label + item.to} to={item.to} className="text-[#657e7e] text-[14px] hover:text-[#39b7bb] transition-colors" style={{ fontWeight: 200 }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#173435] text-[16px]" style={{ fontWeight: 600 }}>Contact</h4>
            <div className="flex flex-col gap-[10px]">
              <div>
                <p className="text-[#173435] text-[14px]" style={{ fontWeight: 600 }}>Adresse</p>
                <p className="text-[#657e7e] text-[13px] leading-[20px]" style={{ fontWeight: 200 }}>
                  Agadir Bay Technopole 2<br />Immeuble A9, Bloc A, Étage 4, N° 409<br />Agadir Bay, 80010
                </p>
              </div>
              <div>
                <p className="text-[#173435] text-[14px]" style={{ fontWeight: 600 }}>Téléphone</p>
                <p className="text-[#657e7e] text-[13px]" style={{ fontWeight: 200 }}>+212 5 28 23 23 48</p>
              </div>
              <div>
                <p className="text-[#173435] text-[14px]" style={{ fontWeight: 600 }}>Email</p>
                <p className="text-[#657e7e] text-[13px]" style={{ fontWeight: 200 }}>fanilahcen@hotmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h4 className="text-[#173435] text-[16px]" style={{ fontWeight: 600 }}>Localisation</h4>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="rounded-[10px] overflow-hidden h-[150px] block">
              <img src={mapImg} alt="Localisation" className="w-full h-full object-cover" />
            </a>
           
          </div>
        </div>
        <div className="border-t border-[#d8dede] mt-[40px] pt-[20px]">
          <p className="text-[#657e7e] text-[13px]" style={{ fontWeight: 200 }}>
            Agadir Bay Dental Clinic © 2026 · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
