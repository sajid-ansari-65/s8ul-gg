"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { EWCMatch } from "@/lib/constants";

function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-[7px] h-[7px] rounded-full bg-[#E63946] shadow-[0_0_8px_#E63946] pulse-live" />
      <span className="font-[var(--font-rajdhani)] text-[0.6rem] text-[#E63946] font-bold tracking-[0.12em]">
        LIVE
      </span>
    </span>
  );
}

function isS8ulTeam(name: string): boolean {
  return name.includes("SOUL") || name.includes("8BIT") || name.includes("S8UL");
}

interface MatchCardProps {
  match: EWCMatch;
  compact?: boolean;
}

export default function MatchCard({ match, compact = false }: MatchCardProps) {
  const isLive = match.status === "LIVE";
  const isUpcoming = match.status === "UPCOMING";

  return (
    <div
      className={`relative overflow-hidden rounded-sm ${
        isLive ? "border border-[#E63946]/30" : "border border-[#1a1a1a]"
      } ${compact ? "p-3" : "p-4"} bg-[#141414]`}
    >
      {/* Live top bar */}
      {isLive && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E63946] to-transparent" />
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-2.5">
        <span className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#444] tracking-[0.1em]">
          {match.round}
        </span>
        {isLive ? (
          <LiveDot />
        ) : (
          <span className={`font-[var(--font-rajdhani)] text-[0.55rem] tracking-[0.08em] ${
            isUpcoming ? "text-[#B8960A]" : "text-[#444]"
          }`}>
            {isUpcoming ? match.time : "COMPLETED"}
          </span>
        )}
      </div>

      {/* Teams + Score */}
      <div className="flex items-center justify-between">
        <span className={`font-[var(--font-orbitron)] text-[0.72rem] font-bold tracking-wider ${
          isS8ulTeam(match.team1) ? "text-[#FFD700]" : "text-[#ccc]"
        }`}>
          {match.team1}
        </span>

        <div className="font-[var(--font-orbitron)] text-lg font-black flex gap-2 px-3.5">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={match.score1}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className={match.score1 > match.score2 ? "text-[#FFD700]" : "text-[#444]"}
            >
              {isUpcoming ? "-" : match.score1}
            </motion.span>
          </AnimatePresence>
          <span className="text-[#1a1a1a] text-sm">:</span>
          <AnimatePresence mode="popLayout">
            <motion.span
              key={match.score2}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className={match.score2 > match.score1 ? "text-[#FFD700]" : "text-[#444]"}
            >
              {isUpcoming ? "-" : match.score2}
            </motion.span>
          </AnimatePresence>
        </div>

        <span className={`font-[var(--font-orbitron)] text-[0.72rem] font-bold tracking-wider text-right ${
          isS8ulTeam(match.team2) ? "text-[#FFD700]" : "text-[#ccc]"
        }`}>
          {match.team2}
        </span>
      </div>

      {/* Watch Live CTA */}
      {isLive && !compact && (
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="mt-3 w-full bg-gradient-to-br from-[#E63946] to-[#9E2832] rounded-sm py-2.5 font-[var(--font-rajdhani)] text-[0.65rem] text-white font-bold tracking-[0.12em] cursor-pointer pulse-btn"
        >
          ▶ WATCH LIVE
        </motion.button>
      )}
    </div>
  );
}
