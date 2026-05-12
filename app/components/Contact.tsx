"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock3, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    label: "Headquarters",
    value: "chennai arumbakkam",
    icon: MapPin,
  },
  {
    label: "Direct Line",
    value: "+91 90031 38737",
    icon: Phone,
  },
  {
    label: "Email",
    value: "counsel@seabraz.com",
    icon: Mail,
  },
  {
    label: "Business Hours",
    value: "Monday — Friday\n9:00 AM — 6:00 PM IST",
    icon: Clock3,
  },
];

export default function Contact() {
  const headRef = useRef(null);
  const formRef = useRef(null);

  const headInView = useInView(headRef, {
    once: true,
    margin: "-100px",
  });

  const formInView = useInView(formRef, {
    once: true,
    margin: "-50px",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const inputClass = (field: string) =>
    `w-full bg-transparent border rounded-xl px-4 py-4 text-[14px] transition-all duration-300 outline-none
    ${
      focused === field
        ? "border-white/40 bg-white/[0.03] text-white"
        : "border-white/10 text-white/70 hover:border-white/20"
    }
    placeholder:text-white/20`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase text-white/50"
          >
            Contact Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl font-serif font-semibold tracking-tight text-white leading-tight"
          >
            Request a Consultation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/55 leading-relaxed text-[15px] md:text-[16px]"
          >
            Reach out to discuss how our expertise can support your legal and
            corporate objectives. Every engagement begins with discretion,
            precision, and strategic clarity.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div
          ref={formRef}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start max-w-7xl mx-auto"
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-[32px] p-8 md:p-12 shadow-2xl"
          >
            <div className="absolute inset-0 rounded-[32px] border border-white/[0.03]" />

            <form
              className="relative z-10 space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                {["Full Name", "Email Address"].map((label) => (
                  <div key={label}>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-white/45 mb-3">
                      {label}
                    </label>

                    <input
                      type={label === "Email Address" ? "email" : "text"}
                      placeholder={
                        label === "Full Name" ? "Madesh" : "madesh@company.com"
                      }
                      onFocus={() => setFocused(label)}
                      onBlur={() => setFocused(null)}
                      className={inputClass(label)}
                    />
                  </div>
                ))}
              </div>

              {/* Phone + Company */}
              <div className="grid sm:grid-cols-2 gap-6">
                {["Phone Number", "Company"].map((label) => (
                  <div key={label}>
                    <label className="block text-[11px] uppercase tracking-[0.15em] text-white/45 mb-3">
                      {label}
                    </label>

                    <input
                      type={label === "Phone Number" ? "tel" : "text"}
                      placeholder={
                        label === "Phone Number"
                          ? "+91 90031 38737"
                          : "Your Organization"
                      }
                      onFocus={() => setFocused(label)}
                      onBlur={() => setFocused(null)}
                      className={inputClass(label)}
                    />
                  </div>
                ))}
              </div>

              {/* Select */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-white/45 mb-3">
                  Area of Interest
                </label>

                <select
                  onFocus={() => setFocused("select")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass(
                    "select",
                  )} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-black">
                    Select an area
                  </option>

                  <option value="ip" className="bg-black">
                    Intellectual Property
                  </option>

                  <option value="corporate" className="bg-black">
                    Corporate Law
                  </option>

                  <option value="ma" className="bg-black">
                    Mergers & Acquisitions
                  </option>

                  <option value="trade" className="bg-black">
                    International Trade
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] text-white/45 mb-3">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Briefly describe your legal matter..."
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("msg")} resize-none`}
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-neutral-200"
              >
                Submit Inquiry
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={index}
                  className="group border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] rounded-3xl p-7 transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] border border-white/10">
                      <Icon size={20} className="text-white/80" />
                    </div>

                    <div>
                      <h3 className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
                        {info.label}
                      </h3>

                      <p className="text-[15px] leading-relaxed text-white/80 whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
