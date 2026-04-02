"use client";

import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import CountdownTimer from "@/components/CountdownTimer";
import MatchCard from "@/components/MatchCard";
import { EWC_2026, EWC_S8UL_TITLES, EWC_SCHEDULE, EWC_CLUB_PARTNERS } from "@/lib/constants";

export default function EWCPage() {
  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-[1140px] mx-auto px-5 py-20">
        {/* Header */}
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#9E2832] tracking-[0.3em] uppercase mb-1.5">
          EWC 2026 · RIYADH
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-3">
          ROAD TO RIYADH
        </h1>
        <p className="font-[var(--font-rajdhani)] text-[0.82rem] text-[#888] mb-8 max-w-xl leading-relaxed">
          S8UL is an official EWC 2026 Club Partner for the 2nd consecutive year — competing across 8+ titles in Riyadh.
        </p>

        {/* Countdown */}
        <CountdownTimer className="mb-10" />

        {/* EWC Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            [EWC_2026.totalPrizePool, "Total Prize Pool", "#FFD700"],
            [String(EWC_2026.totalCompetitions), "Competitions", "#E63946"],
            [String(EWC_2026.totalGames), "Game Titles", "#00f0ff"],
            [String(EWC_2026.totalClubPartners), "Club Partners", "#FFD700"],
          ].map(([value, label, color]) => (
            <div key={label} className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-4 text-center">
              <div className="font-[var(--font-orbitron)] text-base font-black" style={{ color }}>
                {value}
              </div>
              <div className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#666] tracking-[0.1em] uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* S8UL Competing Titles */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-3">
          S8UL COMPETING TITLES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-12">
          {EWC_S8UL_TITLES.map((t) => (
            <div
              key={t.game}
              className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-4 hover:border-[#FFD700]/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{t.icon}</span>
                <div>
                  <div className="font-[var(--font-orbitron)] text-[0.62rem] font-bold text-[#ccc] tracking-wider">
                    {t.game}
                  </div>
                  <span
                    className={`font-[var(--font-rajdhani)] text-[0.55rem] tracking-wider ${
                      t.status === "Qualified"
                        ? "text-[#4ade80]"
                        : t.status === "Confirmed"
                        ? "text-[#FFD700]"
                        : t.status === "Qualifying"
                        ? "text-[#E63946]"
                        : "text-[#666]"
                    }`}
                  >
                    {t.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Match Schedule */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-3.5">
          UPCOMING MATCHES
        </h3>
        <div className="grid gap-3 mb-12">
          {EWC_SCHEDULE.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {/* Club Partners */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-3">
          EWC 2026 CLUB PARTNERS
        </h3>
        <p className="font-[var(--font-rajdhani)] text-[0.72rem] text-[#666] mb-4">
          {EWC_2026.totalClubPartners} clubs selected worldwide. S8UL and GodLike Esports represent India.
        </p>
        <div className="flex flex-wrap gap-2">
          {EWC_CLUB_PARTNERS.map((club) => {
            const isS8ul = club === "S8UL" || club === "GodLike Esports";
            return (
              <span
                key={club}
                className={`rounded-sm px-3 py-1.5 font-[var(--font-rajdhani)] text-[0.65rem] font-semibold tracking-wider ${
                  isS8ul
                    ? "bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]"
                    : "bg-[#141414] border border-[#1a1a1a] text-[#888]"
                }`}
              >
                {club}
                {isS8ul && " 🇮🇳"}
              </span>
            );
          })}
        </div>
      </section>
    </main>
  );
}
