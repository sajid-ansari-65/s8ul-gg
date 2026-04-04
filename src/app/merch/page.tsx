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

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        <p className="font-[var(--font-rajdhani)] text-sm text-[#B8960A] tracking-[0.25em] uppercase mb-2">
          LIMITED EDITION
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-10">
          CHAMPIONS MERCH DROP
        </h1>

        {/* Currency Toggle */}
        <div className="flex gap-3 mb-10">
          {(["INR", "USD"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-lg px-5 py-2 font-[var(--font-orbitron)] text-xs font-bold tracking-wider transition-all ${
                currency === c
                  ? "bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700]"
                  : "bg-[#141414] border border-[#222] text-[#777] hover:text-white hover:border-[#333]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MERCH_ITEMS.map((item, i) => {
            const isSoldOut = item.tag === "SOLD OUT";
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-lg bg-[#141414] border border-[#222] p-7 hover:border-[#FFD700]/20 transition-all group"
              >
                {/* Tag */}
                <span
                  className="absolute top-3 right-3 px-3 py-1 rounded font-[var(--font-rajdhani)] text-xs text-white font-bold tracking-wider"
                  style={{ background: item.tagColor }}
                >
                  {item.tag}
                </span>

                {/* Emoji */}
                <div className="text-5xl text-center mb-4 group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>

                {/* Name */}
                <div className="font-[var(--font-orbitron)] text-sm text-[#ddd] font-bold leading-tight mb-2">
                  {item.name}
                </div>

                {/* Price */}
                <div className="font-[var(--font-orbitron)] text-xl text-[#FFD700] font-black">
                  {currency === "INR" ? item.priceINR : item.priceUSD}
                </div>

                {/* CTA */}
                {!isSoldOut && (
                  <button className="mt-4 w-full bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded-lg py-3 font-[var(--font-orbitron)] text-xs font-black text-[#0A0A0A] tracking-wider hover:brightness-110 transition-all">
                    {item.tag === "PRE-ORDER" ? "PRE-ORDER" : "ADD TO CART"}
                  </button>
                )}
                {isSoldOut && (
                  <button
                    disabled
                    className="mt-4 w-full bg-[#222] rounded-lg py-3 font-[var(--font-orbitron)] text-xs font-bold text-[#555] tracking-wider cursor-not-allowed"
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
