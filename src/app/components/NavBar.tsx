import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import logoImg from "../../assets/049e18c660c202068054f76dac750df540371106.png";

const specialites = [
  { label: "Implantologie & Parodontologie", path: "/specialites/implantologie" },
  { label: "Orthodontie", path: "/specialites/orthodontie" },
  { label: "Radiologie dentaire numérique", path: "/specialites/radiologie" },
  { label: "Réhabilitations esthétiques et fonctionnelles", path: "/specialites/rehabilitations" },
];

export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isSpecialitesActive = specialites.some((s) => location.pathname.startsWith(s.path)) || location.pathname === "/specialites";

  return (
    <div className="fixed left-0 top-0 z-50 w-full" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Top info bar - Hidden on mobile */}
      <div className="hidden md:flex bg-white border-b border-[#e2e6e6] h-[46px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[80px]">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-[32px] overflow-x-auto">
          {/* Phone */}
          <div className="flex items-center gap-[6px] whitespace-nowrap">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
              <path d="M12.5 9.5C11.6 9.5 10.7 9.35 9.87 9.07C9.6 8.97 9.3 9.04 9.09 9.25L7.79 10.88C5.83 9.94 4.07 8.24 3.09 6.21L4.71 4.89C4.92 4.67 4.98 4.37 4.89 4.1C4.6 3.27 4.46 2.37 4.46 1.47C4.46 1.06 4.12 0.72 3.71 0.72H1.18C0.77 0.72 0.43 1.06 0.43 1.47C0.43 8.04 5.72 13.33 12.5 13.33C12.91 13.33 13.25 12.99 13.25 12.58V10.25C13.25 9.84 12.91 9.5 12.5 9.5Z" fill="#39B7BB"/>
            </svg>
            <span className="text-[#173435] text-[13px]">+212 5 28 23 23 48</span>
          </div>
          <div className="w-px h-[18px] bg-[#e2e6e6]" />
          {/* Hours */}
          <div className="flex items-center gap-[6px] whitespace-nowrap">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" stroke="#39B7BB"/>
              <path d="M6.5 3.5V6.5L8.5 8" stroke="#39B7BB" strokeLinecap="round"/>
            </svg>
            <span className="text-[#173435] text-[13px]">9:00 H - 18:00 H</span>
          </div>
          <div className="w-px h-[18px] bg-[#e2e6e6]" />
          {/* Address */}
          <div className="flex items-center gap-[6px] whitespace-nowrap">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
              <path d="M6.5 0C4.01 0 2 2.01 2 4.5C2 7.75 6.5 13 6.5 13C6.5 13 11 7.75 11 4.5C11 2.01 8.99 0 6.5 0ZM6.5 6C5.67 6 5 5.33 5 4.5C5 3.67 5.67 3 6.5 3C7.33 3 8 3.67 8 4.5C8 5.33 7.33 6 6.5 6Z" fill="#5CD8DF"/>
            </svg>
            <span className="text-[#173435] text-[13px]">Agadir Bay Technopole 2 Immeuble A9, Bloc A, Étage 4, N° 409</span>
          </div>
        </div>
        {/* Social icons */}
        <div className="flex items-center gap-[24px]">
          <a href="https://web.facebook.com/AgadirBayDentalClinic?rdid=6VNawJShciXJt7o8&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1EkVoaQSFa%2F%3F_rdc%3D1%26_rdr#" target="_blank" rel="noopener noreferrer" className="text-[#39b7bb]">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M8 1H6C5.17 1 4.5 1.67 4.5 2.5V4H2.5V6.5H4.5V15H7V6.5H8.5L9 4H7V2.5C7 2.22 7.22 2 7.5 2H8V1Z" fill="#39B7BB"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/agadirbay.dentalclinic?igsh=c3NkeWx2bXZnaHhz" target="_blank" rel="noopener noreferrer" className="text-[#39b7bb]">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <rect x="0.5" y="0.5" width="10" height="10" rx="2.5" stroke="#39B7BB"/>
              <circle cx="5.5" cy="5.5" r="2" stroke="#39B7BB"/>
              <circle cx="8.5" cy="2.5" r="0.5" fill="#39B7BB"/>
            </svg>
          </a>
          <a href="https://vt.tiktok.com/ZSQM5Qow8/" target="_blank" rel="noopener noreferrer" className="text-[#39b7bb]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M8.5 1C8.5 0.5 8.3 0 7.8 0H5.7C5.2 0 5 0.5 5 1V7C5 8.6 3.9 9.9 2.5 9.9C1.1 9.9 0 8.6 0 7C0 5.4 1.1 4.1 2.5 4.1C3 4.1 3.5 4.2 3.9 4.5V2.3C3.4 2.1 2.9 2 2.4 2C0.5 2 0 4.4 0 7C0 9.6 1.4 12 3.3 12C5.2 12 6.6 10.6 6.6 8.7V5.4C7.4 6 8.5 6.4 9.7 6.5V4.3C8.5 4.2 7.5 3.5 6.9 2.5V1Z" fill="#39B7BB"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-white flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[80px] py-4 md:py-[24px] shadow-[0px_2px_20px_rgba(0,0,0,0.06)]">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="cursor-pointer shrink-0">
          <img src={logoImg} alt="Agadir Bay Dental Clinic" className="h-12 sm:h-14 md:h-[60px] w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[160px]" />
        </button>

        {/* Nav links - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-[4px]">
          <Link
            to="/"
            className={`px-[12px] py-[4px] rounded-[30px] text-[15px] whitespace-nowrap transition-colors ${
              isActive("/") && location.pathname === "/"
                ? "bg-[#e1f8fa] text-[#39b7bb]"
                : "text-black hover:bg-[#f5feff]"
            }`}
            style={{ fontWeight: 200 }}
          >
            Accueil
          </Link>
          <Link
            to="/apropos"
            className={`px-[12px] py-[4px] rounded-[30px] text-[15px] whitespace-nowrap transition-colors ${
              isActive("/apropos")
                ? "bg-[#e1f8fa] text-[#39b7bb]"
                : "text-black hover:bg-[#f5feff]"
            }`}
            style={{ fontWeight: 200 }}
          >
            À propos
          </Link>

          {/* Spécialités dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button
              onClick={() => navigate("/specialites")}
              className={`flex items-center gap-[4px] px-[12px] py-[4px] rounded-[30px] text-[15px] whitespace-nowrap transition-colors ${
                isSpecialitesActive
                  ? "bg-[#e1f8fa] text-[#39b7bb]"
                  : "text-black hover:bg-[#f5feff]"
              }`}
              style={{ fontWeight: 200 }}
            >
              Spécialités
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-[8px] z-50">
                <div className="bg-white rounded-[12px] shadow-[0px_8px_40px_rgba(0,0,0,0.12)] py-[8px] min-w-[320px] border border-[#e2e6e6]">
                  {specialites.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className={`block px-[20px] py-[10px] text-[14px] transition-colors hover:bg-[#e1f8fa] hover:text-[#39b7bb] ${
                        location.pathname === s.path ? "text-[#39b7bb] bg-[#f5feff]" : "text-[#173435]"
                      }`}
                      style={{ fontWeight: 200 }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/technologies"
            className={`px-[12px] py-[4px] rounded-[30px] text-[15px] whitespace-nowrap transition-colors ${
              isActive("/technologies")
                ? "bg-[#e1f8fa] text-[#39b7bb]"
                : "text-black hover:bg-[#f5feff]"
            }`}
            style={{ fontWeight: 200 }}
          >
            Technologies
          </Link>
          <Link
            to="/galerie"
            className={`px-[12px] py-[4px] rounded-[30px] text-[15px] whitespace-nowrap transition-colors ${
              isActive("/galerie")
                ? "bg-[#e1f8fa] text-[#39b7bb]"
                : "text-black hover:bg-[#f5feff]"
            }`}
            style={{ fontWeight: 200 }}
          >
            Galerie
          </Link>
          <Link
            to="/contact"
            className={`px-[12px] py-[4px] rounded-[30px] text-[15px] whitespace-nowrap transition-colors ${
              isActive("/contact")
                ? "bg-[#e1f8fa] text-[#39b7bb]"
                : "text-black hover:bg-[#f5feff]"
            }`}
            style={{ fontWeight: 200 }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#39b7bb]"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* CTA Button - Hidden on mobile */}
        <Link
          to="/contact"
          className="hidden sm:flex bg-[#39b7bb] text-white rounded-[30px] h-[40px] md:h-[50px] items-center px-4 md:px-[28px] whitespace-nowrap transition-opacity hover:opacity-90 text-sm md:text-base"
          style={{ fontWeight: 700 }}
        >
          Rendez-vous
        </Link>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e6e6] shadow-lg">
          <nav className="flex flex-col p-4">
            <Link
              to="/"
              className="py-3 px-4 text-[#173435] hover:bg-[#e1f8fa] hover:text-[#39b7bb] rounded text-sm"
              style={{ fontWeight: 200 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/apropos"
              className="py-3 px-4 text-[#173435] hover:bg-[#e1f8fa] hover:text-[#39b7bb] rounded text-sm"
              style={{ fontWeight: 200 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="py-3 px-4 text-[#173435] hover:bg-[#e1f8fa] hover:text-[#39b7bb] rounded text-sm text-left"
              style={{ fontWeight: 200 }}
            >
              Spécialités
            </button>
            {dropdownOpen && (
              <div className="bg-[#f5feff] border-l-4 border-[#39b7bb]">
                {specialites.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="py-2 px-6 text-[#173435] hover:text-[#39b7bb] block text-xs"
                    style={{ fontWeight: 200 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to="/technologies"
              className="py-3 px-4 text-[#173435] hover:bg-[#e1f8fa] hover:text-[#39b7bb] rounded text-sm"
              style={{ fontWeight: 200 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Technologies
            </Link>
            <Link
              to="/galerie"
              className="py-3 px-4 text-[#173435] hover:bg-[#e1f8fa] hover:text-[#39b7bb] rounded text-sm"
              style={{ fontWeight: 200 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Galerie
            </Link>
            <Link
              to="/contact"
              className="py-3 px-4 text-[#173435] hover:bg-[#e1f8fa] hover:text-[#39b7bb] rounded text-sm"
              style={{ fontWeight: 200 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-3 bg-[#39b7bb] text-white rounded-[30px] py-2 px-4 text-center text-sm hover:opacity-90 transition-opacity"
              style={{ fontWeight: 700 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Prendre un rendez-vous
            </Link>
            {/* Mobile social icons */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#e2e6e6]">
              <a href="https://web.facebook.com/AgadirBayDentalClinic?rdid=6VNawJShciXJt7o8&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1EkVoaQSFa%2F%3F_rdc%3D1%26_rdr#" target="_blank" rel="noopener noreferrer" className="text-[#39b7bb]">
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                  <path d="M8 1H6C5.17 1 4.5 1.67 4.5 2.5V4H2.5V6.5H4.5V15H7V6.5H8.5L9 4H7V2.5C7 2.22 7.22 2 7.5 2H8V1Z" fill="#39B7BB"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/agadirbay.dentalclinic?igsh=c3NkeWx2bXZnaHhz" target="_blank" rel="noopener noreferrer" className="text-[#39b7bb]">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <rect x="0.5" y="0.5" width="10" height="10" rx="2.5" stroke="#39B7BB"/>
                  <circle cx="5.5" cy="5.5" r="2" stroke="#39B7BB"/>
                  <circle cx="8.5" cy="2.5" r="0.5" fill="#39B7BB"/>
                </svg>
              </a>
              <a href="https://vt.tiktok.com/ZSQM5Qow8/" target="_blank" rel="noopener noreferrer" className="text-[#39b7bb]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M8.5 1C8.5 0.5 8.3 0 7.8 0H5.7C5.2 0 5 0.5 5 1V7C5 8.6 3.9 9.9 2.5 9.9C1.1 9.9 0 8.6 0 7C0 5.4 1.1 4.1 2.5 4.1C3 4.1 3.5 4.2 3.9 4.5V2.3C3.4 2.1 2.9 2 2.4 2C0.5 2 0 4.4 0 7C0 9.6 1.4 12 3.3 12C5.2 12 6.6 10.6 6.6 8.7V5.4C7.4 6 8.5 6.4 9.7 6.5V4.3C8.5 4.2 7.5 3.5 6.9 2.5V1Z" fill="#39B7BB"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
