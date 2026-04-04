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
              {/* Team Name */}
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

              {/* Player Images from s8ul.gg */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {images.slice(0, 8).map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-[#222] bg-[#141414] hover:border-[#FFD700]/30 transition-all">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {roster.players.map(player => (
                  <div
                    key={player.name}
                    className="rounded-lg bg-[#141414] border border-[#222] p-6 hover:border-[#FFD700]/25 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-lg bg-[#0A0A0A] border border-[#2a2a2a] flex items-center justify-center text-2xl group-hover:border-[#FFD700]/30 transition-colors">
                        {player.icon}
                      </div>
                      <div>
                        <div className="font-[var(--font-orbitron)] text-base font-bold text-[#FFD700] flex items-center gap-2">
                          {player.name}
                          {player.tag && (
                            <span className="text-xs text-[#E63946] bg-[#E63946]/10 px-2 py-0.5 rounded">
                              {player.tag}
                            </span>
                          )}
                        </div>
                        {player.realName && (
                          <div className="font-[var(--font-rajdhani)] text-sm text-[#999]">
                            {player.realName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-[var(--font-rajdhani)] text-sm text-[#777] tracking-wider">
                        {player.role}
                      </span>
                      <span className="font-[var(--font-rajdhani)] text-sm text-[#666]">
                        {player.nationality}
                        {player.age ? ` · ${player.age}y` : ""}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Coach */}
                {roster.coach && (
                  <div className="rounded-lg bg-gradient-to-br from-[#FFD700]/5 to-transparent border border-[#FFD700]/15 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-lg bg-[#0A0A0A] border border-[#FFD700]/20 flex items-center justify-center text-2xl">
                        {roster.coach.icon}
                      </div>
                      <div>
                        <div className="font-[var(--font-orbitron)] text-base font-bold text-[#FFD700]">
                          {roster.coach.name}
                        </div>
                        {roster.coach.realName && (
                          <div className="font-[var(--font-rajdhani)] text-sm text-[#999]">
                            {roster.coach.realName}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="font-[var(--font-rajdhani)] text-sm text-[#B8960A] tracking-wider">
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
