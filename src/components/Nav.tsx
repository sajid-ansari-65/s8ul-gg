"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/players", label: "PLAYERS" },
  { href: "/vault", label: "VAULT" },
  { href: "/ewc", label: "EWC 2026" },
  { href: "/superfan", label: "SUPERFAN" },
  { href: "/merch", label: "MERCH" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#FFD700]/10">
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://s8ul.gg/img/logo.webp"
            alt="S8UL"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative py-2">
                <span
                  className={`font-[var(--font-rajdhani)] text-sm font-bold tracking-[0.08em] transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#FFD700]"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#FFD700]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://shop.s8ul.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded px-5 py-2 font-[var(--font-orbitron)] text-xs font-black text-[#0A0A0A] tracking-wider hover:brightness-110 transition-all"
          >
            SHOP
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#FFD700] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#FFD700] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#FFD700] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 px-4 rounded font-[var(--font-rajdhani)] text-lg font-bold tracking-wider transition-colors ${
                      isActive
                        ? "text-[#FFD700] bg-[#FFD700]/8"
                        : "text-[#999] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://shop.s8ul.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded px-5 py-3 font-[var(--font-orbitron)] text-sm font-black text-[#0A0A0A] tracking-wider"
              >
                SHOP NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
