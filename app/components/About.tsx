"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const practiceAreas = [
  {
    number: "01",
    title: "Intellectual Property",
    description:
      "Patent prosecution, trademark registration, copyright protection, and strategic IP litigation across global jurisdictions.",
  },
  {
    number: "02",
    title: "Corporate Law",
    description:
      "Corporate governance, board advisory, compliance frameworks, and entity structuring for modern enterprises.",
  },
  {
    number: "03",
    title: "Mergers & Acquisitions",
    description:
      "Comprehensive M&A advisory including due diligence, transaction structuring, and post-merger integration.",
  },
  {
    number: "04",
    title: "International Trade",
    description:
      "Cross-border trade compliance, anti-dumping proceedings, customs regulations, and arbitration support.",
  },
  {
    number: "05",
    title: "Data Privacy & Cyber Law",
    description:
      "Global privacy compliance, cybersecurity advisory, GDPR frameworks, and digital risk management.",
  },
  {
    number: "06",
    title: "Dispute Resolution",
    description:
      "Commercial arbitration, litigation strategy, mediation, and high-stakes dispute resolution services.",
  },
];

export default function About() {
  const storyRef = useRef(null);
  const practiceRef = useRef(null);

  const storyInView = useInView(storyRef, {
    once: true,
    margin: "-100px",
  });

  const practiceInView = useInView(practiceRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black text-white py-32"
    >
      {/* GRID BACKGROUND */}
      <div
        className="
        absolute inset-0 opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:90px_90px]
        "
      />

      {/* GLOW */}
      <div
        className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[900px] h-[900px]
        bg-white/[0.03]
        rounded-full blur-3xl
        "
      />

      {/* SIDE LINES */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-white/[0.05] hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-white/[0.05] hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* TOP SECTION */}
        <div ref={storyRef} className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {/* TAG */}
            <div
              className="
              inline-flex items-center gap-3
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              px-5 py-2
              rounded-full
              mb-8
              "
            >
              <div className="w-2 h-2 rounded-full bg-white/60" />

              <span
                className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/60
                "
              >
                About Seabraz
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
              text-4xl sm:text-5xl lg:text-7xl
              leading-[0.95]
              tracking-tight
              font-serif
              font-semibold
              "
            >
              A Legacy Of
              <br />
              <span className="text-white/35">Legal Precision</span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-10 space-y-7 max-w-xl">
              <p className="text-white/60 leading-8 text-[15px]">
                Seabraz is a modern law firm focused on delivering strategic
                legal solutions for startups, businesses, and growing
                enterprises. Our team is committed to providing reliable
                guidance with professionalism, transparency, and attention to
                detail.
              </p>

              <p className="text-white/60 leading-8 text-[15px]">
                We specialize in intellectual property, corporate advisory, and
                business legal services, helping clients navigate today’s
                evolving legal and commercial landscape with confidence and
                clarity.
              </p>
            </div>

            {/* BOTTOM LINE */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-14 h-px bg-white/20" />

              <span
                className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/40
                "
              >
                Established 2026
              </span>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={storyInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative"
          >
            <div
              className="
              relative
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              p-10 sm:p-14
              overflow-hidden
              "
            >
              {/* INNER BORDER */}
              <div className="absolute inset-5 border border-white/10" />

              {/* LARGE QUOTE */}
              <div className="relative z-10">
                <div
                  className="
                  text-[120px]
                  font-serif
                  text-white/10
                  leading-none
                  "
                >
                  “
                </div>

                <blockquote
                  className="
                  -mt-8
                  text-2xl sm:text-3xl
                  leading-relaxed
                  font-serif
                  text-white/80
                  "
                >
                  Justice is the constant and perpetual will to allot to every
                  person their rightful due.
                </blockquote>

                <div className="mt-10">
                  <div className="w-12 h-px bg-white/20 mb-4" />

                  <p
                    className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                    "
                  >
                    — Domitius Ulpianus
                  </p>
                </div>
              </div>

              {/* GLOW */}
              <div
                className="
                absolute -bottom-20 -right-20
                w-72 h-72
                bg-white/[0.04]
                rounded-full blur-3xl
                "
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="my-28 h-px w-full bg-white/10" />

        {/* PRACTICE SECTION */}
        <div id="practice" ref={practiceRef}>
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={practiceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div
              className="
              inline-flex items-center gap-3
              border border-white/10
              bg-white/[0.03]
              px-5 py-2
              rounded-full
              mb-8
              "
            >
              <div className="w-2 h-2 rounded-full bg-white/60" />

              <span
                className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/60
                "
              >
                Practice Areas
              </span>
            </div>

            <h2
              className="
              text-4xl sm:text-5xl lg:text-6xl
              font-serif
              leading-[1]
              tracking-tight
              "
            >
              Areas Of
              <span className="text-white/35"> Expertise</span>
            </h2>

            <p
              className="
              mt-8
              text-white/60
              leading-8
              max-w-2xl
              "
            >
              Our multidisciplinary legal practice delivers sophisticated
              counsel across complex corporate, intellectual property,
              regulatory, and international legal matters.
            </p>
          </motion.div>

          {/* PRACTICE GRID */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                animate={practiceInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.08,
                  duration: 0.7,
                }}
                className="
                group
                relative
                border-b border-r border-white/10
                p-10
                min-h-[320px]
                overflow-hidden
                hover:bg-white/[0.03]
                transition-all duration-500
                "
              >
                {/* HOVER GLOW */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.05]
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  "
                />

                {/* NUMBER */}
                <span
                  className="
                  relative z-10
                  text-[13px]
                  font-serif
                  text-white/30
                  "
                >
                  {area.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                  relative z-10
                  mt-8
                  text-2xl
                  font-serif
                  leading-snug
                  text-white
                  "
                >
                  {area.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  relative z-10
                  mt-6
                  text-white/55
                  leading-8
                  text-[15px]
                  "
                >
                  {area.description}
                </p>

                {/* BOTTOM LINE */}
                <div
                  className="
                  absolute bottom-10 left-10
                  w-12 h-px
                  bg-white/20
                  transition-all duration-500
                  group-hover:w-20
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
