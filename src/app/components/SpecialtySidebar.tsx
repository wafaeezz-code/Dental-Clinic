import { useState } from "react";
import { Link, useLocation } from "react-router";

const services = [
  { label: "Chirurgie implantaire guidée & Parodontologie", to: "/specialites/implantologie" },
  { label: "Réhabilitations esthétiques et fonctionnelles", to: "/specialites/rehabilitations" },
  { label: "Radiologie dentaire numérique", to: "/specialites/radiologie" },
  { label: "Orthodontie", to: "/specialites/orthodontie" },
];

export function SpecialtySidebar() {
  const location = useLocation();
  const [form, setForm] = useState({ nom: "", telephone: "", date: "", heure: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-4 md:gap-6 lg:gap-[24px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Services menu */}
      <div className="rounded-[15px] border border-[#d8dede] overflow-hidden">
          <div className="bg-[#39b7bb] px-4 md:px-6 lg:px-[24px] py-3 md:py-4 lg:py-[16px]">
            <h3 className="text-white text-base md:text-lg lg:text-[18px]" style={{ fontWeight: 600 }}>Nos Services</h3>
        </div>
          <div className="flex flex-col max-h-[300px] overflow-y-auto">
          {services.map((s) => (
            <Link
              key={s.to}
              to={s.to}
                className={`flex items-start lg:items-center justify-between px-3 md:px-4 lg:px-[20px] py-2 md:py-3 lg:py-[14px] border-b border-[#e2e6e6] last:border-b-0 text-xs sm:text-sm md:text-base lg:text-[14px] leading-[1.5] lg:leading-[22px] transition-colors gap-2 ${
                location.pathname === s.to
                  ? "bg-[#e1f8fa] text-[#39b7bb]"
                  : "text-[#173435] hover:bg-[#f5feff] hover:text-[#39b7bb]"
              }`}
              style={{ fontWeight: 200 }}
            >
              {s.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="hidden lg:block shrink-0 ml-[8px]">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Consultation form */}
      <div className="rounded-[15px] border border-[#d8dede] overflow-hidden">
        <div className="bg-[#e1f8fa] px-[24px] py-[16px]">
          <h3 className="text-[#173435] text-[16px]" style={{ fontWeight: 600 }}>Réserver une consultation</h3>
        </div>
        <div className="p-[20px]">
          {submitted ? (
            <div className="text-center py-[16px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto mb-[12px]">
                <circle cx="20" cy="20" r="20" fill="#39b7bb" />
                <path d="M12 20L17 25L28 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[#173435] text-[14px]" style={{ fontWeight: 600 }}>Demande envoyée !</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">
              <input
                type="text"
                required
                placeholder="Nom complet"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full border border-[#d8dede] rounded-[6px] px-[12px] py-[10px] text-[13px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                style={{ fontWeight: 200 }}
              />
              <input
                type="tel"
                required
                placeholder="Téléphone"
                value={form.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                className="w-full border border-[#d8dede] rounded-[6px] px-[12px] py-[10px] text-[13px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                style={{ fontWeight: 200 }}
              />
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border border-[#d8dede] rounded-[6px] px-[12px] py-[10px] text-[13px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                style={{ fontWeight: 200 }}
              />
              <select
                value={form.heure}
                onChange={(e) => setForm({ ...form, heure: e.target.value })}
                className="w-full border border-[#d8dede] rounded-[6px] px-[12px] py-[10px] text-[13px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                style={{ fontWeight: 200 }}
              >
                <option value="">Heure</option>
                {["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"].map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-[#0d4685] text-white rounded-[30px] py-[12px] text-[14px] hover:opacity-90 transition-opacity mt-[4px]"
                style={{ fontWeight: 700 }}
              >
                Prendre un rendez-vous
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
