"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const certificates = [
  { icon: "🎓", title: "BA in Political Science", issuer: "Woldia University", year: "2025", pdf: "/degree/dgree.pdf" },
  { icon: "🏅", title: "Certificate", issuer: "Certification Body", year: "2025", pdf: "/certificates/Certificate (3).pdf" },
  { icon: "💻", title: "Ethio Coders Certificate", issuer: "Ethio Coders", year: "2025", pdf: "/ethio_coder/Ethio_Coder .pdf" },
];

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [open, setOpen] = useState(false);

  return (
    <section id="certificates" className="stripe-bg py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Awards & Certificates</h2>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gray-500 text-sm mb-8">
            {certificates.length} credentials from academic institutions and professional training programs.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5C518] text-[#1a1a1a] font-black text-sm hover:bg-[#E6B800] transition-colors shadow-sm"
          >
            📄 View All Certificates
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-black text-lg text-[#1a1a1a]">All Certificates</h3>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-bold hover:bg-[#444] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* List */}
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
                  <a
                    href={c.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-4 py-2 rounded-xl bg-[#1a1a1a] text-white text-xs font-bold hover:bg-[#333] transition-colors"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
