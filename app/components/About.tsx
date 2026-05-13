"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const practiceAreas = [
  {
    number: "01",
    title:
      "Trademark, Copyright, Geographical Indication (GI) & Brand Protection",
    description:
      "Comprehensive legal support for trademark registration,copyright protection, Geographical Indication (GI) registration and advisory, brand monitoring, infringement advisory, opposition matters, portfolio management, and protection of intellectual assets for businesses, startups, creators, and enterprises.",
  },
  {
    number: "02",
    title: "Patent, Design & Intellectual Property Advisory",
    description:
      "Professional assistance in patent advisory, industrial design registration, IP strategy, innovation protection, licensing support, intellectual asset management, and legal guidance for safeguarding business innovations and creative works.",
  },
  {
    number: "03",
    title: "Corporate Law & Business Compliance",
    description:
      "Strategic legal solutions for company incorporation, LLP registration, corporate governance, compliance management, regulatory filings, business structuring, shareholder matters, and ongoing corporate legal support.",
  },
  {
    number: "04",
    title: "Commercial Contracts & Legal Documentation",
    description:
      "Drafting, review, and legal vetting of agreements, contracts, partnership deeds, employment agreements, non-disclosure agreements, legal notices, commercial documentation, and business policies tailored to operational requirements.",
  },
  {
    number: "05",
    title: "Business Registrations, Auditing & Advisory",
    description:
      "End-to-end support for GST, MSME, IEC, startup registrations, licensing, compliance auditing, regulatory advisory, and professional business support services designed to ensure legal and operational efficiency",
  },
  {
    number: "06",
    title: "Dispute Resolution & Allied Legal Services",
    description:
      "While our primary expertise lies in IPR & Corporate Law, we also provide professional legal assistance in civil matters, family disputes, divorce proceedings, labour law, debt recovery, land registration, commercial disputes, and other allied legal matters through experienced domain-specific professionals.",
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
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32"
    >
      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-20
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW */}
      <div
        className="
          absolute left-1/2 top-0
          h-[700px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-3xl
        "
      />

      {/* SIDE LINES */}
      <div className="absolute left-10 top-0 bottom-0 hidden w-px bg-white/[0.05] xl:block" />
      <div className="absolute right-10 top-0 bottom-0 hidden w-px bg-white/[0.05] xl:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* TOP SECTION */}
        <div
          ref={storyRef}
          className="
            grid items-center gap-16
            lg:grid-cols-2 lg:gap-20
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="
              flex flex-col
              items-center text-center
              lg:items-start lg:text-left
            "
          >
            {/* TAG */}
            <div
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full border border-white/10
                bg-white/[0.03]
                px-5 py-2
                backdrop-blur-xl
              "
            >
              <div className="h-2 w-2 rounded-full bg-white/60" />

              <span
                className="
                  text-[10px]
                  uppercase tracking-[0.3em]
                  text-white/60
                  font-semibold
                "
              >
                About Seabraz
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-tight
                sm:text-5xl
                lg:text-7xl
              "
            >
              A Legacy Of
              <br />
              <span
                className="text-white/35 mt-4
      block"
              >
                Legal Precision
              </span>
            </h2>

            {/* TEXT */}
            <div className="mt-10 max-w-2xl space-y-7">
              <p className="text-[15px] leading-8 text-white/60 font-semibold  text-justify">
                Seabraz IPR & Corporate Law is a modern legal and corporate
                consultancy dedicated to supporting startups, entrepreneurs,
                businesses, and growing enterprises with strategic, reliable,
                and business focused professional solutions. Built on
                professionalism, precision, and integrity,we combine legal
                expertise with practical commercial understanding to help
                clients navigate today’s evolving legal and corporate landscape
                with confidence.
              </p>

              <p className="text-[15px] leading-8 text-white/60  text-justify">
                Our team consists of qualified advocates, legal professionals,
                consultants, and domain-specific experts, ensuring that every
                matter is handled by experienced specialists in their respective
                fields. With a strong commitment to transparency, efficiency,
                and client-focused service, we deliver dependable legal,
                corporate, compliance, and advisory support for clients across
                India and international markets.
              </p>
            </div>

            {/* LINE */}
            <div
              className="
                mt-12 flex items-center gap-4
                justify-center lg:justify-start
              "
            >
              <div className="h-px w-14 bg-white/20" />

              <span
                className="
                  text-[10px]
                  uppercase tracking-[0.35em]
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
            className="relative flex justify-center"
          >
            <div
              className="
                relative
                w-full max-w-2xl
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                p-8 backdrop-blur-2xl
                sm:p-12 lg:p-14
              "
            >
              {/* INNER BORDER */}
              <div className="absolute inset-5 border border-white/10" />

              <div className="relative z-10 text-center lg:text-left">
                <div
                  className="
                    
                    text-[90px]
                    leading-none
                    text-white/10
                    sm:text-[120px]
                  "
                >
                  “
                </div>

                <blockquote
                  className="
                    -mt-6
                   
                    text-2xl
                    leading-relaxed
                    text-white/80
                    sm:text-3xl
                  "
                >
                  “Thalliyathor Thozhil Seidhu Ulagil Vaazhvom”
                </blockquote>

                <div
                  className="
                    mt-10 flex flex-col items-center
                    lg:items-start
                  "
                >
                  <div className="mb-4 h-px w-12 bg-white/20" />

                  <p
                    className="
                      text-[12px]
                      uppercase tracking-[0.3em]
                      text-white/40
                    "
                  >
                    — Mahakavi Subramania Bharathiyar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-24 h-px w-full bg-white/10" />

        {/* PRACTICE */}
        <div id="practice" ref={practiceRef}>
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={practiceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="
              mx-auto max-w-3xl
              text-center
            "
          >
            <div
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full border border-white/10
                bg-white/[0.03]
                px-5 py-2
              "
            >
              <div className="h-2 w-2 rounded-full bg-white/60" />

              <span
                className="
                  text-[10px]
                  uppercase tracking-[0.3em]
                  text-white/60
                "
              >
                Practice Areas
              </span>
            </div>

            <h2
              className="
                
                text-4xl
                leading-[1]
                tracking-tight
                sm:text-5xl
                lg:text-6xl
                font-semibold
                
              "
            >
              Areas Of
              <span className="text-white/35 font-semibold"> Expertise</span>
            </h2>

            <p
              className="
                mx-auto mt-8
                max-w-2xl
                leading-8
                text-white/60
                text-justify-center
                
              "
            >
              Our multidisciplinary legal practice delivers sophisticated
              counsel across corporate, intellectual property, regulatory, and
              international legal matters.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="mt-20 grid border border-white/10 md:grid-cols-2 lg:grid-cols-3">
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
    group relative
    min-h-[320px]
    overflow-hidden
    border-b border-r border-white/10
    p-8

    flex flex-col items-center justify-center
    text-center

    transition-all duration-500
    hover:bg-white/[0.03]
  "
              >
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/[0.05]
                    to-transparent
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    relative z-10
                    
                    text-[13px]
                    text-white/30
                  "
                >
                  {area.number}
                </span>

                <h3
                  className="
                    relative z-10
                    mt-8
                    text-2xl
                    leading-snug
                    text-white
                    
                  "
                >
                  {area.title}
                </h3>

                <p
                  className="
                    relative z-10
                    mt-6
                    text-[15px]
                    leading-8
                    text-white/55
                     text-justify
                  "
                >
                  {area.description}
                </p>

                <div
                  className="
                    absolute bottom-10 left-1/2
                    h-px w-12
                    -translate-x-1/2
                    bg-white/20
                    transition-all duration-500
                    group-hover:w-20

                    lg:left-10 lg:translate-x-0
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
