"use client";

import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import { ABOUT_TEXT, FOUNDERS, ACHIEVEMENTS, BRAND_PARTNERS, ORG_STATS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <Ticker />
      <section className="max-w-[1140px] mx-auto px-5 py-20">
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#B8960A] tracking-[0.3em] uppercase mb-1.5">OUR STORY</p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-3">{ABOUT_TEXT.headline}</h1>
        <h2 className="font-[var(--font-rajdhani)] text-[clamp(0.9rem,2vw,1.2rem)] text-[#888] mb-8 max-w-2xl leading-relaxed">{ABOUT_TEXT.subheadline}</h2>

        <div className="mb-16 max-w-3xl space-y-4">
          {ABOUT_TEXT.body.map((p, i) => (
            <p key={i} className="font-[var(--font-rajdhani)] text-[0.88rem] text-[#999] leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Org Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {([
            [ORG_STATS.brandCollabs, "Brand Collabs", "#FFD700"],
            [ORG_STATS.creators, "Creators", "#E63946"],
            [ORG_STATS.esportsAwards, "Esports Awards", "#FFD700"],
            [ORG_STATS.ewcViewers2025, "EWC India Viewers", "#00f0ff"],
            [ORG_STATS.headquarters, "Headquarters", "#E63946"],
            [ORG_STATS.gamingHouse, "Creator Hub", "#FFD700"],
          ] as const).map(([value, label, color]) => (
            <div key={label} className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-4 text-center">
              <div className="font-[var(--font-orbitron)] text-sm font-black" style={{ color }}>{value}</div>
              <div className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#666] tracking-[0.1em] uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Brand Partners */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-4">BRAND PARTNERS</h3>
        <div className="flex flex-wrap gap-3 mb-16">
          {BRAND_PARTNERS.map(b => (
            <span key={b} className="rounded-sm bg-[#141414] border border-[#1a1a1a] px-4 py-2 font-[var(--font-rajdhani)] text-[0.72rem] text-[#999] font-semibold tracking-wider">{b}</span>
          ))}
        </div>

        {/* Founders */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-4">MEET OUR FOUNDERS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {FOUNDERS.map(f => (
            <div key={f.name} className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-6 hover:border-[#FFD700]/20 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <img src={`https://s8ul.gg${f.image}`} alt={f.name} className="w-16 h-16 rounded-sm object-cover border border-[#FFD700]/15" loading="lazy" />
                <div>
                  <div className="font-[var(--font-orbitron)] text-[0.78rem] font-bold text-[#FFD700]">{f.name}</div>
                  {f.alias && <span className="font-[var(--font-rajdhani)] text-[0.6rem] text-[#E63946] tracking-wider">{f.alias}</span>}
                  <div className="font-[var(--font-rajdhani)] text-[0.6rem] text-[#666] tracking-wider">{f.role}</div>
                </div>
              </div>
              <p className="font-[var(--font-rajdhani)] text-[0.78rem] text-[#888] leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-4">MILESTONES</h3>
        <div className="space-y-3">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="flex gap-4 rounded-sm bg-[#141414] border border-[#1a1a1a] p-4 hover:border-[#FFD700]/15 transition-colors">
              <div className="text-2xl flex-shrink-0 mt-0.5">{a.icon}</div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-[var(--font-orbitron)] text-[0.48rem] text-[#B8960A] tracking-widest bg-[#FFD700]/8 px-2 py-0.5 rounded-sm">{a.year}</span>
                  <span className="font-[var(--font-orbitron)] text-[0.68rem] font-bold text-[#ccc]">{a.title}</span>
                </div>
                <p className="font-[var(--font-rajdhani)] text-[0.75rem] text-[#666] leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
