"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const awards = [
  { icon: "🥇", title: "Gold Medal Award", issuer: "Woldia University", year: "2026", accent: "bg-[#F5C518]", image: "/cert1.jpg" },
  { icon: "🎓", title: "BA in Management", issuer: "Woldia University", year: "2026", accent: "bg-gray-100", image: "/cert2.jpg" },
  { icon: "📊", title: "Exit Exam Top Scorer", issuer: "Ethiopian Higher Education", year: "2026", accent: "bg-gray-100", image: "/cert3.jpg" },
  { icon: "🏅", title: "ESHE & EthioCoders Certificate", issuer: "ESHE · EthioCoders", year: "2026", accent: "bg-gray-100", pdf: "/Abrham Demse......pdf" },
];

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section id="certificates" className="stripe-bg py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Credentials</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Awards & Certificates</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {awards.map((a) => (
            <div key={a.title} className={`card-hover rounded-3xl p-5 sm:p-6 ${a.accent} border border-gray-100 shadow-sm flex flex-col`}>
              <div className="text-3xl sm:text-4xl mb-3">{a.icon}</div>
              <h3 className="font-black text-sm sm:text-base text-[#1a1a1a] mb-1">{a.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{a.issuer}</p>
              <p className="text-gray-400 text-xs mt-1 mb-4">{a.year}</p>

              {"image" in a ? (
                <button
                  onClick={() => setModalImg(a.image!)}
                  className="mt-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1a1a1a] text-white text-xs font-bold hover:bg-[#333] transition-colors"
                >
                  📄 View Certificate
                </button>
              ) : (
                <a
                  href={a.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#1a1a1a] text-white text-xs font-bold hover:bg-[#333] transition-colors"
                >
                  📄 View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setModalImg(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center text-sm font-bold hover:bg-[#444] transition-colors"
            >
              ✕
            </button>
            <div className="overflow-y-auto max-h-[92vh]">
              <Image
                src={modalImg}
                alt="Certificate"
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
