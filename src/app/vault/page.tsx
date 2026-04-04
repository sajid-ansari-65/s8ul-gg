"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import StatBar from "@/components/StatBar";
import { BGIS_ROSTER, BGIS_TIMELINE } from "@/lib/constants";

export default function VaultPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const player = BGIS_ROSTER[selectedIdx];

  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <p className="font-[var(--font-rajdhani)] text-sm text-[#B8960A] tracking-[0.25em] uppercase mb-2">
          BGIS 2026 · CHENNAI
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-12">
          CHAMPIONS VAULT
        </h1>

        {/* Trophy Banner */}
        <div className="relative overflow-hidden rounded-lg border border-[#FFD700]/15 p-10 text-center mb-14 bg-gradient-to-br from-[#FFD700]/5 via-[#E63946]/3 to-transparent">
          <div className="text-6xl mb-4 animate-[float_3s_ease-in-out_infinite]">🏆</div>
          <h2 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,3vw,2rem)] font-black text-[#FFD700] tracking-wider">
            BGIS 2026 CHAMPIONS
          </h2>
          <p className="font-[var(--font-rajdhani)] text-base text-[#888] tracking-[0.12em] mt-2">
            TEAM SOUL · CHENNAI · APRIL 2026
          </p>

          {/* Summary stats */}
          <div className="flex justify-center gap-10 mt-7 flex-wrap">
            {[
              ["Total Kills", "156", "#E63946"],
              ["Avg Place", "#1.6", "#FFD700"],
              ["Total Points", "246", "#FFD700"],
              ["MVP", "LEGIT", "#E63946"],
            ].map(([label, value, color]) => (
              <div key={label} className="text-center">
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
        </div>

        {/* Round-by-Round Timeline */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">
          ROUND-BY-ROUND JOURNEY
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-14">
          {BGIS_TIMELINE.map((round, i) => (
            <div
              key={i}
              className={`relative rounded-lg p-4 ${
                round.highlight
                  ? "bg-[#FFD700]/4 border border-[#FFD700]/20"
                  : "bg-[#141414] border border-[#222]"
              }`}
            >
              {round.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FFD700] rounded-t-lg" />
              )}
              <div className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-wider mb-2">
                {round.round}
              </div>
              <div
                className={`font-[var(--font-orbitron)] text-lg font-black ${
                  round.place === "#1" ? "text-[#FFD700]" : "text-[#ddd]"
                }`}
              >
                {round.place}
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-[var(--font-rajdhani)] text-sm text-[#E63946]">
                  {round.kills}k
                </span>
                <span className="font-[var(--font-orbitron)] text-sm text-[#FFD700] font-bold">
                  {round.pts}pt
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Roster Grid */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">
          ROSTER STATS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {BGIS_ROSTER.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSelectedIdx(i)}
              className={`relative overflow-hidden rounded-lg p-5 text-left transition-all ${
                selectedIdx === i
                  ? "bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] border border-[#FFD700]/40 shadow-[0_8px_32px_rgba(255,215,0,0.12)]"
                  : "bg-[#0A0A0A] border border-[#222] hover:border-[#333]"
              }`}
            >
              {selectedIdx === i && <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />}
              <div className={`w-14 h-14 rounded-lg mx-auto mb-3 flex items-center justify-center text-2xl bg-gradient-to-br from-[#1a1a1a] to-[#222] border ${selectedIdx === i ? "border-[#FFD700]/30" : "border-[#333]"}`}>
                {p.icon}
              </div>
              <div className={`font-[var(--font-orbitron)] text-sm font-bold text-center tracking-wider ${selectedIdx === i ? "text-[#FFD700]" : "text-[#ddd]"}`}>
                {p.name}
              </div>
              <div className="text-center mt-1">
                <span className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-wider">{p.role}</span>
                {p.tag && <span className="ml-2 font-[var(--font-orbitron)] text-xs text-[#E63946] font-bold">{p.tag}</span>}
              </div>
              <div className="flex justify-between mt-3 pt-3 border-t border-[#222]">
                <div className="text-center"><div className="font-[var(--font-orbitron)] text-sm text-[#E63946] font-bold">{p.kills}</div><div className="font-[var(--font-rajdhani)] text-xs text-[#666] uppercase">Kills</div></div>
                <div className="text-center"><div className="font-[var(--font-orbitron)] text-sm text-[#FFD700] font-bold">{p.rating}</div><div className="font-[var(--font-rajdhani)] text-xs text-[#666] uppercase">Rating</div></div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Player Detail */}
        <div className="rounded-lg border border-[#FFD700]/10 p-8 bg-gradient-to-br from-[#FFD700]/3 to-transparent">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-lg bg-[#141414] border border-[#FFD700]/20 flex items-center justify-center text-3xl">
              {player.icon}
            </div>
            <div>
              <div className="font-[var(--font-orbitron)] text-xl font-black text-[#FFD700]">
                {player.name}
              </div>
              <div className="font-[var(--font-rajdhani)] text-sm text-[#888] tracking-[0.08em]">
                {player.role}
                {player.tag && (
                  <span className="ml-2 text-[#E63946]">· {player.tag}</span>
                )}
              </div>
            </div>
          </div>
          <StatBar label="Total Kills" value={player.kills} max={55} color="#E63946" />
          <StatBar label="Avg Damage" value={player.dmg} max={400} color="#FFD700" />
          <StatBar label="Rating" value={player.rating} max={10} color="#FFD700" />
          <StatBar label="Clutch Factor" value={player.clutch} max={10} color="#E63946" />
        </div>
      </section>
    </main>
  );
}
