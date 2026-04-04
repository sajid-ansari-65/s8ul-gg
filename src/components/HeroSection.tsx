"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 90]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* BG gradient with parallax */}
      <motion.div
        className="absolute inset-0 bg-hero-gradient"
        style={{ y: bgY }}
      />

      {/* CRT overlay */}
      <div className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)",
        }}
      />

      {/* HUD corners */}
      <div className="hud-corner hud-corner--tl" />
      <div className="hud-corner hud-corner--tr" />
      <div className="hud-corner hud-corner--bl" />
      <div className="hud-corner hud-corner--br" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-16 max-w-4xl mx-auto">
        {/* Champions badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#FFD700]/8 border border-[#FFD700]/20 rounded">
            <span className="text-xl">🏆</span>
            <span className="font-[var(--font-orbitron)] text-xs text-[#FFD700] font-bold tracking-[0.18em]">
              BGIS 2026 CHAMPIONS · CHENNAI
            </span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-8"
        >
          <h1
            className="glitch shimmer-text font-[var(--font-orbitron)] text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tight"
            data-text="S8UL"
          >
            S8UL
          </h1>
        </motion.div>

        <motion.p
          custom={2}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeUp}
          className="font-[var(--font-rajdhani)] text-[clamp(1rem,3vw,1.6rem)] font-semibold text-[#777] tracking-[0.35em] mt-2"
        >
          GLOBAL DIGITAL HQ
        </motion.p>

        {/* Countdown */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-10"
        >
          <CountdownTimer />
          <p className="font-[var(--font-rajdhani)] text-sm text-[#555] tracking-[0.15em] uppercase mt-3">
            COUNTDOWN TO EWC RIYADH 2026
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="/ewc"
            className="bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded px-10 py-4 font-[var(--font-orbitron)] text-sm font-black text-[#0A0A0A] tracking-wider shadow-[0_4px_24px_rgba(255,215,0,0.2)] hover:shadow-[0_6px_32px_rgba(255,215,0,0.3)] hover:brightness-110 transition-all"
          >
            ROAD TO RIYADH →
          </Link>
          <Link
            href="/vault"
            className="border border-[#FFD700]/30 rounded px-10 py-4 font-[var(--font-orbitron)] text-sm font-bold text-[#FFD700] tracking-wider hover:bg-[#FFD700]/5 hover:border-[#FFD700]/50 transition-all"
          >
            CHAMPIONS VAULT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
