"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import { ROSTERS, PLAYER_IMAGES } from "@/lib/constants";
import type { GameTitle } from "@/lib/constants";

const TABS: { id: GameTitle; label: string }[] = [
  { id: "BGMI", label: "BGMI" },
  { id: "VALORANT", label: "VALORANT" },
  { id: "CODM", label: "CODM" },
];

export default function PlayersPage() {
  const [activeTab, setActiveTab] = useState<GameTitle>("BGMI");
  const roster = ROSTERS.find(r => r.game === activeTab);

  const images = activeTab === "BGMI" ? PLAYER_IMAGES.bgmi
    : activeTab === "VALORANT" ? PLAYER_IMAGES.valorant
    : PLAYER_IMAGES.codm;

  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-[1140px] mx-auto px-5 py-20">
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#E63946] tracking-[0.3em] uppercase mb-1.5">
          ESPORTS DIVISIONS
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-8">
          PLAYERS
        </h1>

        {/* Game Tabs */}
        <div className="flex gap-2 mb-8">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-sm px-6 py-2.5 font-[var(--font-orbitron)] text-[0.65rem] font-bold tracking-wider transition-all ${
                activeTab === tab.id
                  ? "bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700]"
                  : "bg-[#141414] border border-[#1a1a1a] text-[#666] hover:text-[#999]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="player-tab"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[#FFD700]"
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
              {/* Team Name */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-[var(--font-orbitron)] text-lg font-black text-[#FFD700]">
                  {roster.teamName}
                </h2>
                {roster.sponsor && (
                  <span className="font-[var(--font-rajdhani)] text-[0.6rem] text-[#B8960A] tracking-wider bg-[#FFD700]/8 px-3 py-1 rounded-sm">
                    Powered by {roster.sponsor}
                  </span>
                )}
              </div>

              {/* Player Images from s8ul.gg */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {images.slice(0, 8).map((img, i) => (
                  <div key={i} className="rounded-sm overflow-hidden border border-[#1a1a1a] bg-[#141414] hover:border-[#FFD700]/30 transition-all">
                    <img
                      src={`https://s8ul.gg${img}`}
                      alt={`${activeTab} Player ${i + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Player Roster Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {roster.players.map(player => (
                  <div
                    key={player.name}
                    className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-5 hover:border-[#FFD700]/25 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-sm bg-[#0A0A0A] border border-[#222] flex items-center justify-center text-xl group-hover:border-[#FFD700]/30 transition-colors">
                        {player.icon}
                      </div>
                      <div>
                        <div className="font-[var(--font-orbitron)] text-[0.78rem] font-bold text-[#FFD700] flex items-center gap-2">
                          {player.name}
                          {player.tag && (
                            <span className="text-[0.48rem] text-[#E63946] bg-[#E63946]/10 px-1.5 py-0.5 rounded-sm">
                              {player.tag}
                            </span>
                          )}
                        </div>
                        {player.realName && (
                          <div className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#888]">
                            {player.realName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#666] tracking-wider">
                        {player.role}
                      </span>
                      <span className="font-[var(--font-rajdhani)] text-[0.58rem] text-[#555]">
                        {player.nationality}
                        {player.age ? ` · ${player.age}y` : ""}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Coach */}
                {roster.coach && (
                  <div className="rounded-sm bg-gradient-to-br from-[#FFD700]/5 to-transparent border border-[#FFD700]/15 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-sm bg-[#0A0A0A] border border-[#FFD700]/20 flex items-center justify-center text-xl">
                        {roster.coach.icon}
                      </div>
                      <div>
                        <div className="font-[var(--font-orbitron)] text-[0.78rem] font-bold text-[#FFD700]">
                          {roster.coach.name}
                        </div>
                        {roster.coach.realName && (
                          <div className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#888]">
                            {roster.coach.realName}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#B8960A] tracking-wider">
                      {roster.coach.role}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
