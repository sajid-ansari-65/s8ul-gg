"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/players", label: "PLAYERS" },
  { href: "/vault", label: "CHAMPIONS VAULT" },
  { href: "/ewc", label: "EWC 2026" },
  { href: "/superfan", label: "SUPERFAN" },
  { href: "/merch", label: "MERCH" },
  { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 bg-[#0A0A0A]/93 backdrop-blur-xl border-b border-[#FFD700]/8 overflow-x-auto">
      <Link href="/" className="flex-shrink-0">
        <img
          src="https://s8ul.gg/img/logo.webp"
          alt="S8UL"
          className="h-8 w-auto"
        />
      </Link>

      <div className="flex gap-4 flex-shrink-0 mx-4">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="relative">
              <span className={`font-[var(--font-rajdhani)] text-[0.58rem] font-bold tracking-[0.1em] transition-colors whitespace-nowrap ${
                isActive ? "text-[#FFD700]" : "text-[#666] hover:text-[#999]"
              }`}>
                {link.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FFD700]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <a
        href="https://shop.s8ul.gg/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded-sm px-4 py-2 font-[var(--font-orbitron)] text-[0.55rem] font-black text-[#0A0A0A] tracking-wider hover:brightness-110 transition-all"
      >
        SHOP
      </a>
    </nav>
  );
}
