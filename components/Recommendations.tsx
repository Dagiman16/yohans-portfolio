"use client";
import { useInView } from "react-intersection-observer";

const letters = [
  {
    ref: "",
    date: "23/03/2026",
    title: "Letter of Recommendation",
    from: "Woldia University",
    role: "Political Science Department",
    institution: "Woldia University",
    pdf: "/recommendations/Recomendation letter.pdf",
    highlights: [
      "Outstanding student with strong character",
      "Volunteered at Community Based Education",
      "Excellent time management & leadership",
      "Highly recommended for any position",
    ],
    quote: "I believe Fasikaw is destined to be an expert in Political Science and related fields, and therefore is an excellent candidate for your esteemed organization.",
  },
];

export default function Recommendations() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="recommendations" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Official Letters</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Recommendation Letters</h2>
          <p className="text-gray-400 text-sm mt-2">Issued by Woldia University · College of Social Sciences &amp; Humanities</p>
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

              <a
                href={l.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 rounded-2xl bg-[#1a1a1a] text-white text-sm font-bold hover:bg-[#333] transition-colors flex items-center justify-center gap-2"
              >
                <span>📄</span> View Original Document
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">Original signed copies available upon request</p>
      </div>
    </section>
  );
}
