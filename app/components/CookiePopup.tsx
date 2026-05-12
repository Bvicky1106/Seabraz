"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimer-accepted");

    if (!accepted) {
      setTimeout(() => {
        setVisible(true);
      }, 800);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimer-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[200]
            flex items-center justify-center
            bg-black/80
            backdrop-blur-xl
            px-4
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              w-full max-w-4xl
              overflow-hidden
              rounded-3xl

              border border-white/10
              bg-[#0b0b0b]

              shadow-[0_20px_80px_rgba(0,0,0,0.65)]
            "
          >
            {/* TOP LIGHT */}
            <div
              className="
                absolute left-0 top-0 h-px w-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
              "
            />

            {/* BACKGROUND GLOW */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)]
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative z-10

                max-h-[90vh]
                overflow-y-auto

                px-5 py-6

                sm:px-8 sm:py-8

                lg:px-10 lg:py-10
              "
            >
              {/* HEADING */}
              <div className="border-b border-white/10 pb-5">
                <h2
                  className="
                    font-serif
                    text-2xl
                    text-white

                    sm:text-3xl
                  "
                >
                  Disclaimer
                </h2>

                <p
                  className="
                    mt-3
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  Seabraz IPR & Corporate Law
                </p>
              </div>

              {/* BODY */}
              <div
                className="
                  mt-6
                  space-y-5

                  text-sm
                  leading-7
                  text-white/60

                  sm:text-[15px]
                  sm:leading-8
                "
              >
                <p>
                  As per the rules of the Bar Council of India, advocates and
                  law firms are not permitted to solicit work or advertise
                  professional services. By accessing or using this website of
                  SEABRAZ IPR & Corporate Law, you acknowledge and confirm that
                  you are seeking information relating to the Firm voluntarily
                  for your own knowledge and use, and that there has been no
                  form of solicitation, advertisement, personal communication,
                  invitation, inducement, or encouragement by the Firm or any of
                  its members to solicit work through this website.
                </p>

                <p>
                  The information made available on this website is provided
                  solely for general informational purposes and should not be
                  construed as legal advice, legal opinion, advertisement, or
                  professional solicitation in any manner whatsoever. Any
                  information, materials, or content accessed, downloaded, or
                  relied upon from this website is entirely at the user’s own
                  discretion and risk.
                </p>

                <p>
                  Transmission, receipt, or use of this website, including
                  communication through contact forms, emails, telephone calls,
                  or other modes of interaction, does not create an
                  advocate-client relationship between the user and Seabraz IPR
                  & Corporate Law unless specifically agreed through formal
                  professional engagement.
                </p>

                <p>
                  The Firm makes reasonable efforts to ensure that the
                  information provided on this website is accurate and up to
                  date; however, no warranties or representations are made
                  regarding the completeness, reliability, or accuracy of the
                  content. Users are advised to seek independent professional
                  legal advice before acting upon any information available on
                  this website.
                </p>

                <p>
                  By clicking “ACCEPT” or continuing to access this website, you
                  acknowledge that you have read, understood, and agreed to this
                  Disclaimer.
                </p>
              </div>

              {/* BUTTON */}
              <div
                className="
                  mt-8
                  flex justify-center

                  sm:justify-end
                "
              >
                <button
                  onClick={handleAccept}
                  className="
                    group
                    relative
                    overflow-hidden

                    w-full sm:w-auto

                    border border-white/15
                    bg-white

                    px-8 py-4

                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]

                    text-black

                    transition-all duration-500
                    hover:scale-[1.02]
                  "
                >
                  <span className="relative z-10">Accept</span>

                  {/* HOVER SWEEP */}
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
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
