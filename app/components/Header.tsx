"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../public/seabraz.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice", href: "#practice" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed left-1/2 top-4 z-50
          w-[95%] max-w-7xl
          -translate-x-1/2
          rounded-2xl
          transition-all duration-500

          ${
            scrolled
              ? "border border-white/10 bg-black/65 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              : "border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl"
          }
        `}
      >
        <div className="relative">
          {/* TOP GRADIENT LINE */}
          <div
            className="
              absolute left-0 right-0 top-0 h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          <nav
            className="
              relative flex h-20 items-center justify-between
              overflow-hidden px-6
              lg:px-10
            "
          >
            {/* BACKGROUND GLOW */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]
              "
            />

            {/* LOGO */}
            <a
              href="#home"
              className="
                group relative z-10
                flex items-center gap-4
              "
            >
              {/* LOGO ICON */}
              <div
                className="
                  relative flex h-11 w-11
                  items-center justify-center
                  overflow-hidden
                  transition-all duration-500
                "
              >
                <Image
                  src={logo}
                  alt="Seabraz Logo"
                  width={32}
                  height={32}
                  className="
                    relative z-10
                    object-contain
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* BRAND */}
              <div className="flex flex-col">
                <span
                  className="
                    font-[family-name:var(--font-space)]
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-white
                  "
                >
                  Seabraz
                </span>

                <span
                  className="
                    mt-1
                    font-[family-name:var(--font-space)]
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                  "
                >
                  IPR & Corporate Law
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div
              className="
                relative z-10 hidden
                items-center gap-10
                lg:flex
              "
            >
              {/* NAV LINKS */}
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                        group relative
                        font-[family-name:var(--font-space)]
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-white/55
                        transition-all duration-500
                        hover:text-white
                      "
                    >
                      {link.label}

                      <span
                        className="
                          absolute -bottom-2 left-1/2
                          h-px w-0
                          bg-white
                          transition-all duration-500
                          group-hover:left-0
                          group-hover:w-full
                        "
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <a
                href="#contact"
                className="
                  group relative overflow-hidden
                  border border-white/15
                  bg-white/[0.02]
                  px-6 py-3
                  font-[family-name:var(--font-space)]
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  text-white
                  transition-all duration-500
                  hover:border-white/40
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                "
              >
                {/* SLIDING GLOW */}
                <div
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                    opacity-10
                    transition-transform duration-1000
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">Consultation</span>
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                relative z-10
                flex h-10 w-10
                items-center justify-center
                lg:hidden
              "
            >
              <div className="flex flex-col gap-[6px]">
                <span
                  className={`
                    block h-px w-6 bg-white
                    transition-all duration-500
                    ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    block h-px w-6 bg-white
                    transition-all duration-500
                    ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}
                  `}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0 z-40
              flex items-center justify-center
              bg-black/95
              backdrop-blur-3xl
            "
          >
            {/* BACKGROUND GLOW */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
              "
            />

            {/* VERTICAL LINES */}
            <div className="absolute inset-0 overflow-hidden">
              {[20, 40, 60, 80].map((left, i) => (
                <div
                  key={i}
                  className="
                    absolute top-0 bottom-0
                    w-px bg-white/[0.04]
                  "
                  style={{ left: `${left}%` }}
                />
              ))}
            </div>

            {/* MOBILE NAV */}
            <nav
              className="
                relative flex
                flex-col items-center gap-10
              "
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                  }}
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-3xl
                    uppercase
                    tracking-[0.18em]
                    text-white/70
                    transition-colors duration-300
                    hover:text-white
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* MOBILE CTA */}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="
                  mt-6
                  border border-white/20
                  bg-white/[0.03]
                  px-8 py-4
                  font-[family-name:var(--font-space)]
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  transition-all duration-500
                  hover:bg-white
                  hover:text-black
                "
              >
                Schedule Consultation
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
