"use client";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Background</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Education</h2>
        </div>
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative pl-5 sm:pl-6 border-l-4 border-[#F5C518]">
            <div className="absolute -left-[10px] top-1 w-5 h-5 rounded-full bg-[#F5C518] border-2 border-white shadow" />
            <div className="card-hover bg-[#FAFAFA] rounded-3xl border border-gray-100 p-5 sm:p-8 ml-3 sm:ml-4 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5 sm:mb-6">
                <div>
                  <span className="text-xs font-bold text-[#F5C518] uppercase tracking-wider">2021 – 2025</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mt-1">BA in Political Science and International Relations</h3>
                  <p className="text-gray-600 font-semibold mt-0.5">Woldia University</p>
                  <p className="text-gray-400 text-xs sm:text-sm">College of Social Sciences & Humanities · Woldia, Ethiopia</p>
                </div>
                <div className="flex-shrink-0 text-center px-5 py-3 sm:px-6 sm:py-4 rounded-2xl bg-[#F5C518] shadow-sm self-start">
                  <div className="text-xl sm:text-2xl font-black text-[#1a1a1a]">3.84</div>
                  <div className="text-xs text-[#1a1a1a]/60 mt-0.5">GPA / 4.00</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { icon: "🥇", text: "Gold Medal Award — GPA above 3.8" },
                  { icon: "📚", text: "Political Theory · Public Policy · International Relations · Public Admin" },
                ].map((h) => (
                  <div key={h.text} className="flex items-start gap-2 sm:gap-2.5 text-gray-600 text-xs sm:text-sm">
                    <span>{h.icon}</span>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
