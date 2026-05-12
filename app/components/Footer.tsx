"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Practice Areas",
    links: [
      "Intellectual Property",
      "Corporate Law",
      "Mergers & Acquisitions",
      "International Trade",
      "Data Privacy",
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
            h-[300px] w-[300px]
            -translate-x-1/2
            rounded-full bg-white/[0.03]
            blur-3xl
            sm:h-[400px] sm:w-[400px]
          "
        />
      </div>

      <div
        ref={ref}
        className="
          relative z-10
          mx-auto max-w-7xl
          px-5 py-16
          text-center
          sm:px-6 sm:py-20
          lg:px-10 lg:py-28
          lg:text-left
        "
      >
        {/* TOP SECTION */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mx-auto flex max-w-xl flex-col items-center lg:items-start"
          >
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl border border-white/10
                  bg-white/[0.03]
                  sm:h-14 sm:w-14
                "
              >
                <Image
                  src="/seabraz.png"
                  alt="Seabraz Logo"
                  width={42}
                  height={42}
                  className="
    object-contain
    rounded-full
  "
                />
              </div>

              <div className="text-left">
                <h2
                  className="
                    text-[13px]
                    font-semibold uppercase
                    tracking-[0.22em]
                    text-white
                    sm:text-[15px]
                  "
                >
                  Seabraz
                </h2>

                <p
                  className="
                    mt-1 text-[10px]
                    uppercase tracking-[0.16em]
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
                mt-6
                max-w-md
                text-[14px]
                leading-7 text-white/55
                sm:mt-8
                sm:text-[15px]
              "
            >
              Delivering strategic legal counsel with integrity, precision, and
              deep industry expertise across intellectual property, corporate
              law, and global business transactions.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
              {["LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="
                    group flex items-center gap-2
                    rounded-full border border-white/10
                    bg-white/[0.03]
                    px-4 py-2.5
                    text-[10px]
                    uppercase tracking-[0.18em]
                    text-white/60
                    transition-all duration-300
                    hover:border-white/20
                    hover:bg-white/[0.05]
                    hover:text-white
                    sm:px-5 sm:py-3
                    sm:text-[12px]
                  "
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* LINKS */}
          <div
            className="
              grid grid-cols-1
              gap-10
              sm:grid-cols-2
              md:grid-cols-3
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
                className="flex flex-col items-center lg:items-start"
              >
                <h4
                  className="
                    mb-5 text-[10px]
                    font-semibold uppercase
                    tracking-[0.18em]
                    text-white/40
                    sm:mb-6
                    sm:text-[11px]
                  "
                >
                  {col.title}
                </h4>

                <ul className="space-y-3 sm:space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          group inline-flex
                          items-center gap-2
                          text-[13px]
                          font-light text-white/55
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
        <div className="my-10 h-px w-full bg-white/[0.06] sm:my-14" />

        {/* BOTTOM */}
        <div
          className="
            flex flex-col
            items-center gap-5
            text-center
            md:flex-row
            md:justify-between
            md:text-left
          "
        >
          {/* POLICIES */}
          <div
            className="
              flex flex-wrap
              items-center justify-center
              gap-4
              sm:gap-5
              md:justify-start
            "
          >
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="
                  text-[11px]
                  font-light text-white/35
                  transition-colors duration-300
                  hover:text-white/70
                  sm:text-[12px]
                "
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* COPYRIGHT */}
          <p
            className="
              max-w-sm
              text-[11px]
              leading-6 text-white/30
              sm:text-[12px]
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
