"use client";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative stripe-bg py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">About Me</h2>
        </div>

        <div
          ref={ref}
          className={`space-y-8 sm:space-y-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Bio card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 max-w-3xl mx-auto">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#F5C518] overflow-hidden border-4 border-white shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/fasik.JPG" alt="Yohans Alebachew" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Name */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a]">Yohans Alebachew</h3>
              <p className="text-sm text-[#F5C518] font-semibold mt-1">Law Graduate · Woldia University</p>
            </div>

            {/* Bio paragraphs */}
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              My name is <span className="font-bold text-[#1a1a1a]">Yohans Alebachew</span>, a Law graduate from{" "}
              <span className="font-bold text-[#1a1a1a]">Woldia University</span>, with a strong interest in justice, human rights, constitutional law, and the rule of law. My academic journey provided me with a solid foundation in legal principles, criminal law, civil law, constitutional law, administrative law, and legal research. Through my studies, I developed the ability to analyze legal issues, interpret legal provisions, examine cases, and understand the role of law in protecting individual rights, resolving disputes, and promoting justice and equality.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
              I am highly motivated, analytical, and committed to continuous learning and professional growth. I possess strong research, critical-thinking, communication, teamwork, and problem-solving skills, enabling me to approach legal challenges logically and work effectively in diverse professional environments. I am passionate about upholding the rule of law, protecting fundamental human rights, promoting fairness and accountability, and contributing to the development of a just and equitable society through ethical legal practice and public service.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#F5C518] pl-4 italic text-gray-400 text-xs sm:text-sm">
              &quot;Justice begins with integrity, grows through knowledge, and gains strength through action.&quot;
            </blockquote>
          </div>


        </div>
      </div>
    </section>
  );
}
