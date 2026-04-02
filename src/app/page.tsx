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

export default function Home() {
  return (
    <main>
      <Nav />
      <Ticker />
      <HeroSection />

      {/* Quick Nav Cards */}
      <section className="max-w-[1140px] mx-auto px-5 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {NAV_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-sm bg-[#141414] p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: `${card.color}22`, borderWidth: 1 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.color}66, transparent)`,
                }}
              />

              <h3
                className="font-[var(--font-orbitron)] text-[0.72rem] font-bold tracking-wider mb-2"
                style={{ color: card.color }}
              >
                {card.title}
              </h3>
              <p className="font-[var(--font-rajdhani)] text-[0.78rem] text-[#666] leading-relaxed mb-4">
                {card.desc}
              </p>
              <span
                className="font-[var(--font-orbitron)] text-[0.6rem] font-bold tracking-[0.12em] group-hover:tracking-[0.18em] transition-all"
                style={{ color: card.color }}
              >
                {card.btn} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FFD700]/8 py-7 text-center">
        <div className="font-[var(--font-orbitron)] text-[0.75rem] font-black text-gold-gradient mb-1.5">
          S8UL
        </div>
        <div className="font-[var(--font-rajdhani)] text-[0.55rem] text-[#444] tracking-[0.12em]">
          © 2026 S8UL ESPORTS · BGIS CHAMPIONS · EWC CLUB PARTNER
        </div>
      </footer>
    </main>
  );
}
