"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";

const PERKS = [
  { icon: "🎫", title: "Watch Party Access", desc: "Free entry to city watch-parties in Mumbai, Delhi, Bangalore, Chennai & Riyadh." },
  { icon: "🏷️", title: "Merch Drops First", desc: "48-hour early access to every limited edition drop before public sale." },
  { icon: "🎮", title: "Play with Pros", desc: "Monthly lottery for custom matches with Soul & 8Bit rosters." },
  { icon: "⭐", title: "Loyalty Points", desc: "Earn XP for engagement — redeem for signed gear, shoutouts & meet-and-greets." },
  { icon: "📺", title: "BTS Content", desc: "Exclusive behind-the-scenes vlogs, bootcamp footage & player diaries." },
  { icon: "🏆", title: "Riyadh VIP Raffle", desc: "Superfans eligible for an all-expenses-paid trip to EWC Riyadh 2026." },
];

export default function SuperfanPage() {
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-[1140px] mx-auto px-5 py-20">
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#00f0ff] tracking-[0.3em] uppercase mb-1.5">
          EWC CLUB PARTNER
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-10">
          SUPERFAN PORTAL
        </h1>

        <AnimatePresence mode="wait">
          {!joined ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Join Card */}
              <div className="rounded-sm border border-[#00f0ff]/15 p-8 text-center mb-10 bg-gradient-to-br from-[#00f0ff]/5 to-transparent">
                <div className="text-4xl mb-3">🎮</div>
                <h2 className="font-[var(--font-orbitron)] text-lg font-black text-[#00f0ff] mb-2">
                  JOIN THE S8UL SUPERFAN PROGRAM
                </h2>
                <p className="font-[var(--font-rajdhani)] text-[0.82rem] text-[#666] leading-relaxed max-w-lg mx-auto mb-6">
                  Official EWC 2026 Club Partner fan experience. Earn loyalty XP, access city watch-parties, win trips to Riyadh, and get early merch drops.
                </p>

                <div className="flex gap-2.5 max-w-md mx-auto flex-wrap">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your gamertag"
                    className="flex-1 min-w-[140px] bg-[#141414] border border-[#1a1a1a] rounded-sm px-3.5 py-2.5 font-[var(--font-rajdhani)] text-[0.78rem] text-[#ccc] outline-none focus:border-[#00f0ff]/40 transition-colors"
                  />
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="flex-1 min-w-[100px] bg-[#141414] border border-[#1a1a1a] rounded-sm px-3.5 py-2.5 font-[var(--font-rajdhani)] text-[0.78rem] text-[#ccc] outline-none focus:border-[#00f0ff]/40 transition-colors"
                  />
                  <button
                    onClick={() => name && setJoined(true)}
                    disabled={!name}
                    className="bg-gradient-to-br from-[#00f0ff] to-[#0090aa] rounded-sm px-6 py-2.5 font-[var(--font-orbitron)] text-[0.65rem] font-black text-[#0A0A0A] tracking-wider disabled:opacity-40 hover:brightness-110 transition-all"
                  >
                    JOIN →
                  </button>
                </div>
              </div>

              {/* Perks Grid */}
              <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#00f0ff] tracking-[0.12em] mb-3.5">
                SUPERFAN PERKS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PERKS.map((perk) => (
                  <div
                    key={perk.title}
                    className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-5 hover:border-[#00f0ff]/20 transition-colors"
                  >
                    <div className="text-2xl mb-2">{perk.icon}</div>
                    <div className="font-[var(--font-orbitron)] text-[0.65rem] font-bold text-[#ccc] tracking-wider mb-1">
                      {perk.title}
                    </div>
                    <div className="font-[var(--font-rajdhani)] text-[0.72rem] text-[#666] leading-relaxed">
                      {perk.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-sm border border-[#00f0ff]/25 p-10 text-center bg-gradient-to-br from-[#00f0ff]/5 via-[#FFD700]/3 to-transparent"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="font-[var(--font-orbitron)] text-xl font-black text-[#FFD700]">
                WELCOME, {name.toUpperCase()}!
              </h2>
              <p className="font-[var(--font-rajdhani)] text-[0.85rem] text-[#666] mt-2 leading-relaxed">
                You&apos;re now an official S8UL Superfan. Your city watch-party registration for{" "}
                <strong className="text-[#00f0ff]">{city || "your city"}</strong> is confirmed.
              </p>

              <div className="flex justify-center gap-8 mt-6 flex-wrap">
                {[
                  ["XP Level", "1", "#FFD700"],
                  ["Loyalty Points", "100", "#00f0ff"],
                  ["Rank", "RECRUIT", "#E63946"],
                ].map(([label, value, color]) => (
                  <div key={label}>
                    <div
                      className="font-[var(--font-orbitron)] text-xl font-black"
                      style={{ color }}
                    >
                      {value}
                    </div>
                    <div className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#666] tracking-[0.1em] uppercase">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-[var(--font-rajdhani)] text-[0.65rem] text-[#444] tracking-wider mt-5">
                Earn XP by watching matches, sharing content & attending events
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
