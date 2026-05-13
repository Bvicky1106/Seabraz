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
            absolute left-1/2 top-0
            h-[400px] w-[400px]
            -translate-x-1/2

            rounded-full
            bg-white/[0.03]
            blur-3xl
          "
        />
      </div>

      <div
        ref={ref}
        className="
          relative z-10
          mx-auto max-w-7xl

          px-5 py-16

          sm:px-8 sm:py-20

          lg:px-10 lg:py-24
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            grid gap-16

            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-24
            lg:items-center
          "
        >
          {/* LEFT SIDE */}
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
                flex items-center
                justify-center
                gap-4

                lg:justify-start
              "
            >
              <div
                className="
                  flex h-14 w-14
                  items-center justify-center

                  rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.03]

                  backdrop-blur-xl
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
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white
                    lg:text-[18px]
                  "
                >
                  Seabraz
                </h2>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-white/40
                    lg:text-[18px]
                  "
                >
                  IPR & Corporate Law
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-xl

                text-[14px]
                leading-8
                text-white/55

                sm:text-[15px]

                text-center
                lg:text-left
                text-justify
                              [text-align-last:center]
                              lg:text-[18px]
                
              "
            >
              Seabraz IPR & Corporate Law delivers strategic legal
              solutions with precision, integrity, and business-focused
              expertise. We are committed to protecting innovation,
              resolving complex legal matters, and supporting long-term
              client growth through trusted legal guidance.
            </p>

            {/* SOCIALS */}
           
<div
  className="
    mt-10
    flex flex-wrap
    justify-center
    gap-4

    lg:justify-start
    
  "
>
  <a
    href="https://www.instagram.com/seabraz_legal?igsh=b3lobTJ4Y2owbHRz"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative overflow-hidden

      rounded-full
      border border-white/[0.08]
      bg-white/[0.03]

      px-5 py-3

      text-[10px]
      uppercase
      tracking-[0.18em]
      text-white/60

      transition-all duration-500

      hover:border-white/20
      hover:bg-white/[0.06]
      hover:text-white
      lg:text-[15px]
    "
  >
    <span className="relative z-10">Instagram</span>

    <div
      className="
        absolute inset-0
        -translate-x-full

        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent

        transition-transform duration-1000
        group-hover:translate-x-full
        
      "
    />
  </a>

  <a
    href="https://www.linkedin.com/company/seabraz-ipr-corporate-law-firm/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative overflow-hidden

      rounded-full
      border border-white/[0.08]
      bg-white/[0.03]

      px-5 py-3

      text-[10px]
      uppercase
      tracking-[0.18em]
      text-white/60

      transition-all duration-500

      hover:border-white/20
      hover:bg-white/[0.06]
      hover:text-white
      lg:text-[15px]
    "
  >
    <span className="relative z-10">LinkedIn</span>

    <div
      className="
        absolute inset-0
        -translate-x-full

        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent

        transition-transform duration-1000
        group-hover:translate-x-full
      "
    />
  </a>
</div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              flex flex-col
              items-center
              justify-center

              rounded-[32px]
              border border-white/[0.06]
              bg-white/[0.02]

              px-6 py-10

              backdrop-blur-xl

              sm:px-10 sm:py-12
            "
          >
            {/* TITLE */}
            <div className="flex flex-col items-center">
              <span
                className="
                  mb-3

                  h-px
                  w-14

                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                "
              />

              <h4
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-white/40
                  lg:text-[18px]
                "
              >
                Practice Areas
              </h4>
            </div>

            {/* LINKS */}
            <div
              className="
                mt-10

                grid grid-cols-1
                gap-4

                w-full
                max-w-md
              "
            >
              {footerLinks[0].links.map((link, index) => (
                <motion.a
                  key={link}
                 href="#practice"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.5,
                  }}
                  className="
                    group

                    flex items-center
                    justify-between

                    rounded-2xl
                    border border-white/[0.06]
                    bg-white/[0.02]

                    px-5 py-4

                    transition-all duration-300

                    hover:border-white/15
                    hover:bg-white/[0.04]
                    hover:-translate-y-1
                    
                  "
                >
                  <span
                    className="
                      text-[13px]
                      font-medium
                      uppercase
                      tracking-[0.01em]
                      text-white/70

                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    {link}
                  </span>

                  <div
                    className="
                      flex h-8 w-8
                      items-center justify-center

                      rounded-full
                      border border-white/[0.08]

                      bg-white/[0.03]

                      transition-all duration-300

                      group-hover:border-white/20
                      group-hover:bg-white/[0.08]
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      className="
                        text-white/50
                        transition-all duration-300

                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:text-white
                      "
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            my-14
            h-px
            w-full
            bg-white/[0.06]
          "
        />

        {/* BOTTOM */}
        <div
          className="
            flex flex-col
            items-center
            justify-between
            gap-6

            text-center

            lg:flex-row
          "
        >
          {/* POLICY */}
          <div
            className="
              flex flex-wrap
              items-center
              justify-center
              gap-6
            "
          >
            <a
              href="/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[11px]
                text-white/35

                transition-colors duration-300
                hover:text-white/70
                lg:text-[15px]
              "
            >
              Privacy Policy
            </a>

            <a
              href="/disclaimer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[11px]
                text-white/35

                transition-colors duration-300
                hover:text-white/70
                lg:text-[15px]
              "
            >
              Disclaimer
            </a>
          </div>

          {/* COPYRIGHT */}
          <p
            className="
              text-[11px]
              leading-6
              text-white/30

              sm:text-[12px]
              lg:text-[15px]
            "
          >
            © {new Date().getFullYear()} Seabraz IPR & Corporate Law Firm.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}