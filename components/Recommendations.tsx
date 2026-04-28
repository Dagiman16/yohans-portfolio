"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const letters = [
  {
    ref: "REF. No: WLDU/MGMT/054/2026",
    date: "23/03/2026",
    title: "Letter of Recommendation",
    from: "Dagmawi Mandefro (MAPM)",
    role: "Head of Management Department",
    institution: "Woldia University",
    image: "/dagi.jpg",
    highlights: [
      "Outstanding student with strong character",
      "Volunteered at Community Based Education",
      "Excellent time management & leadership",
      "Highly recommended for any position",
    ],
    quote: "I believe Abrham is destined to be an expert in Management and related field, and therefore is an excellent candidate for your esteemed company.",
  },
  {
    ref: "Ref: wu/CoBE/Ac-27/26",
    date: "24/06/2026",
    title: "To Whom It May Concern",
    from: "Abdurahman Arega Ali",
    role: "Dean, College of Business and Economics",
    institution: "Woldia University",
    image: "/abdu.jpg",
    highlights: [
      "Diligent, industrious & highly motivated",
      "Second outstanding student of his batch",
      "Excellent communication with stakeholders",
      "Asset to any institution he belongs to",
    ],
    quote: "I am confident that he will be an asset to any institutions to which he belongs. I wish him all success in his future careers and personal life.",
  },
];

export default function Recommendations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [modal, setModal] = useState<number | null>(null);

  const active = modal !== null ? letters[modal] : null;

  return (
    <section id="recommendations" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Official Letters</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Recommendation Letters</h2>
          <p className="text-gray-400 text-sm mt-2">Issued by Woldia University · College of Business &amp; Economics</p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-5 sm:gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {letters.map((l, i) => (
            <div key={i} className="rounded-3xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-7 shadow-sm flex flex-col gap-4 hover:border-[#F5C518] transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#F5C518] uppercase tracking-wider">{l.ref}</span>
                  <h3 className="text-base sm:text-lg font-black text-[#1a1a1a] mt-0.5">{l.title}</h3>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap mt-1">{l.date}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F5C518] flex items-center justify-center text-base font-black text-[#1a1a1a] flex-shrink-0">
                  {l.from.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">{l.from}</p>
                  <p className="text-xs text-gray-500">{l.role}</p>
                  <p className="text-xs text-gray-400">{l.institution}</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#F5C518] pl-3 italic text-gray-500 text-xs sm:text-sm leading-relaxed">
                &quot;{l.quote}&quot;
              </blockquote>

              <ul className="space-y-1.5">
                {l.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setModal(i)}
                className="mt-auto w-full py-3 rounded-2xl bg-[#1a1a1a] text-white text-sm font-bold hover:bg-[#333] transition-colors flex items-center justify-center gap-2"
              >
                <span>📄</span> View Original Document
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">Original signed copies available upon request</p>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-bold hover:bg-[#444] transition-colors"
            >
              ✕
            </button>

            <div className="overflow-y-auto">
              <Image
                src={active.image}
                alt="Recommendation Letter"
                width={800}
                height={1100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
