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
        fixed top-4 left-1/2 -translate-x-1/2
        z-50 w-[95%] max-w-7xl
        rounded-2xl
        transition-all duration-500
        ${
          scrolled
            ? "bg-black/65 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
            : "bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]"
        }
        `}
      >
        <div className="relative">
          {/* Top Gradient Line */}
          <div
            className="
            absolute top-0 left-0 right-0 h-px bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            "
          />

          <nav className="relative h-20 flex items-center justify-between px-6 lg:px-10 overflow-hidden">
            {/* Background Glow */}
            <div
              className="
              absolute inset-0
              bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]
              "
            />

            {/* LOGO */}
            <a
              href="#home"
              className="relative z-10 group flex items-center gap-4"
            >
              {/* Logo Box */}
              {/* Logo Box */}
              <div
                className="
  relative w-11 h-11
  border border-white/10
  bg-white/[0.03]
  flex items-center justify-center
  overflow-hidden
  transition-all duration-500
  group-hover:border-white/40
  group-hover:rotate-6
  "
              >
                {/* Hover Glow */}
                <div
                  className="
    absolute inset-0
    bg-gradient-to-br
    from-white/[0.12]
    to-transparent
    opacity-0
    group-hover:opacity-100
    transition-opacity duration-500
    "
                />

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

              {/* Brand */}
              <div className="flex flex-col">
                <span
                  className="
                  text-[13px]
                  uppercase
                  tracking-[0.35em]
                  font-semibold
                  text-white
                  "
                >
                  Seabraz
                </span>

                <span
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                  mt-1
                  "
                >
                  IPR & Corporate Law
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10 relative z-10">
              {/* Nav Links */}
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="
                      relative
                      text-[11px]
                      uppercase
                      tracking-[0.25em]
                      text-white/55
                      hover:text-white
                      transition-all duration-500
                      group
                      "
                    >
                      {link.label}

                      <span
                        className="
                        absolute
                        -bottom-2
                        left-1/2
                        h-px
                        w-0
                        bg-white
                        transition-all duration-500
                        group-hover:w-full
                        group-hover:left-0
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
                group
                relative
                overflow-hidden
                border border-white/15
                bg-white/[0.02]
                px-6 py-3
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-white
                transition-all duration-500
                hover:border-white/40
                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                "
              >
                {/* Sliding Glow */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000
                  opacity-10
                  "
                />

                <span className="relative z-10">Consultation</span>
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
              lg:hidden
              relative z-10
              w-10 h-10
              flex items-center justify-center
              "
            >
              <div className="flex flex-col gap-[6px]">
                <span
                  className={`
                  block h-px w-6 bg-white transition-all duration-500
                  ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}
                  `}
                />

                <span
                  className={`
                  block h-px w-6 bg-white transition-all duration-500
                  ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}
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
            bg-black/95
            backdrop-blur-3xl
            flex items-center justify-center
            "
          >
            {/* Background Glow */}
            <div
              className="
              absolute inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
              "
            />

            {/* Vertical Lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[20, 40, 60, 80].map((left, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-white/[0.04]"
                  style={{ left: `${left}%` }}
                />
              ))}
            </div>

            {/* MENU */}
            <nav className="relative flex flex-col items-center gap-10">
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
                  text-3xl
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                  hover:text-white
                  transition-colors duration-300
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
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
                text-[11px]
                uppercase
                tracking-[0.25em]
                hover:bg-white
                hover:text-black
                transition-all duration-500
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
