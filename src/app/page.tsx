import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const NAV_CARDS = [
  {
    title: "CHAMPIONS VAULT",
    desc: "Relive the BGIS 2026 Chennai victory. Round-by-round stats, highlights & MVP breakdown.",
    btn: "ENTER VAULT",
    href: "/vault",
    color: "#FFD700",
  },
  {
    title: "ROAD TO RIYADH",
    desc: "EWC 2026 live dashboard. Match schedules, group standings & Soul/8Bit tracker.",
    btn: "VIEW DASHBOARD",
    href: "/ewc",
    color: "#E63946",
  },
  {
    title: "SUPERFAN PORTAL",
    desc: "Join the official EWC Club Partner superfan program. Loyalty XP, watch parties & VIP access.",
    btn: "JOIN NOW",
    href: "/superfan",
    color: "#00f0ff",
  },
  {
    title: "MERCH ENGINE",
    desc: "BGIS Victory Collection & EWC drops. Multi-currency, global shipping, limited runs.",
    btn: "SHOP NOW",
    href: "/merch",
    color: "#FFD700",
  },
];

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Players", href: "/players" },
  { label: "Vault", href: "/vault" },
  { label: "EWC 2026", href: "/ewc" },
  { label: "Superfan", href: "/superfan" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main>
      <Nav />
      <Ticker />
      <HeroSection />

      {/* Quick Nav Cards */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="font-[var(--font-rajdhani)] text-sm text-[#B8960A] tracking-[0.25em] uppercase mb-2">
            EXPLORE
          </p>
          <h2 className="font-[var(--font-orbitron)] text-2xl lg:text-3xl font-black text-white">
            YOUR HQ AWAITS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NAV_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-lg bg-[#141414] border border-[#222] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30"
              style={{ borderColor: `${card.color}15` }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                  opacity: 0.5,
                }}
              />

              <h3
                className="font-[var(--font-orbitron)] text-xs font-bold tracking-wider mb-3"
                style={{ color: card.color }}
              >
                {card.title}
              </h3>
              <p className="font-[var(--font-rajdhani)] text-sm text-[#888] leading-relaxed mb-5">
                {card.desc}
              </p>
              <span
                className="font-[var(--font-orbitron)] text-xs font-bold tracking-[0.1em] group-hover:tracking-[0.15em] transition-all"
                style={{ color: card.color }}
              >
                {card.btn} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="font-[var(--font-orbitron)] text-xl font-black shimmer-text mb-3">
                S8UL
              </div>
              <p className="font-[var(--font-rajdhani)] text-sm text-[#666] leading-relaxed">
                India&apos;s premier esports organization. BGIS 2026 Champions. EWC Club Partner.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-[var(--font-orbitron)] text-xs font-bold text-[#FFD700] tracking-wider mb-4">
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-[var(--font-rajdhani)] text-sm text-[#777] hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-[var(--font-orbitron)] text-xs font-bold text-[#FFD700] tracking-wider mb-4">
                CONNECT
              </h4>
              <p className="font-[var(--font-rajdhani)] text-sm text-[#777] mb-2">
                connect@s8ul.gg
              </p>
              <a
                href="https://shop.s8ul.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-rajdhani)] text-sm text-[#FFD700] hover:text-white transition-colors"
              >
                shop.s8ul.gg →
              </a>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="font-[var(--font-rajdhani)] text-xs text-[#555] tracking-wider">
              © 2026 S8UL ESPORTS · ALL RIGHTS RESERVED
            </div>
            <div className="font-[var(--font-rajdhani)] text-xs text-[#444] tracking-wider">
              BGIS CHAMPIONS · EWC CLUB PARTNER
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
