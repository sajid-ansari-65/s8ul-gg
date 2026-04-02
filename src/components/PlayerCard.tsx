"use client";

import { motion } from "framer-motion";
import type { RosterPlayer } from "@/lib/constants";

interface PlayerCardProps {
  player: RosterPlayer;
  isActive?: boolean;
  onClick?: () => void;
}

export default function PlayerCard({ player, isActive = false, onClick }: PlayerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-sm p-4 cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] border border-[#FFD700]/40 shadow-[0_8px_32px_rgba(255,215,0,0.12)]"
          : "bg-[#0A0A0A] border border-[#222] hover:border-[#333]"
      }`}
    >
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-sm mx-auto mb-3 flex items-center justify-center text-2xl bg-gradient-to-br from-[#1a1a1a] to-[#222] border ${
          isActive ? "border-[#FFD700]/30" : "border-[#333]"
        }`}
      >
        {player.icon}
      </div>

      {/* Name */}
      <div
        className={`font-[var(--font-orbitron)] text-[0.72rem] font-bold text-center tracking-wider ${
          isActive ? "text-[#FFD700]" : "text-[#ccc]"
        }`}
      >
        {player.name}
      </div>

      {/* Real Name */}
      {player.realName && (
        <div className="font-[var(--font-rajdhani)] text-[0.58rem] text-[#888] text-center mt-0.5">
          {player.realName}
        </div>
      )}

      {/* Role + Tag */}
      <div className="text-center mt-0.5">
        <span className="font-[var(--font-rajdhani)] text-[0.58rem] text-[#666] tracking-[0.12em] uppercase">
          {player.role}
        </span>
        {player.tag && (
          <span className="ml-1.5 font-[var(--font-orbitron)] text-[0.45rem] text-[#E63946] font-bold tracking-wider">
            {player.tag}
          </span>
        )}
      </div>

      {/* Nationality + Age */}
      <div className="flex justify-center items-center gap-2 mt-2 pt-2 border-t border-[#1a1a1a]">
        <span className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#555]">
          {player.nationality}
        </span>
        {player.age && player.age > 0 && (
          <span className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#444]">
            · {player.age}y
          </span>
        )}
      </div>
    </motion.div>
  );
}
