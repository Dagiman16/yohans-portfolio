"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const certificates = [
  {
    icon: "🎓",
    title: "Temporary Degree & Exit Exam Result",
    issuer: "Woldia University",
    year: "2025",
    pdf: "/degree/yohans alebachew temporary degree and exit exam result.PDF",
  },
  {
    icon: "🏅",
    title: "Certificate of Achievement",
    issuer: "Woldia University",
    year: "2025",
    pdf: "/certificates/yohansalebachew certificates.PDF",
  },
  {
    icon: "💻",
    title: "Ethio Coders Certificate",
    issuer: "Ethio Coders",
    year: "2025",
    pdf: "/ethio_coder/ethio coder.PDF",
  },
  {
    icon: "📄",
    title: "Academic Transcript",
    issuer: "Woldia University",
    year: "2025",
    pdf: "/transcrpit/yohans alebachew transcrpit.PDF",
  },
];

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [listOpen, setListOpen] = useState(false);
  const [viewing, setViewing] = useState<{ title: string; pdf: string } | null>(null);

  return (
    <section id="certificates" className="stripe-bg py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Awards &amp; Certificates</h2>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gray-500 text-sm mb-8">
            {certificates.length} credentials from academic institutions and professional training programs.
          </p>
          <button
            onClick={() => setListOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5C518] text-[#1a1a1a] font-black text-sm hover:bg-[#E6B800] transition-colors shadow-sm"
          >
            📄 View All Certificates
          </button>
        </div>
      </div>

      {/* Certificate list modal */}
      {listOpen && !viewing && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setListOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-black text-lg text-[#1a1a1a]">All Certificates</h3>
              <button
                onClick={() => setListOpen(false)}
                className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-bold hover:bg-[#444] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto divide-y divide-gray-100">
              {certificates.map((c) => (
                <div key={c.title} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <div className="text-left">
                      <p className="font-bold text-sm text-[#1a1a1a]">{c.title}</p>
                      <p className="text-xs text-gray-400">{c.issuer} · {c.year}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setViewing({ title: c.title, pdf: c.pdf })}
                    className="flex-shrink-0 px-4 py-2 rounded-xl bg-[#1a1a1a] text-white text-xs font-bold hover:bg-[#333] transition-colors"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
                  onClick={() => { setViewing(null); setListOpen(true); }}
                  className="px-4 py-2 rounded-xl bg-gray-100 text-[#1a1a1a] text-xs font-bold hover:bg-gray-200 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => { setViewing(null); setListOpen(false); }}
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
