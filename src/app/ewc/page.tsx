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

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        {/* Header */}
        <p className="font-[var(--font-rajdhani)] text-sm text-[#9E2832] tracking-[0.25em] uppercase mb-2">
          EWC 2026 · RIYADH
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-4">
          ROAD TO RIYADH
        </h1>
        <p className="font-[var(--font-rajdhani)] text-base text-[#999] mb-10 max-w-xl leading-relaxed">
          S8UL is an official EWC 2026 Club Partner for the 2nd consecutive year — competing across 8+ titles in Riyadh.
        </p>

        {/* Countdown */}
        <CountdownTimer className="mb-12" />

        {/* EWC Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            [EWC_2026.totalPrizePool, "Total Prize Pool", "#FFD700"],
            [String(EWC_2026.totalCompetitions), "Competitions", "#E63946"],
            [String(EWC_2026.totalGames), "Game Titles", "#00f0ff"],
            [String(EWC_2026.totalClubPartners), "Club Partners", "#FFD700"],
          ].map(([value, label, color]) => (
            <div key={label} className="rounded-lg bg-[#141414] border border-[#222] p-5 text-center hover:border-[#333] transition-colors">
              <div className="font-[var(--font-orbitron)] text-xl font-black" style={{ color }}>
                {value}
              </div>
              <div className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-[0.08em] uppercase mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* S8UL Competing Titles */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">
          S8UL COMPETING TITLES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {EWC_S8UL_TITLES.map((t) => (
            <div
              key={t.game}
              className="rounded-lg bg-[#141414] border border-[#222] p-5 hover:border-[#FFD700]/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <div className="font-[var(--font-orbitron)] text-xs font-bold text-[#ddd] tracking-wider">
                    {t.game}
                  </div>
                  <span
                    className={`font-[var(--font-rajdhani)] text-xs tracking-wider ${
                      t.status === "Qualified"
                        ? "text-[#4ade80]"
                        : t.status === "Confirmed"
                        ? "text-[#FFD700]"
                        : t.status === "Qualifying"
                        ? "text-[#E63946]"
                        : "text-[#777]"
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
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">
          UPCOMING MATCHES
        </h3>
        <div className="grid gap-4 mb-16">
          {EWC_SCHEDULE.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>

        {/* Club Partners */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-4">
          EWC 2026 CLUB PARTNERS
        </h3>
        <p className="font-[var(--font-rajdhani)] text-sm text-[#888] mb-5">
          {EWC_2026.totalClubPartners} clubs selected worldwide. S8UL and GodLike Esports represent India.
        </p>
        <div className="flex flex-wrap gap-3">
          {EWC_CLUB_PARTNERS.map((club) => {
            const isS8ul = club === "S8UL" || club === "GodLike Esports";
            return (
              <span
                key={club}
                className={`rounded-lg px-4 py-2 font-[var(--font-rajdhani)] text-sm font-semibold tracking-wider transition-colors ${
                  isS8ul
                    ? "bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]"
                    : "bg-[#141414] border border-[#222] text-[#999] hover:border-[#333]"
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
