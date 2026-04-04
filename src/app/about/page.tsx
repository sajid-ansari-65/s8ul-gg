"use client";

import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import { ABOUT_TEXT, FOUNDERS, ACHIEVEMENTS, BRAND_PARTNERS, ORG_STATS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <Ticker />
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-[var(--font-rajdhani)] text-sm text-[#B8960A] tracking-[0.25em] uppercase mb-2">OUR STORY</p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-4">{ABOUT_TEXT.headline}</h1>
        <h2 className="font-[var(--font-rajdhani)] text-[clamp(1rem,2.5vw,1.3rem)] text-[#999] mb-10 max-w-2xl leading-relaxed">{ABOUT_TEXT.subheadline}</h2>

        <div className="mb-20 max-w-3xl space-y-5">
          {ABOUT_TEXT.body.map((p, i) => (
            <p key={i} className="font-[var(--font-rajdhani)] text-base text-[#aaa] leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Org Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {([
            [ORG_STATS.brandCollabs, "Brand Collabs", "#FFD700"],
            [ORG_STATS.creators, "Creators", "#E63946"],
            [ORG_STATS.esportsAwards, "Esports Awards", "#FFD700"],
            [ORG_STATS.ewcViewers2025, "EWC India Viewers", "#00f0ff"],
            [ORG_STATS.headquarters, "Headquarters", "#E63946"],
            [ORG_STATS.gamingHouse, "Creator Hub", "#FFD700"],
          ] as const).map(([value, label, color]) => (
            <div key={label} className="rounded-lg bg-[#141414] border border-[#222] p-5 text-center hover:border-[#333] transition-colors">
              <div className="font-[var(--font-orbitron)] text-lg font-black" style={{ color }}>{value}</div>
              <div className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-[0.08em] uppercase mt-1.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Brand Partners */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">BRAND PARTNERS</h3>
        <div className="flex flex-wrap gap-3 mb-20">
          {BRAND_PARTNERS.map(b => (
            <span key={b} className="rounded-lg bg-[#141414] border border-[#222] px-5 py-2.5 font-[var(--font-rajdhani)] text-sm text-[#aaa] font-semibold tracking-wider hover:border-[#FFD700]/20 transition-colors">{b}</span>
          ))}
        </div>

        {/* Founders */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">MEET OUR FOUNDERS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {FOUNDERS.map(f => (
            <div key={f.name} className="rounded-lg bg-[#141414] border border-[#222] p-7 hover:border-[#FFD700]/20 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <img src={`https://s8ul.gg${f.image}`} alt={f.name} className="w-18 h-18 rounded-lg object-cover border border-[#FFD700]/15" loading="lazy" />
                <div>
                  <div className="font-[var(--font-orbitron)] text-base font-bold text-[#FFD700]">{f.name}</div>
                  {f.alias && <span className="font-[var(--font-rajdhani)] text-xs text-[#E63946] tracking-wider">{f.alias}</span>}
                  <div className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-wider mt-0.5">{f.role}</div>
                </div>
              </div>
              <p className="font-[var(--font-rajdhani)] text-sm text-[#999] leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-5">MILESTONES</h3>
        <div className="space-y-4">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="flex gap-5 rounded-lg bg-[#141414] border border-[#222] p-6 hover:border-[#FFD700]/15 transition-colors">
              <div className="text-3xl flex-shrink-0 mt-0.5">{a.icon}</div>
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-[var(--font-orbitron)] text-xs text-[#B8960A] tracking-widest bg-[#FFD700]/8 px-3 py-1 rounded">{a.year}</span>
                  <span className="font-[var(--font-orbitron)] text-sm font-bold text-[#ddd]">{a.title}</span>
                </div>
                <p className="font-[var(--font-rajdhani)] text-sm text-[#888] leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
