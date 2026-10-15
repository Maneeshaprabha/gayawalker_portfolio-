
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Search, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navbar background changes when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "HOME", target: "home" },
    { name: "ABOUT", target: "about" },
    { name: "SERVICES", target: "services" },
    { name: "GALLERY", target: "gallery" },
    { name: "PRICING", target: "pricing" },
  ];

const handleScrollClick = (e, targetId) => {
  e.preventDefault();
  setIsMobileMenuOpen(false);

  // Navigate to the home page if currently on another route
  if (window.location.pathname !== "/") {
    window.location.href = `/#${targetId}`;
    return;
  }

  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.warn(`Section not found: #${targetId}`);
      return;
    }

    const navbarOffset = window.innerWidth < 768 ? 85 : 110;

    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${targetId}`);
  };

  scrollToSection();
};


  return (
    <>
      {/* NAVBAR */}
     
<header
  className={`fixed inset-x-0 z-[9999] w-full px-3 sm:px-4 md:px-12 transition-[top] duration-300 ease-in-out ${
    isScrolled
      ? "top-2 sm:top-3 md:top-4"
      : "top-[100px] sm:top-[105px] md:top-[85px]"
  }`}
>

        <div
       
className={`mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-6 md:px-8 md:py-3 transition-all duration-500 ${
  isScrolled
    ? "bg-black/95 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
    : "bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl"
}`}

        >
          {/* MENU ICON + TEXT LOGO */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-5 md:gap-6">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-[#0BB671] active:scale-95"
            >
              <LayoutGrid size={22} strokeWidth={1.6} />
            </button>

            <Link
              href="/#home"
              onClick={(e) => handleScrollClick(e, "home")}
              className="whitespace-nowrap text-base font-black tracking-[0.08em] text-white transition-colors hover:text-[#0BB671] sm:text-xl md:text-2xl md:tracking-[0.12em]"
            >
              GAYA<span className="text-[#0BB671]">WALKER</span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-9"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                onClick={(e) => handleScrollClick(e, link.target)}
                className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.1em] text-gray-300 transition-colors hover:text-[#0BB671] xl:text-[13px]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* SEARCH + CONTACT */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-6">
            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                const searchSection = document.getElementById("gallery");
                if (searchSection) {
                  searchSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-[#0BB671]"
            >
              <Search size={19} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={(e) => handleScrollClick(e, "contact")}
              className="hidden whitespace-nowrap rounded-full bg-[#0BB671] px-5 py-2.5 text-xs font-bold tracking-wide text-black shadow-[0_0_20px_rgba(11,182,113,0.15)] transition-all hover:scale-105 hover:bg-emerald-400 md:block lg:px-7 lg:text-sm"
            >
              Get in touch
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[10000] cursor-default bg-black/75 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
              }}
              className="fixed inset-y-0 left-0 z-[10001] flex w-[88%] max-w-[380px] flex-col overflow-x-hidden overflow-y-auto overscroll-contain border-r border-white/10 bg-[#111111] text-white shadow-2xl"
            >
              {/* Decorative background */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full bg-gradient-to-tr from-[#0BB671]/15 via-transparent to-[#041E15]/30" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#0BB671]/15 blur-[80px]" />

              <div className="relative z-10 flex min-h-full flex-col p-6 sm:p-8">
                {/* Drawer Header */}
                <div className="mb-10 flex items-center justify-between gap-3">
                  <Link
                    href="/#home"
                    onClick={(e) => handleScrollClick(e, "home")}
                    className="text-lg font-black tracking-[0.1em] sm:text-xl"
                  >
                    GAYA<span className="text-[#0BB671]">WALKER</span>
                  </Link>

                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav aria-label="Mobile navigation" className="mb-10">
                  <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                    Navigation
                  </h4>

                  <div className="flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={`#${link.target}`}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.05,
                        }}
                        onClick={(e) =>
                          handleScrollClick(e, link.target)
                        }
                        className="group flex items-center justify-between border-b border-white/[0.07] pb-3 text-2xl font-black uppercase tracking-tight text-gray-200 transition-colors hover:text-[#0BB671] sm:text-3xl"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          size={20}
                          className="text-gray-600 transition-colors group-hover:text-[#0BB671]"
                        />
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Contact Information */}
                <div className="mt-auto border-t border-white/10 pt-7">
                  <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                    Get in touch
                  </h4>

                  <div className="space-y-4 text-sm font-medium leading-relaxed">
                    <div>
                      <p className="text-white">Colombo, Sri Lanka</p>
                      <p className="text-gray-500">Global Travel</p>
                    </div>

                    <a
                      href="tel:+94771234567"
                      className="block text-gray-300 transition-colors hover:text-[#0BB671]"
                    >
                      +94 77 123 4567
                    </a>

                    <a
                      href="mailto:hello@gayawalker.com"
                      className="block break-all text-gray-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#0BB671]"
                    >
                      hello@gayawalker.com
                    </a>
                  </div>

                  {/* Contact Button */}
                  <button
                    type="button"
                    onClick={(e) => handleScrollClick(e, "contact")}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#0BB671] px-6 py-3.5 text-sm font-bold text-black transition-colors hover:bg-emerald-400"
                  >
                    Get in touch
                    <ArrowUpRight size={17} />
                  </button>

                  <p className="mt-6 text-center text-[10px] tracking-widest text-gray-600">
                    © {new Date().getFullYear()} GAYAWALKER
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
