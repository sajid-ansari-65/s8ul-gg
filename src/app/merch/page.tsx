"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import { MERCH_ITEMS } from "@/lib/constants";

export default function MerchPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-[1140px] mx-auto px-5 py-20">
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#B8960A] tracking-[0.3em] uppercase mb-1.5">
          LIMITED EDITION
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-8">
          CHAMPIONS MERCH DROP
        </h1>

        {/* Currency Toggle */}
        <div className="flex gap-2 mb-8">
          {(["INR", "USD"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-sm px-4 py-1.5 font-[var(--font-orbitron)] text-[0.6rem] font-bold tracking-wider transition-all ${
                currency === c
                  ? "bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700]"
                  : "bg-[#141414] border border-[#1a1a1a] text-[#666] hover:text-[#999]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MERCH_ITEMS.map((item, i) => {
            const isSoldOut = item.tag === "SOLD OUT";
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-sm bg-[#141414] border border-[#1a1a1a] p-5 hover:border-[#FFD700]/20 transition-all group"
              >
                {/* Tag */}
                <span
                  className="absolute top-2 right-2 px-2 py-0.5 rounded-sm font-[var(--font-rajdhani)] text-[0.5rem] text-white font-bold tracking-wider"
                  style={{ background: item.tagColor }}
                >
                  {item.tag}
                </span>

                {/* Emoji */}
                <div className="text-4xl text-center mb-3 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>

                {/* Name */}
                <div className="font-[var(--font-orbitron)] text-[0.65rem] text-[#ccc] font-bold leading-tight mb-1">
                  {item.name}
                </div>

                {/* Price */}
                <div className="font-[var(--font-orbitron)] text-[0.95rem] text-[#FFD700] font-black">
                  {currency === "INR" ? item.priceINR : item.priceUSD}
                </div>

                {/* CTA */}
                {!isSoldOut && (
                  <button className="mt-3 w-full bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded-sm py-2 font-[var(--font-orbitron)] text-[0.58rem] font-black text-[#0A0A0A] tracking-wider hover:brightness-110 transition-all">
                    {item.tag === "PRE-ORDER" ? "PRE-ORDER" : "ADD TO CART"}
                  </button>
                )}
                {isSoldOut && (
                  <button
                    disabled
                    className="mt-3 w-full bg-[#333] rounded-sm py-2 font-[var(--font-orbitron)] text-[0.58rem] font-bold text-[#666] tracking-wider cursor-not-allowed"
                  >
                    SOLD OUT
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
