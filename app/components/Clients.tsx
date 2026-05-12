"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Reliance Industries", "Tata Group", "Infosys", "Wipro Technologies",
  "Mahindra & Mahindra", "Adani Enterprises", "Larsen & Toubro", "Bharti Airtel",
];

const testimonials = [
  {
    quote: "Seabraz's IPR team secured our global patent portfolio across 14 jurisdictions with remarkable efficiency and precision. Their strategic approach saved us millions in potential litigation.",
    name: "Rajiv Mehta",
    title: "Chief Legal Officer, TechVentures India",
  },
  {
    quote: "Their corporate restructuring expertise was pivotal during our $2B acquisition. Absolutely world-class counsel that navigates complex regulatory frameworks seamlessly.",
    name: "Ananya Sharma",
    title: "Managing Director, GlobalCorp Partners",
  },
  {
    quote: "No other firm matches the depth of knowledge and strategic thinking that Seabraz brings to international trade disputes. They are true partners in our growth.",
    name: "David Chen",
    title: "VP Legal Affairs, Pacific Trade Alliance",
  },
];

export default function Clients() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });
  const logoRef = useRef(null);
  const logoInView = useInView(logoRef, { once: true, margin: "-50px" });
  const testRef = useRef(null);
  const testInView = useInView(testRef, { once: true, margin: "-50px" });

  return (
    <section id="clients" className="relative section-y bg-background w-full text-center-all">
      <div className="section-divider" />
      <div className="relative container pt-24 md:pt-32">
        
        {/* Heading */}
        <div ref={headRef} className="mb-16 md:mb-24 flex flex-col items-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6 border border-white/10 px-3 py-1 rounded-full">Trusted By Leaders</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-white/90">Our Esteemed Clients.</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl mx-auto text-white/60 font-light leading-relaxed text-[15px]">
            We are privileged to serve industry leaders and visionary enterprises across sectors and continents, building relationships founded on trust and relentless legal precision.
          </motion.p>
        </div>

        {/* Client logos */}
        <div ref={logoRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-32 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.div 
              key={client} 
              initial={{ opacity: 0, y: 20 }} 
              animate={logoInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: i * 0.05, duration: 0.5 }} 
              whileHover={{ scale: 1.02 }} 
              className="group flex items-center justify-center h-24 w-full max-w-[200px] border border-white/[0.05] bg-card rounded-lg hover:bg-card-hover hover:border-white/[0.1] transition-all duration-500 cursor-default"
            >
              <span className="text-[12px] font-medium tracking-[0.05em] text-white/30 group-hover:text-white/70 transition-colors duration-500">{client}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testRef} className="grid md:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name} 
              initial={{ opacity: 0, y: 30 }} 
              animate={testInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ delay: i * 0.15, duration: 0.8, type: "spring" }} 
              whileHover={{ y: -4 }} 
              className="group p-8 md:p-10 border border-white/[0.05] bg-card hover:bg-card-hover hover:border-white/[0.1] transition-all duration-500 rounded-2xl flex flex-col justify-between max-w-sm w-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-serif text-white/20 mb-4 h-8 leading-none">&ldquo;</div>
                <p className="text-[14px] text-white/60 leading-relaxed font-light mb-10 group-hover:text-white/80 transition-colors duration-500">{t.quote}</p>
              </div>
              <div className="flex flex-col items-center gap-3 pt-6 border-t border-white/[0.05]">
                <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-sm font-semibold text-white/70">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white/90">{t.name}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
