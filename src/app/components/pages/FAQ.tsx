import { useState, type ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "Où se trouve Agadir Bay Dental Clinic ?",
    answer: "Dental Clinic est situé à Agadir Bay, Technopole 2, dans l'immeuble A9 (Bloc A), au 4ᵉ étage, bureau N° 409, à Agadir (80010).",
  },
  {
    question: "Quels types de soins proposez-vous ?",
    answer: (
      <div>
        <p className="mb-2">Nos soins dentaires :</p>
        <ul className="list-disc ml-[20px] space-y-1">
          <li>Détartrage et blanchiment dentaire</li>
          <li>Soins conservateurs (caries, dévitalisations)</li>
          <li>Esthétique dentaire (facettes, couronnes, alignement)</li>
          <li>Implants dentaires</li>
          <li>Orthodontie (appareils & Invisalign)</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Est-ce que vous acceptez les urgences dentaires ?",
    answer: "Oui, nous accueillons les urgences dans la journée selon la disponibilité. Appelez-nous dès que possible pour une prise en charge rapide.",
  },
  {
    question: "Proposez-vous des soins esthétiques comme le blanchiment ?",
    answer: "Oui, nous proposons plusieurs techniques de blanchiment dentaire professionnel, selon vos besoins et la sensibilité de vos dents.",
  },
  {
    question: "Est-ce que vous traitez les enfants ?",
    answer: "Oui, nous accueillons les enfants avec douceur et patience. Un premier contact positif avec le dentiste est essentiel pour eux.",
  },
  {
    question: "Est-ce que les soins sont douloureux ?",
    answer: "Nous utilisons des techniques modernes et une anesthésie locale adaptée pour minimiser l'inconfort. Le confort du patient est notre priorité.",
  },
];

function MinusIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0">
      <rect x="0.5" y="0.5" width="20" height="20" rx="10" stroke="#D8DEDE" />
      <path d="M6.5 10.5H14.5" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="shrink-0">
      <rect x="0.5" y="0.5" width="20" height="20" rx="10" stroke="#D8DEDE" />
      <path d="M10.5 6.5V14.5M6.5 10.5H14.5" stroke="#14BEC9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[80px]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-[80px]">
        <div className="flex gap-[80px]">
          <div className="shrink-0 pt-[8px]">
            <div className="bg-[#e1f8fa] rounded-[20px] px-[16px] py-[6px] inline-block mb-[12px]">
              <span className="text-[#14bec9] text-[16px]" style={{ fontWeight: 200 }}>Questions fréquentes</span>
            </div>
            <h2 className="text-[#173435] text-[42px] tracking-[-1px] leading-[52.5px] w-[300px]" style={{ fontWeight: 400 }}>
              Foire aux questions
            </h2>
          </div>

          <div className="flex-1">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-[#d8dede]">
                <button
                  className="w-full flex items-center justify-between py-[19px] text-left gap-[20px]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-[#173435] text-[21px]" style={{ fontWeight: 200 }}>
                    {item.question}
                  </span>
                  {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                </button>
                {openIndex === index && (
                  <div className="pb-[21px] text-[#173435] text-[16px] leading-[21px]" style={{ fontWeight: 200 }}>
                    {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
