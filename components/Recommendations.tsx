"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const letters = [
  {
    ref: "",
    date: "23/03/2025",
    title: "Letter of Recommendation",
    from: "Woldia University",
    role: "School of Law",
    institution: "Woldia University",
    pdf: "/recommendations/yohans alebachew recommendation letters .pdf",
    highlights: [
      "Outstanding law student with strong academic character",
      "Demonstrated excellent legal research and writing ability",
      "Excellent time management, discipline & leadership",
      "Highly recommended for legal practice or further study",
    ],
    quote: "I believe Yohans Alebachew is destined to excel in the legal profession, and is therefore an excellent candidate for your esteemed organization.",
  },
];

export default function Recommendations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [viewing, setViewing] = useState<{ title: string; pdf: string } | null>(null);

  return (
    <section id="recommendations" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Official Letters</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Recommendation Letters</h2>
          <p className="text-gray-400 text-sm mt-2">Issued by Woldia University · School of Law</p>
        </div>

        <div
          ref={ref}
          className={`flex justify-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {letters.map((l, i) => (
            <div key={i} className="w-full max-w-xl rounded-3xl border border-gray-100 bg-[#FAFAFA] p-5 sm:p-7 shadow-sm flex flex-col gap-4 hover:border-[#F5C518] transition-colors">
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
                onClick={() => setViewing({ title: l.title, pdf: l.pdf })}
                className="mt-auto w-full py-3 rounded-2xl bg-[#1a1a1a] text-white text-sm font-bold hover:bg-[#333] transition-colors flex items-center justify-center gap-2"
              >
                <span>📄</span> View Original Document
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">Original signed copies available upon request</p>
      </div>

      {/* Inline PDF viewer modal */}
      {viewing && (
        <div
          className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setViewing(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <h3 className="font-black text-base text-[#1a1a1a] truncate pr-4">{viewing.title}</h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={viewing.pdf}
                  download
                  className="px-4 py-2 rounded-xl bg-[#F5C518] text-[#1a1a1a] text-xs font-bold hover:bg-[#E6B800] transition-colors"
                >
                  ⬇ Download
                </a>
                <button
                  onClick={() => setViewing(null)}
                  className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-bold hover:bg-[#444] transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            <iframe
              src={viewing.pdf}
              className="w-full flex-1"
              title={viewing.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}
