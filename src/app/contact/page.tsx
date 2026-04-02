"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import { SOCIALS } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Nav />
      <Ticker />

      <section className="max-w-[1140px] mx-auto px-5 py-20">
        <p className="font-[var(--font-rajdhani)] text-[0.62rem] text-[#00f0ff] tracking-[0.3em] uppercase mb-1.5">
          GET IN TOUCH
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.4rem,4vw,2.4rem)] font-black text-white mb-3">
          Looking Forward to Connecting
        </h1>
        <h2 className="font-[var(--font-rajdhani)] text-[clamp(0.85rem,2vw,1.1rem)] text-[#888] mb-10 max-w-2xl leading-relaxed">
          Who should get in touch
        </h2>

        {/* Contact Categories — from s8ul.gg */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {[
            { icon: "🎯", title: "Brands", desc: "Looking to tap into gaming? Let's craft impactful campaigns together." },
            { icon: "🏆", title: "Esports Orgs", desc: "Collaborations, tournaments, invites — let's build the future of esports." },
            { icon: "🎮", title: "Creators & Players", desc: "Want to work with us? Let's create, compete, and grow together." },
          ].map(c => (
            <div key={c.title} className="rounded-sm bg-[#141414] border border-[#1a1a1a] p-6 hover:border-[#00f0ff]/20 transition-colors">
              <div className="text-2xl mb-3">{c.icon}</div>
              <h3 className="font-[var(--font-orbitron)] text-[0.72rem] font-bold text-[#00f0ff] mb-2">{c.title}</h3>
              <p className="font-[var(--font-rajdhani)] text-[0.78rem] text-[#888] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-lg">
          <h3 className="font-[var(--font-orbitron)] text-[0.68rem] text-[#FFD700] tracking-[0.12em] mb-4">REACH US NOW</h3>

          {!submitted ? (
            <div className="space-y-3">
              <input placeholder="Your Name" className="w-full bg-[#141414] border border-[#1a1a1a] rounded-sm px-4 py-3 font-[var(--font-rajdhani)] text-[0.82rem] text-[#ccc] outline-none focus:border-[#FFD700]/30 transition-colors" />
              <input placeholder="Email" type="email" className="w-full bg-[#141414] border border-[#1a1a1a] rounded-sm px-4 py-3 font-[var(--font-rajdhani)] text-[0.82rem] text-[#ccc] outline-none focus:border-[#FFD700]/30 transition-colors" />
              <input placeholder="Subject" className="w-full bg-[#141414] border border-[#1a1a1a] rounded-sm px-4 py-3 font-[var(--font-rajdhani)] text-[0.82rem] text-[#ccc] outline-none focus:border-[#FFD700]/30 transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-[#141414] border border-[#1a1a1a] rounded-sm px-4 py-3 font-[var(--font-rajdhani)] text-[0.82rem] text-[#ccc] outline-none focus:border-[#FFD700]/30 transition-colors resize-none" />
              <button
                onClick={() => setSubmitted(true)}
                className="w-full bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded-sm py-3 font-[var(--font-orbitron)] text-[0.68rem] font-black text-[#0A0A0A] tracking-wider hover:brightness-110 transition-all"
              >
                SUBMIT
              </button>
            </div>
          ) : (
            <div className="rounded-sm border border-[#FFD700]/20 p-8 text-center bg-[#FFD700]/5">
              <div className="text-3xl mb-3">✅</div>
              <div className="font-[var(--font-orbitron)] text-sm font-bold text-[#FFD700]">Message Sent!</div>
              <p className="font-[var(--font-rajdhani)] text-[0.78rem] text-[#888] mt-2">We&apos;ll get back to you soon.</p>
            </div>
          )}

          <p className="font-[var(--font-rajdhani)] text-[0.72rem] text-[#666] mt-4">
            Or email us directly at{" "}
            <a href={`mailto:${SOCIALS.email}`} className="text-[#FFD700] hover:underline">{SOCIALS.email}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
