"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // 1. Setup state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Handle form submission to WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your actual WhatsApp number (include country code, omit '+' or '00')
    const phoneNumber = "94771234567"; // e.g., 94 for Sri Lanka + mobile number

    // Format the message
    const textMessage = `Hello Gaya Walker,%0A%0A*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="relative z-30 mt-20 md:mt-32 w-full overflow-hidden rounded-t-[28px] bg-[#050505] pt-16 text-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)] sm:rounded-t-[40px] sm:pt-20 md:rounded-t-[60px] md:pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 items-start gap-12 border-b border-white/10 pb-14 sm:gap-14 sm:pb-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-20">

          {/* LEFT: IMAGE & CONTACT DETAILS */}
          <div className="flex min-w-0 flex-col gap-8 sm:gap-10">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="relative mt-0 h-[300px] w-full overflow-hidden rounded-[24px] border border-white/10 shadow-2xl sm:h-[420px] sm:rounded-[28px] md:h-[500px] lg:-mt-40 lg:h-[550px] lg:rounded-[32px]"
            >
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200&auto=format&fit=crop"
                alt="Gaya Walker travel experience"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </motion.div>

            {/* CONTACT DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="z-20 flex flex-col gap-6 text-gray-300 sm:flex-row sm:flex-wrap sm:gap-8"
            >
              {/* PHONE */}
              <a
                href="tel:+94771234567"
                className="group flex min-w-0 items-center gap-4 transition-colors hover:text-[#0BB671]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-[#0BB671]/50 sm:h-12 sm:w-12">
                  <Phone size={18} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                    Phone
                  </p>
                  <p className="break-words text-sm font-medium tracking-wide sm:text-base">
                    +94 77 123 4567
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@gayawalker.com"
                className="group flex min-w-0 items-center gap-4 transition-colors hover:text-[#0BB671]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-[#0BB671]/50 sm:h-12 sm:w-12">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                    Email
                  </p>
                  <p className="break-all text-sm font-medium tracking-wide sm:text-base">
                    hello@gayawalker.com
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="flex min-w-0 flex-col justify-center lg:py-6"
          >
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#0BB671] sm:text-xs">
              / Connect /
            </span>

            <h2 className="mb-8 text-3xl font-black leading-tight tracking-tight sm:mb-10 sm:text-4xl md:text-5xl">
              Let's craft your
              <br />
              next story.
            </h2>

            {/* Changed form to use onSubmit handler */}
            <form
              onSubmit={handleWhatsAppSubmit}
              className="flex flex-col gap-7 sm:gap-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  aria-label="Your Name"
                  autoComplete="name"
                  required
                  className="w-full min-w-0 rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#0BB671]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  aria-label="Email Address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#0BB671]"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell me about your project..."
                aria-label="Your Message"
                required
                className="w-full resize-y rounded-none border-b border-white/20 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#0BB671]"
              />

              <button
                type="submit"
                className="group mt-1 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition-all duration-300 hover:bg-[#0BB671] hover:text-white sm:w-fit sm:px-10"
              >
                Send via WhatsApp

                <Send
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: QUOTE & SOCIALS */}
        <div className="relative z-20 flex flex-col items-start justify-between gap-10 py-12 sm:gap-12 sm:py-14 md:flex-row md:items-center md:py-16">

          {/* QUOTE */}
          <div className="flex max-w-xl items-start gap-3 sm:gap-5">
            <span className="mt-1 shrink-0 font-serif text-5xl leading-none text-[#0BB671] sm:text-6xl">
              “
            </span>

            <p className="text-sm font-medium leading-7 text-gray-400 sm:text-base sm:leading-relaxed md:text-lg">
              Our business is built off of close relationships and we are glad
              that we are able to share positive travel experiences with our
              clients.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex w-full flex-col gap-4 md:w-auto">
            <h4 className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Follow Journey
            </h4>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#0BB671] hover:bg-[#0BB671] hover:text-black sm:h-12 sm:w-12"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.368 2.176 8.747 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#0BB671] hover:bg-[#0BB671] hover:text-black sm:h-12 sm:w-12"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#0BB671] hover:bg-[#0BB671] hover:text-black sm:h-12 sm:w-12"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND BRAND TEXT */}
      <div className="relative flex w-full flex-col items-center justify-end overflow-hidden pb-6 pt-8 sm:pt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none w-full select-none whitespace-nowrap text-center text-[13vw] font-black leading-none tracking-tighter text-white/[0.04] sm:text-[14vw]"
        >
          GAYA WALKER
        </motion.h1>

        {/* COPYRIGHT */}
        <div className="relative z-20 mt-8 px-4 text-center text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500 sm:absolute sm:bottom-6 sm:mt-0 sm:text-[10px] sm:tracking-[0.2em]">
          © {new Date().getFullYear()} Gaya Walker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}