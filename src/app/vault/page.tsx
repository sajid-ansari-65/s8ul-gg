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

      <section className="max-w-[1140px] mx-auto px-5 py-20">
        {/* Header */}
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#B8960A] tracking-[0.3em] uppercase mb-1.5">
          BGIS 2026 · CHENNAI
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-10">
          CHAMPIONS VAULT
        </h1>

        {/* Trophy Banner */}
        <div className="relative overflow-hidden rounded-sm border border-[#FFD700]/15 p-8 text-center mb-10 bg-gradient-to-br from-[#FFD700]/5 via-[#E63946]/3 to-transparent">
          <div className="text-5xl mb-3 animate-[float_3s_ease-in-out_infinite]">🏆</div>
          <h2 className="font-[var(--font-orbitron)] text-[clamp(1.2rem,3vw,1.8rem)] font-black text-[#FFD700] tracking-wider">
            BGIS 2026 CHAMPIONS
          </h2>
          <p className="font-[var(--font-rajdhani)] text-[0.8rem] text-[#666] tracking-[0.15em] mt-1">
            TEAM SOUL · CHENNAI · APRIL 2026
          </p>

          {/* Summary stats */}
          <div className="flex justify-center gap-8 mt-5 flex-wrap">
            {[
              ["Total Kills", "156", "#E63946"],
              ["Avg Place", "#1.6", "#FFD700"],
              ["Total Points", "246", "#FFD700"],
              ["MVP", "LEGIT", "#E63946"],
            ].map(([label, value, color]) => (
              <div key={label} className="text-center">
                <div
                  className="font-[var(--font-orbitron)] text-lg font-black"
                  style={{ color }}
                >
                  {value}
                </div>
                <div className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#666] tracking-[0.12em] uppercase mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Round-by-Round Timeline */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-3.5">
          ROUND-BY-ROUND JOURNEY
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {BGIS_TIMELINE.map((round, i) => (
            <div
              key={i}
              className={`relative rounded-sm p-3 ${
                round.highlight
                  ? "bg-[#FFD700]/4 border border-[#FFD700]/20"
                  : "bg-[#141414] border border-[#1a1a1a]"
              }`}
            >
              {round.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FFD700]" />
              )}
              <div className="font-[var(--font-rajdhani)] text-[0.52rem] text-[#666] tracking-wider mb-1.5">
                {round.round}
              </div>
              <div
                className={`font-[var(--font-orbitron)] text-base font-black ${
                  round.place === "#1" ? "text-[#FFD700]" : "text-[#ccc]"
                }`}
              >
                {round.place}
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="font-[var(--font-rajdhani)] text-[0.58rem] text-[#E63946]">
                  {round.kills}k
                </span>
                <span className="font-[var(--font-orbitron)] text-[0.58rem] text-[#FFD700] font-bold">
                  {round.pts}pt
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Roster Grid */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-3.5">
          ROSTER STATS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {BGIS_ROSTER.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSelectedIdx(i)}
              className={`relative overflow-hidden rounded-sm p-4 text-left transition-all ${
                selectedIdx === i
                  ? "bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] border border-[#FFD700]/40 shadow-[0_8px_32px_rgba(255,215,0,0.12)]"
                  : "bg-[#0A0A0A] border border-[#222] hover:border-[#333]"
              }`}
            >
              {selectedIdx === i && <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />}
              <div className={`w-12 h-12 rounded-sm mx-auto mb-2 flex items-center justify-center text-xl bg-gradient-to-br from-[#1a1a1a] to-[#222] border ${selectedIdx === i ? "border-[#FFD700]/30" : "border-[#333]"}`}>
                {p.icon}
              </div>
              <div className={`font-[var(--font-orbitron)] text-[0.68rem] font-bold text-center tracking-wider ${selectedIdx === i ? "text-[#FFD700]" : "text-[#ccc]"}`}>
                {p.name}
              </div>
              <div className="text-center mt-0.5">
                <span className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#666] tracking-wider">{p.role}</span>
                {p.tag && <span className="ml-1.5 font-[var(--font-orbitron)] text-[0.45rem] text-[#E63946] font-bold">{p.tag}</span>}
              </div>
              <div className="flex justify-between mt-2 pt-2 border-t border-[#1a1a1a]">
                <div className="text-center"><div className="font-[var(--font-orbitron)] text-[0.75rem] text-[#E63946] font-bold">{p.kills}</div><div className="font-[var(--font-rajdhani)] text-[0.45rem] text-[#555] uppercase">Kills</div></div>
                <div className="text-center"><div className="font-[var(--font-orbitron)] text-[0.75rem] text-[#FFD700] font-bold">{p.rating}</div><div className="font-[var(--font-rajdhani)] text-[0.45rem] text-[#555] uppercase">Rating</div></div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Player Detail */}
        <div className="rounded-sm border border-[#FFD700]/10 p-6 bg-gradient-to-br from-[#FFD700]/3 to-transparent">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-sm bg-[#141414] border border-[#FFD700]/20 flex items-center justify-center text-3xl">
              {player.icon}
            </div>
            <div>
              <div className="font-[var(--font-orbitron)] text-base font-black text-[#FFD700]">
                {player.name}
              </div>
              <div className="font-[var(--font-rajdhani)] text-[0.65rem] text-[#666] tracking-[0.12em]">
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
