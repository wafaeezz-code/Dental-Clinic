import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "./Footer";
import heroBg from "figma:asset/1e9433d9b9ee820bcc0e0c57dd4bb9ccf4086fdd.png";
import womanImg from "figma:asset/82670c95e42ca7643fcd099f03a03ee92bec7263.png";
import mapImg from "figma:asset/c807e8c72fb2e3e8c342be0700b1ff3428049648.png";

export function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Hero */}
      <section className="py-[80px] bg-[#F8FBFB]">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-2 gap-[40px] items-center">
            <div>
              <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[8px] inline-block mb-[20px]">
                <span className="text-[#14bec9] text-[16px]" style={{ fontWeight: 200 }}>Contactez-nous</span>
              </div>
              <h1 className="text-[#173435] text-[48px] leading-[56px] tracking-[-1px] mb-[24px]" style={{ fontWeight: 400 }}>
                Contactez-nous en ligne,<br />par téléphone ou en vous<br />rendant au Cabinet.
              </h1>
              <div className="flex flex-wrap items-center gap-[16px] mb-[24px]">
                <Link
                  to="/contact"
                  className="inline-block bg-[#0d4685] text-white rounded-[30px] px-[28px] py-[13px] text-[16px] hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 700 }}
                >
                  Prendre un rendez-vous
                </Link>
                <a
                  href="tel:+212528232348"
                  className="inline-flex items-center gap-[10px] text-[#173435] text-[16px]"
                  style={{ fontWeight: 400 }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17 12.5C15.8 12.5 14.6 12.3 13.5 11.9C13.2 11.8 12.9 11.9 12.7 12.1L11.1 14C9 13 7.1 11.1 6 9L7.9 7.3C8.1 7.1 8.2 6.8 8.1 6.5C7.7 5.4 7.5 4.2 7.5 3C7.5 2.5 7.1 2 6.5 2H3C2.4 2 2 2.5 2 3C2 11.3 8.7 18 17 18C17.6 18 18 17.6 18 17V13.5C18 12.9 17.5 12.5 17 12.5Z" fill="#39B7BB"/>
                  </svg>
                  +212 5 28 23 23 48
                </a>
              </div>
              <a
                href="https://share.google/8W1Zi1NbTeZIYxbFs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[10px] rounded-[30px] border border-[#39b7bb] bg-white px-[24px] py-[12px] text-[#39b7bb] text-[16px] hover:bg-[#f0fbfb] transition-colors"
                style={{ fontWeight: 600 }}
              >
                Voir sur Google Maps
              </a>
            </div>
            <a href="https://share.google/8W1Zi1NbTeZIYxbFs" target="_blank" rel="noreferrer" className="block rounded-[25px] overflow-hidden shadow-[0px_24px_50px_rgba(23,52,53,0.08)]">
              <img src={mapImg} alt="Localisation" className="w-full h-[480px] object-cover" />
            </a>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-[60px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-3 gap-[32px]">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2C9.58 2 6 5.58 6 10C6 16.25 14 26 14 26C14 26 22 16.25 22 10C22 5.58 18.42 2 14 2ZM14 13C12.34 13 11 11.66 11 10C11 8.34 12.34 7 14 7C15.66 7 17 8.34 17 10C17 11.66 15.66 13 14 13Z" fill="#39b7bb" />
                  </svg>
                ),
                label: "Visitez-nous",
                lines: [
                  "Agadir Bay Technopole 2, Immeuble A9,",
                  "Bloc A, Étage 4, N° 409",
                  "Agadir Bay, 80010",
                  "Lundi – Vendredi : 9:00H – 18:30H",
                  "Samedi : 9:00H – 13:00H",
                ],
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M25 18.5C23.2 18.5 21.4 18.2 19.75 17.6C19.3 17.45 18.8 17.55 18.5 17.9L16.15 20.6C12.2 18.65 9.35 15.8 7.4 11.85L10.1 9.5C10.45 9.2 10.55 8.7 10.4 8.25C9.8 6.6 9.5 4.8 9.5 3C9.5 2.45 9.05 2 8.5 2H3C2.45 2 2 2.45 2 3C2 15.7 12.3 26 25 26C25.55 26 26 25.55 26 25V19.5C26 18.95 25.55 18.5 25 18.5Z" fill="#39b7bb" />
                  </svg>
                ),
                label: "Appelez-nous",
                lines: ["+212 5 28 23 23 48"],
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M24 4H4C2.9 4 2 4.9 2 6V22C2 23.1 2.9 24 4 24H24C25.1 24 26 23.1 26 22V6C26 4.9 25.1 4 24 4ZM24 8L14 15L4 8V6L14 13L24 6V8Z" fill="#39b7bb" />
                  </svg>
                ),
                label: "Contactez-nous par mail",
                lines: ["dentalclinic@email.com"],
              },
            ].map((card) => (
              <div key={card.label} className="flex flex-col items-center text-center gap-[16px] p-[32px] rounded-[15px] border border-[#e2e6e6]">
                <div className="w-[60px] h-[60px] rounded-full bg-[#e1f8fa] flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-[#173435] text-[18px]" style={{ fontWeight: 600 }}>{card.label}</h3>
                <div className="flex flex-col gap-[4px]">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-[#657e7e] text-[14px] leading-[22px]" style={{ fontWeight: 200 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-[80px] bg-[#f8fafa]">
        <div className="max-w-[1440px] mx-auto px-[80px] flex gap-[60px] items-start">
          <div className="w-[420px] shrink-0 rounded-[15px] overflow-hidden">
            <img src={womanImg} alt="" className="w-full h-[520px] object-cover" />
          </div>
          <div className="flex-1">
            <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[16px]">
              <span className="text-[#14bec9] text-[16px]" style={{ fontWeight: 200 }}>Formulaire de contact</span>
            </div>
            <h2 className="text-[#173435] text-[36px] tracking-[-1px] mb-[16px]" style={{ fontWeight: 400 }}>
              Nous sommes là pour vous aider
            </h2>
            <p className="text-[#657e7e] text-[16px] leading-[26px] mb-[32px]" style={{ fontWeight: 400 }}>
              Vous avez une question ? Envoyez un message à notre équipe administrative, et nous vous répondrons dans les plus brefs délais.
            </p>

            {submitted ? (
              <div className="bg-[#e1f8fa] border border-[#39b7bb] rounded-[12px] p-[32px] text-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-[16px]">
                  <circle cx="24" cy="24" r="24" fill="#39b7bb" />
                  <path d="M14 24L20 30L34 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[#173435] text-[18px]" style={{ fontWeight: 600 }}>Message envoyé !</p>
                <p className="text-[#657e7e] text-[15px] mt-[8px]" style={{ fontWeight: 200 }}>
                  Nous vous contacterons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-2 gap-[20px]">
                  <div>
                    <label className="block text-[#173435] text-[14px] mb-[8px]" style={{ fontWeight: 400 }}>
                      Nom Complet <span className="text-[#e04562]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full border border-[#d8dede] rounded-[8px] px-[16px] py-[12px] text-[15px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                      style={{ fontWeight: 200 }}
                    />
                  </div>
                  <div>
                    <label className="block text-[#173435] text-[14px] mb-[8px]" style={{ fontWeight: 400 }}>
                      Email <span className="text-[#e04562]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#d8dede] rounded-[8px] px-[16px] py-[12px] text-[15px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                      style={{ fontWeight: 200 }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#173435] text-[14px] mb-[8px]" style={{ fontWeight: 400 }}>
                    Numéro Téléphone <span className="text-[#e04562]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className="w-full border border-[#d8dede] rounded-[8px] px-[16px] py-[12px] text-[15px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors"
                    style={{ fontWeight: 200 }}
                  />
                </div>
                <div>
                  <label className="block text-[#173435] text-[14px] mb-[8px]" style={{ fontWeight: 400 }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#d8dede] rounded-[8px] px-[16px] py-[12px] text-[15px] text-[#173435] outline-none focus:border-[#39b7bb] transition-colors resize-none"
                    style={{ fontWeight: 200 }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#39b7bb] text-white rounded-[30px] px-[40px] py-[14px] text-[16px] hover:opacity-90 transition-opacity"
                    style={{ fontWeight: 700 }}
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
