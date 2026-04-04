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

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        <p className="font-[var(--font-rajdhani)] text-sm text-[#00f0ff] tracking-[0.25em] uppercase mb-2">
          EWC CLUB PARTNER
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-12">
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
              <div className="rounded-lg border border-[#00f0ff]/15 p-10 text-center mb-14 bg-gradient-to-br from-[#00f0ff]/5 to-transparent">
                <div className="text-5xl mb-4">🎮</div>
                <h2 className="font-[var(--font-orbitron)] text-xl font-black text-[#00f0ff] mb-3">
                  JOIN THE S8UL SUPERFAN PROGRAM
                </h2>
                <p className="font-[var(--font-rajdhani)] text-base text-[#888] leading-relaxed max-w-lg mx-auto mb-8">
                  Official EWC 2026 Club Partner fan experience. Earn loyalty XP, access city watch-parties, win trips to Riyadh, and get early merch drops.
                </p>

                <div className="flex gap-3 max-w-md mx-auto flex-wrap">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your gamertag"
                    className="flex-1 min-w-[140px] bg-[#141414] border border-[#222] rounded-lg px-4 py-3 font-[var(--font-rajdhani)] text-base text-[#ddd] outline-none focus:border-[#00f0ff]/40 transition-colors placeholder:text-[#555]"
                  />
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="flex-1 min-w-[100px] bg-[#141414] border border-[#222] rounded-lg px-4 py-3 font-[var(--font-rajdhani)] text-base text-[#ddd] outline-none focus:border-[#00f0ff]/40 transition-colors placeholder:text-[#555]"
                  />
                  <button
                    onClick={() => name && setJoined(true)}
                    disabled={!name}
                    className="bg-gradient-to-br from-[#00f0ff] to-[#0090aa] rounded-lg px-8 py-3 font-[var(--font-orbitron)] text-sm font-black text-[#0A0A0A] tracking-wider disabled:opacity-40 hover:brightness-110 transition-all"
                  >
                    JOIN →
                  </button>
                </div>
              </div>

              {/* Perks Grid */}
              <h3 className="font-[var(--font-orbitron)] text-sm text-[#00f0ff] tracking-[0.1em] mb-5">
                SUPERFAN PERKS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PERKS.map((perk) => (
                  <div
                    key={perk.title}
                    className="rounded-lg bg-[#141414] border border-[#222] p-7 hover:border-[#00f0ff]/20 transition-colors"
                  >
                    <div className="text-3xl mb-3">{perk.icon}</div>
                    <div className="font-[var(--font-orbitron)] text-sm font-bold text-[#ddd] tracking-wider mb-2">
                      {perk.title}
                    </div>
                    <div className="font-[var(--font-rajdhani)] text-sm text-[#888] leading-relaxed">
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
              className="rounded-lg border border-[#00f0ff]/25 p-12 text-center bg-gradient-to-br from-[#00f0ff]/5 via-[#FFD700]/3 to-transparent"
            >
              <div className="text-6xl mb-5">🎉</div>
              <h2 className="font-[var(--font-orbitron)] text-2xl font-black text-[#FFD700]">
                WELCOME, {name.toUpperCase()}!
              </h2>
              <p className="font-[var(--font-rajdhani)] text-base text-[#888] mt-3 leading-relaxed">
                You&apos;re now an official S8UL Superfan. Your city watch-party registration for{" "}
                <strong className="text-[#00f0ff]">{city || "your city"}</strong> is confirmed.
              </p>

              <div className="flex justify-center gap-10 mt-8 flex-wrap">
                {[
                  ["XP Level", "1", "#FFD700"],
                  ["Loyalty Points", "100", "#00f0ff"],
                  ["Rank", "RECRUIT", "#E63946"],
                ].map(([label, value, color]) => (
                  <div key={label}>
                    <div
                      className="font-[var(--font-orbitron)] text-2xl font-black"
                      style={{ color }}
                    >
                      {value}
                    </div>
                    <div className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-[0.08em] uppercase mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-[var(--font-rajdhani)] text-sm text-[#555] tracking-wider mt-6">
                Earn XP by watching matches, sharing content & attending events
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
