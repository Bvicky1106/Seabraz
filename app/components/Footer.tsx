"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Practice Areas",
    links: [
      "Trademark",
      "Intellectual Property",
      "Corporate Law",
      "Commercial Contracts",
      "Business Registrations",
      "Dispute Resolution",
    ],
  },
  {
    title: "Firm",
    links: ["About Us", "Our Team", "Careers", "News & Insights"],
  },
  {
    title: "Resources",
    links: ["Legal Updates", "Publications", "Case Studies"],
  },
];

export default function Footer() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-black">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute bottom-0 left-1/2
            h-[260px] w-[260px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.03]
            blur-3xl

            sm:h-[340px] sm:w-[340px]
            lg:h-[420px] lg:w-[420px]
          "
        />
      </div>

      <div
        ref={ref}
        className="
          relative z-10
          mx-auto max-w-7xl

          px-5 py-14

          sm:px-8 sm:py-18

          lg:px-10 lg:py-24
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            grid gap-20

            lg:grid-cols-[1.1fr_1fr]
            lg:gap-24
          "
        >
          {/* BRAND SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="
              flex flex-col
              items-center
              text-center

              lg:items-start
              lg:text-left
            "
          >
            {/* LOGO */}
            <div
              className="
                flex items-center justify-center
                gap-4

                lg:justify-start
              "
            >
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]

                  sm:h-14 sm:w-14
                "
              >
                <Image
                  src="/seabraz.png"
                  alt="Seabraz Logo"
                  width={42}
                  height={42}
                  className="rounded-full object-contain"
                />
              </div>

              <div className="text-left">
                <h2
                  className="
                    font-[family-name:var(--font-space)]
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white

                    sm:text-[15px]
                  "
                >
                  Seabraz
                </h2>

                <p
                  className="
                    mt-1
                    font-[family-name:var(--font-space)]
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40

                    sm:text-[11px]
                  "
                >
                  IPR & Corporate Law
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7
                max-w-full

                text-center
                font-[family-name:var(--font-inter)]
                text-[14px]
                leading-8
                text-white/55

                sm:mt-8
                sm:max-w-xl
                sm:text-[15px]

                lg:max-w-md
                lg:text-left
                lg:text-justify
              "
            >
              Seabraz IPR & Corporate Law is committed to delivering
              professional, reliable, and business-focused legal solutions with
              integrity, precision, and expert-driven guidance. We strive to
              build lasting relationships through trust, transparency, and a
              dedication to protecting the interests, innovations, and growth of
              every client we serve.
            </p>

            {/* SOCIALS */}
            <div
              className="
                mt-8
                flex flex-wrap
                justify-center
                gap-4

                sm:mt-10

                lg:justify-start
              "
            >
              {["LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="
                    group flex items-center gap-2

                    rounded-full
                    border border-white/10
                    bg-white/[0.03]

                    px-4 py-2.5

                    font-[family-name:var(--font-space)]
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/60

                    transition-all duration-300

                    hover:border-white/20
                    hover:bg-white/[0.05]
                    hover:text-white

                    sm:px-5
                    sm:py-3
                    sm:text-[12px]
                  "
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* LINKS GRID */}
          <div
            className="
              grid grid-cols-1
              gap-14

              pt-2
              text-center

              sm:grid-cols-2
              sm:gap-12

              md:grid-cols-3

              lg:text-left
            "
          >
            {footerLinks.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.6,
                }}
                className="
                  flex flex-col
                  items-center

                  lg:items-start
                "
              >
                <h4
                  className="
                    mb-6

                    font-[family-name:var(--font-space)]
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/40

                    sm:text-[11px]
                  "
                >
                  {col.title}
                </h4>

                <ul
                  className="
                    flex flex-col
                    items-center
                    space-y-4

                    lg:items-start
                  "
                >
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          group inline-flex
                          items-center gap-2

                          font-[family-name:var(--font-inter)]
                          text-[13px]
                          font-light
                          text-white/55

                          transition-all duration-300
                          hover:text-white

                          sm:text-[14px]
                        "
                      >
                        <span>{link}</span>

                        <ArrowUpRight
                          size={14}
                          className="
                            opacity-0
                            transition-all duration-300

                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:opacity-100
                          "
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            my-12
            h-px
            w-full
            bg-white/[0.06]

            sm:my-14
          "
        />

        {/* BOTTOM SECTION */}
        <div
          className="
            flex flex-col
            items-center
            justify-center
            gap-6

            text-center

            lg:flex-row
            lg:justify-between
            lg:text-left
          "
        >
          {/* POLICY LINKS */}
          <div
            className="
              flex flex-wrap
              items-center
              justify-center
              gap-5
            "
          >
            <a
              href="/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-[family-name:var(--font-inter)]
                text-[11px]
                font-light
                text-white/35

                transition-colors duration-300
                hover:text-white/70

                sm:text-[12px]
              "
            >
              Privacy Policy
            </a>

            <a
              href="/disclaimer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-[family-name:var(--font-inter)]
                text-[11px]
                font-light
                text-white/35

                transition-colors duration-300
                hover:text-white/70

                sm:text-[12px]
              "
            >
              Disclaimer
            </a>
          </div>

          {/* COPYRIGHT */}
          <p
            className="
              max-w-xs

              text-center
              font-[family-name:var(--font-inter)]
              text-[11px]
              leading-6
              text-white/30

              sm:max-w-xl
              sm:text-[12px]

              lg:text-right
            "
          >
            © {new Date().getFullYear()} Seabraz IPR & Corporate Law Firm. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
