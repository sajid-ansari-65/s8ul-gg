"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import { ROSTERS } from "@/lib/constants";
import type { GameTitle, RosterPlayer } from "@/lib/constants";

const TABS: { id: GameTitle; label: string }[] = [
  { id: "BGMI", label: "BGMI" },
  { id: "VALORANT", label: "VALORANT" },
];

const EXTS = [".jpg", ".jpeg", ".png", ".webp"];

function PlayerPhoto({ player, isCoach = false }: { player: RosterPlayer; isCoach?: boolean }) {
  const [extIdx, setExtIdx] = useState(0);   // 0=.jpg  1=.png  2=.webp  3=give up
  const accent = isCoach ? "#B8960A" : "#FFD700";
  const src = player.image && extIdx < EXTS.length
    ? `${player.image}${EXTS[extIdx]}`
    : null;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-lg bg-[#0d0d0d] border transition-all duration-300 ${
        isCoach ? "border-[#FFD700]/15 hover:border-[#FFD700]/35" : "border-[#222] hover:border-[#FFD700]/30"
      }`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0.6 }}
      />

      {/* Photo or emoji fallback */}
      <div className="relative w-full aspect-[3/4] bg-[#141414] overflow-hidden">
        {src ? (
          <Image
            key={src}
            src={src}
            alt={player.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            onError={() => setExtIdx(i => i + 1)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-5xl">{player.icon}</span>
            <span className="font-[var(--font-orbitron)] text-[0.6rem] text-[#444] tracking-widest uppercase">
              No Photo
            </span>
          </div>
        )}

        {/* Tag badge */}
        {player.tag && (
          <span
            className="absolute top-2.5 right-2.5 font-[var(--font-orbitron)] text-[0.55rem] font-black tracking-wider px-2 py-0.5 rounded"
            style={{ background: "#E63946", color: "#fff" }}
          >
            {player.tag}
          </span>
        )}

        {isCoach && (
          <span className="absolute top-2.5 right-2.5 font-[var(--font-orbitron)] text-[0.55rem] font-black tracking-wider px-2 py-0.5 rounded bg-[#B8960A] text-[#0A0A0A]">
            COACH
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div
          className="font-[var(--font-orbitron)] text-sm font-bold tracking-wider truncate"
          style={{ color: accent }}
        >
          {player.name}
        </div>
        {player.realName && (
          <div className="font-[var(--font-rajdhani)] text-xs text-[#777] mt-0.5 truncate">
            {player.realName}
          </div>
        )}
        <div className="font-[var(--font-rajdhani)] text-xs text-[#555] tracking-wider uppercase mt-1.5">
          {player.role}
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="font-[var(--font-rajdhani)] text-xs text-[#444]">{player.nationality}</span>
          {player.age && player.age > 0 && (
            <span className="font-[var(--font-rajdhani)] text-xs text-[#3a3a3a]">· {player.age}y</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PlayersPage() {
  const [activeTab, setActiveTab] = useState<GameTitle>("BGMI");
  const roster = ROSTERS.find(r => r.game === activeTab);

  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        <p className="font-[var(--font-rajdhani)] text-sm text-[#E63946] tracking-[0.25em] uppercase mb-2">
          ESPORTS DIVISIONS
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-10">
          PLAYERS
        </h1>

        {/* Game Tabs */}
        <div className="flex gap-3 mb-10">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-lg px-7 py-3 font-[var(--font-orbitron)] text-xs font-bold tracking-wider transition-all ${
                activeTab === tab.id
                  ? "bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700]"
                  : "bg-[#141414] border border-[#222] text-[#777] hover:text-white hover:border-[#333]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="player-tab"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[#FFD700] rounded-t-lg"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {roster && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* Team header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-[var(--font-orbitron)] text-xl font-black text-[#FFD700]">
                  {roster.teamName}
                </h2>
                {roster.sponsor && (
                  <span className="font-[var(--font-rajdhani)] text-xs text-[#B8960A] tracking-wider bg-[#FFD700]/8 px-4 py-1.5 rounded">
                    Powered by {roster.sponsor}
                  </span>
                )}
              </div>

              {/* Players grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {roster.players.map(player => (
                  <PlayerPhoto key={player.name} player={player} />
                ))}
              </div>

              {/* Coach */}
              {roster.coach && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  <PlayerPhoto player={roster.coach} isCoach />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
