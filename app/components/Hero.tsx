"use client";

import { motion } from "framer-motion";
import { Scale, ArrowRight } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },

  { value: "98%", label: "Success Ratio" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:70px_70px] sm:bg-[size:90px_90px]
        "
      />

      {/* TOP GLOW */}
      <div
        className="
          absolute top-[-300px] left-1/2 -translate-x-1/2
          h-[700px] w-[700px]
          rounded-full bg-white/[0.04] blur-3xl
          sm:h-[1000px] sm:w-[1000px]
        "
      />

      {/* SIDE LINES */}
      <div className="absolute left-6 top-0 hidden w-px bg-white/[0.05] xl:block" />
      <div className="absolute right-6 top-0 hidden w-px bg-white/[0.05] xl:block" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 pb-20 sm:px-6 sm:pt-32 lg:px-10 lg:pb-32">
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start text-left">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                flex items-center gap-3
                rounded-full border border-white/10
                bg-white/[0.03]
                px-4 py-2.5
                backdrop-blur-xl
                sm:px-5
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  uppercase tracking-[0.25em]
                  text-white/60
                  sm:text-[10px]
                "
              >
                Seabraz IPR & Corporate Law
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-8
                font-serif text-[42px]
                font-semibold leading-[0.95]
                tracking-tight
                sm:mt-10
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
              "
            >
              Elite Legal
              <br />
              <span className="text-white/35">Advisory</span>
              <br />
              For Modern
              <br />
              Enterprises
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                mt-8 max-w-xl
                text-[15px]
                leading-7 text-white/60
                sm:mt-10
                sm:text-base
                sm:leading-8
              "
            >
              Delivering strategic excellence in Intellectual Property,
              Corporate Governance, International Trade, Mergers & Acquisitions,
              and cross-border legal advisory with precision, discretion, and
              trust.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="
                mt-10 flex w-full
                flex-col gap-4
                sm:mt-14
                sm:w-auto
                sm:flex-row
                sm:gap-5
              "
            >
              {/* PRIMARY BUTTON */}
              <a
                href="#contact"
                className="
                  group relative overflow-hidden
                  bg-white px-6 py-4
                  text-center text-[10px]
                  font-semibold uppercase
                  tracking-[0.18em]
                  text-black
                  transition-all duration-500
                  hover:scale-[1.02]
                  sm:px-8
                  sm:text-[11px]
                "
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  Schedule Consultation
                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>

                <div
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-black/10
                    to-transparent
                    transition-transform duration-1000
                    group-hover:translate-x-full
                  "
                />
              </a>

              {/* SECONDARY BUTTON */}
              <a
                href="#about"
                className="
                  border border-white/10
                  bg-white/[0.02]
                  px-6 py-4
                  text-center text-[10px]
                  uppercase tracking-[0.18em]
                  text-white/70
                  backdrop-blur-md
                  transition-all duration-500
                  hover:border-white/25
                  hover:bg-white/[0.04]
                  hover:text-white
                  sm:px-8
                  sm:text-[11px]
                "
              >
                Explore Expertise
              </a>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: -4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative hidden
              items-center justify-center
              lg:flex
            "
          >
            <div
              className="
                relative h-[560px]
                w-full max-w-[500px]
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                xl:h-[640px]
              "
            >
              {/* INNER BORDER */}
              <div className="absolute inset-6 border border-white/10" />

              {/* NUMBER */}
              <div className="absolute top-14 left-10 xl:top-16 xl:left-16">
                <h2
                  className="
                    font-serif text-[110px]
                    leading-none text-white/10
                    xl:text-[150px]
                  "
                >
                  2+
                </h2>

                <p
                  className="
                    mt-3 text-[10px]
                    uppercase tracking-[0.3em]
                    text-white/40
                  "
                >
                  Years Of Trust
                </p>
              </div>

              {/* CENTER LINE */}
              <div className="absolute top-1/2 left-10 right-10 h-px bg-white/10 xl:left-16 xl:right-16" />

              {/* CONTENT */}
              <div className="absolute bottom-12 left-10 right-10 xl:bottom-16 xl:left-16 xl:right-16">
                <p className="text-sm leading-7 text-white/60">
                  Representing corporations, startups, and international clients
                  with world-class legal intelligence and tailored strategic
                  counsel.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px w-12 bg-white/20" />

                  <span
                    className="
                      text-[10px]
                      uppercase tracking-[0.3em]
                      text-white/40
                    "
                  >
                    Since 2001
                  </span>
                </div>
              </div>

              {/* GLOW */}
              <div
                className="
                  absolute -right-24 -bottom-24
                  h-72 w-72
                  rounded-full bg-white/[0.05]
                  blur-3xl
                "
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div
        className="
          relative z-10
          border-t border-white/10
          bg-black/50
          backdrop-blur-xl
        "
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + i * 0.1,
              }}
              className="
                flex flex-col
                items-center justify-center
                border-r border-b
                border-white/5
                px-3 py-5
                text-center

                even:border-r-0

                md:grid-cols-4
                md:border-b-0
                md:py-7
              "
            >
              <h3
                className="
                  font-serif text-2xl
                  leading-none text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2 text-[8px]
                  uppercase tracking-[0.18em]
                  leading-relaxed text-white/40
                  sm:text-[10px]
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
