"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Companies Appoint Us as Legal Advisors" },
  { value: "100%", label: "Success Ratio" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white "
    >
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
        <div
          className="
            grid min-h-[85vh]
            items-center
            gap-14

            text-center
            justify-items-center

            lg:grid-cols-2
            lg:gap-24
            lg:text-left
            lg:justify-items-stretch
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex flex-col

              items-center
              text-center

              lg:items-start
              lg:text-left
            "
          >
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
    text-[42px]
    font-semibold
    leading-[0.95]
    tracking-tight

    sm:mt-10
    sm:text-6xl

    md:text-7xl

    lg:text-[72px]
  "
            >
              <span className="block">Legal Counsel</span>

              <span
                className="
      mt-3
      block
      text-white/35

      sm:mt-5
    "
              >
                For IPR &
              </span>

              <span
                className="
      mt-3
      block

      sm:mt-5
    "
              >
                Corporate
              </span>
              <span
                className="
      mt-3
      block

      sm:mt-5
    "
              >
                Matters
              </span>
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
  mt-8
  max-w-xl
  font-[family-name:var(--font-inter)]
  text-[15px]
  
  text-white/60
  

  
 text-justify
  mx-auto
  lg:mx-0
   lg:text-[20px]
"
            >
              Seabraz IPR & Corporate Law delivers strategic legal, intellectual
              property, corporate, and compliance solutions for startups,
              entrepreneurs, businesses, and growing enterprises. Backed by a
              team of qualified advocates, legal professionals, consultants, and
              domain-specific experts, we provide reliable, business-focused
              advisory services with professionalism, precision, and strategic
              insight for clients across India and international markets.
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
                mt-10
                flex w-full
                flex-col
                gap-4

                sm:mt-14
                sm:w-auto
                sm:flex-row
                sm:gap-5

                items-center
                justify-center

                lg:items-start
                lg:justify-start
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
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              flex flex-col
              items-center
              justify-center

              mt-4
              w-full

              lg:mt-0
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                h-[300px] w-[300px]
                sm:h-[380px] sm:w-[380px]
                lg:h-[420px] lg:w-[420px]
                rounded-full
                bg-white/[0.04]
                blur-3xl
              "
            />

            {/* LOGO */}
            <Image
              src="/out.png"
              alt="Seabraz Logo"
              width={520}
              height={520}
              priority
              className="
                relative z-10
                w-[280px]
                sm:w-[340px]
                md:w-[420px]
                lg:w-[520px]
                h-auto
                object-contain
                opacity-95
                drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]
              "
            />

            {/* TEXT */}
            <div className="relative z-10 mt-8 text-center px-4">
              <p
                className="
                  text-[10px]
                  sm:text-[15px]
                  uppercase
                  tracking-[0.35em]
                  text-white/40
                   lg:text-[17px]
                  
                "
              >
                Seabraz IPR & Corporate Law
              </p>

              <div className="mx-auto mt-5 h-px w-20 bg-white/10" />

              <p
                className="
                  mt-5
                  max-w-md
                  text-10
                  leading-8
                  text-white/55
                   text-justify-center
                    lg:text-[17px]
                  
                "
              >
                Strategic legal advisory for startups, enterprises,
                corporations, and modern businesses across India and
                international markets.
              </p>
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

                md:border-b-0
                md:py-7
              "
            >
              <h3
                className="
                  text-2xl
                  leading-none
                  text-white

                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-2
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  leading-relaxed
                  text-white/40

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
