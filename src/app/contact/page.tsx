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

      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-[var(--font-rajdhani)] text-sm text-[#00f0ff] tracking-[0.25em] uppercase mb-2">
          GET IN TOUCH
        </p>
        <h1 className="font-[var(--font-orbitron)] text-[clamp(1.8rem,4vw,3rem)] font-black text-white mb-4">
          Looking Forward to Connecting
        </h1>
        <h2 className="font-[var(--font-rajdhani)] text-[clamp(1rem,2.5vw,1.3rem)] text-[#999] mb-12 max-w-2xl leading-relaxed">
          Who should get in touch
        </h2>

        {/* Contact Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {[
            { icon: "🎯", title: "Brands", desc: "Looking to tap into gaming? Let's craft impactful campaigns together." },
            { icon: "🏆", title: "Esports Orgs", desc: "Collaborations, tournaments, invites — let's build the future of esports." },
            { icon: "🎮", title: "Creators & Players", desc: "Want to work with us? Let's create, compete, and grow together." },
          ].map(c => (
            <div key={c.title} className="rounded-lg bg-[#141414] border border-[#222] p-8 hover:border-[#00f0ff]/20 transition-colors">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="font-[var(--font-orbitron)] text-sm font-bold text-[#00f0ff] mb-3">{c.title}</h3>
              <p className="font-[var(--font-rajdhani)] text-base text-[#999] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-xl">
          <h3 className="font-[var(--font-orbitron)] text-sm text-[#FFD700] tracking-[0.1em] mb-6">REACH US NOW</h3>

          {!submitted ? (
            <div className="space-y-4">
              <div>
                <label className="block font-[var(--font-rajdhani)] text-sm text-[#888] mb-1.5">Name</label>
                <input placeholder="Your full name" className="w-full bg-[#141414] border border-[#222] rounded-lg px-5 py-3.5 font-[var(--font-rajdhani)] text-base text-[#ddd] outline-none focus:border-[#FFD700]/40 transition-colors placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block font-[var(--font-rajdhani)] text-sm text-[#888] mb-1.5">Email</label>
                <input placeholder="your@email.com" type="email" className="w-full bg-[#141414] border border-[#222] rounded-lg px-5 py-3.5 font-[var(--font-rajdhani)] text-base text-[#ddd] outline-none focus:border-[#FFD700]/40 transition-colors placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block font-[var(--font-rajdhani)] text-sm text-[#888] mb-1.5">Subject</label>
                <input placeholder="What's this about?" className="w-full bg-[#141414] border border-[#222] rounded-lg px-5 py-3.5 font-[var(--font-rajdhani)] text-base text-[#ddd] outline-none focus:border-[#FFD700]/40 transition-colors placeholder:text-[#555]" />
              </div>
              <div>
                <label className="block font-[var(--font-rajdhani)] text-sm text-[#888] mb-1.5">Message</label>
                <textarea placeholder="Tell us more..." rows={5} className="w-full bg-[#141414] border border-[#222] rounded-lg px-5 py-3.5 font-[var(--font-rajdhani)] text-base text-[#ddd] outline-none focus:border-[#FFD700]/40 transition-colors resize-none placeholder:text-[#555]" />
              </div>
              <button
                onClick={() => setSubmitted(true)}
                className="w-full bg-gradient-to-br from-[#FFD700] to-[#B8960A] rounded-lg py-4 font-[var(--font-orbitron)] text-sm font-black text-[#0A0A0A] tracking-wider hover:brightness-110 transition-all"
              >
                SUBMIT
              </button>
            </div>
          ) : (
            <div className="rounded-lg border border-[#FFD700]/20 p-10 text-center bg-[#FFD700]/5">
              <div className="text-4xl mb-4">✅</div>
              <div className="font-[var(--font-orbitron)] text-lg font-bold text-[#FFD700]">Message Sent!</div>
              <p className="font-[var(--font-rajdhani)] text-base text-[#999] mt-3">We&apos;ll get back to you soon.</p>
            </div>
          )}

          <p className="font-[var(--font-rajdhani)] text-sm text-[#777] mt-5">
            Or email us directly at{" "}
            <a href={`mailto:${SOCIALS.email}`} className="text-[#FFD700] hover:underline">{SOCIALS.email}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
