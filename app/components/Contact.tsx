"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    label: "Headquarters",
    value: "Maduravoyal, Chennai Tamil Nadu, India",
    icon: MapPin,
  },
  {
    label: "Direct Line",
    value: "+91 94456 62392\n+91 93604 43085",
    icon: Phone,
  },
  {
    label: "Email",
    value: "info@seabrazlegal.com",
    icon: Mail,
  },
  {
    label: "Business Hours",
    value: "Monday — Saturday\n9:00 AM — 7:00 PM IST",
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

  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    title: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const inputClass = (field: string) =>
    `w-full rounded-2xl border bg-transparent px-4 py-4 text-[14px] outline-none transition-all duration-300
    ${
      focused === field
        ? "border-white/40 bg-white/[0.03] text-white"
        : "border-white/10 text-white/70 hover:border-white/20"
    }
    placeholder:text-white/20`;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      "service_iuqycll",
      "template_0a7jtjp",
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        interest: formData.interest,
        message: formData.message,
      },
      "rAg0ZXqYpgkmtlNWh",
    );

    setPopup({
      show: true,
      type: "success",
      title: "Inquiry Submitted",
      message:
        "Your consultation request has been successfully submitted. Our legal team will contact you shortly.",
    });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    setPopup({
      show: true,
      type: "error",
      title: "Submission Failed",
      message:
        "We were unable to send your inquiry at the moment. Please try again shortly.",
    });
  }

  setLoading(false);
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-0
            h-[500px] w-[500px]
            -translate-x-1/2

            rounded-full
            bg-white/[0.03]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADING */}
        <div
          ref={headRef}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2

              rounded-full
              border border-white/10
              bg-white/[0.03]

              px-4 py-2

              text-[11px]
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >
            Contact Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              mt-8

              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-white

              sm:text-5xl
              md:text-6xl
            "
          >
            Request a Consultation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mx-auto mt-6
              max-w-2xl

              text-[15px]
              leading-8
              text-white/55

              text-justify
              sm:text-center

              [text-align-last:center]
            "
          >
            Connect with Seabraz IPR & Corporate Law to discuss your
            legal, intellectual property, corporate, or compliance
            requirements with confidence and clarity.
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div
          ref={formRef}
          className="
            mx-auto
            grid
            max-w-7xl
            items-start
            gap-10

            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="
              relative

              rounded-[32px]
              border border-white/10
              bg-white/[0.03]

              p-8

              shadow-2xl
              backdrop-blur-xl

              md:p-12
            "
          >
            <div className="absolute inset-0 rounded-[32px] border border-white/[0.03]" />

            <form
              className="relative z-10 space-y-8"
              onSubmit={sendEmail}
            >
              {/* NAME + EMAIL */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-[11px] uppercase tracking-[0.15em] text-white/45">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Seabraz"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("name")}
                    required
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[11px] uppercase tracking-[0.15em] text-white/45">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="info@company.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("email")}
                    required
                  />
                </div>
              </div>

              {/* PHONE + COMPANY */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-[11px] uppercase tracking-[0.15em] text-white/45">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 90000 00000"
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("phone")}
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[11px] uppercase tracking-[0.15em] text-white/45">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Organization"
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("company")}
                  />
                </div>
              </div>

              {/* SELECT */}
              <div>
                <label className="mb-3 block text-[11px] uppercase tracking-[0.15em] text-white/45">
                  Area of Interest
                </label>

                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  onFocus={() => setFocused("interest")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass(
                    "interest",
                  )} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-black">
                    Select an area
                  </option>

                  <option
                    value="Intellectual Property"
                    className="bg-black"
                  >
                    Intellectual Property
                  </option>

                  <option value="Corporate Law" className="bg-black">
                    Corporate Law
                  </option>

                  <option
                    value="Mergers & Acquisitions"
                    className="bg-black"
                  >
                    Mergers & Acquisitions
                  </option>

                  <option
                    value="International Trade"
                    className="bg-black"
                  >
                    International Trade
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-[11px] uppercase tracking-[0.15em] text-white/45">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your legal matter..."
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass("message")} resize-none`}
                  required
                />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3

                  rounded-2xl
                  bg-white

                  px-8 py-4

                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-black

                  transition-all duration-300
                  hover:bg-neutral-200
                "
              >
                {loading ? "Sending..." : "Submit Inquiry"}

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={index}
                  className="
                    group

                    rounded-3xl
                    border border-white/10
                    bg-white/[0.02]

                    p-7

                    transition-all duration-500
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center

                        rounded-2xl
                        border border-white/10
                        bg-white/[0.06]
                      "
                    >
                      <Icon size={20} className="text-white/80" />
                    </div>

                    <div>
                      <h3
                        className="
                          mb-3

                          text-[11px]
                          uppercase
                          tracking-[0.18em]
                          text-white/40
                        "
                      >
                        {info.label}
                      </h3>

                      <p
                        className="
                          whitespace-pre-line

                          text-[15px]
                          leading-relaxed
                          text-white/80
                        "
                      >
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

      {/* POPUP */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[300]

              flex items-center justify-center

              bg-black/80
              backdrop-blur-xl

              px-6
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full max-w-md

                overflow-hidden
                rounded-[32px]

                border border-white/10
                bg-[#0a0a0a]

                p-8

                shadow-[0_20px_80px_rgba(0,0,0,0.7)]
              "
            >
              {/* TOP LIGHT */}
              <div
                className="
                  absolute left-0 top-0
                  h-px w-full

                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute inset-0

                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]
                "
              />

              <div className="relative z-10 text-center">
                {/* ICON */}
                <div
                  className="
                    mx-auto
                    flex h-16 w-16
                    items-center justify-center

                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                  "
                >
                  <div
                    className={`
                      h-3 w-3 rounded-full
                      ${
                        popup.type === "success"
                          ? "bg-white"
                          : "bg-white/40"
                      }
                    `}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-6

                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  {popup.title}
                </h3>

                {/* MESSAGE */}
                <p
                  className="
                    mx-auto mt-4
                    max-w-sm

                    text-[15px]
                    leading-7
                    text-white/60
                  "
                >
                  {popup.message}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setPopup({
                      show: false,
                      type: "",
                      title: "",
                      message: "",
                    })
                  }
                  className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center

                    rounded-2xl
                    border border-white/10
                    bg-white

                    px-8 py-4

                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]

                    text-black

                    transition-all duration-300
                    hover:scale-[1.02]
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}