"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 3.89, suffix: "", label: "GPA / 4.00", decimals: 2 },
  { value: 88, suffix: "%", label: "Exit Exam Score", decimals: 0 },
  { value: 4, suffix: " yrs", label: "Years of Excellence", decimals: 0 },
];

function Counter({ target, decimals, suffix }: { target: number; decimals: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (p < 1) frame.current = requestAnimationFrame(run);
    };
    frame.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, target, decimals]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}</span>;
}

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-semibold text-[#F5C518] uppercase tracking-widest mb-2">Academic Record</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">Proven Excellence</h2>
        </div>

        {/* Animated counters */}
        <div
          ref={ref}
          className={`grid grid-cols-3 gap-3 sm:gap-5 mb-8 sm:mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {stats.map((s) => (
            <div key={s.label} className="card-hover text-center p-4 sm:p-6 rounded-2xl border border-gray-100 bg-[#FAFAFA] shadow-sm">
              <div className="text-xl sm:text-3xl font-black text-[#1a1a1a] mb-1">
                <Counter target={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="text-xs text-gray-400 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Gold Medal spotlight */}
        <div className="rounded-3xl bg-[#F5C518] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-5 sm:gap-8 text-center md:text-left">
          <div className="text-5xl sm:text-7xl medal-pulse flex-shrink-0">🥇</div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-2">Gold Medal — Woldia University</h3>
            <p className="text-[#1a1a1a]/70 leading-relaxed text-sm sm:text-base max-w-2xl">
              Awarded for graduating with distinction. Achieved the highest Exit Exam score in the
              entire graduating batch — a record that signals discipline, intelligence, and consistency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
