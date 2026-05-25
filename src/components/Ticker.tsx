"use client";

const ITEMS = [
  "🏆 S8UL WINS BGIS 2026 CHENNAI",
  "⚡ EWC PARIS 2026 — JULY 6TH",
  "🎯 NAKUL — BGIS 2026 BEST IGL",
  "👑 LEGIT — BGIS 2026 MVP",
  "🎮 OFFICIAL EWC 2026 CLUB PARTNER",
  "🌍 ROAD TO PARIS — JUL 6 · AUG 23",
  "🔥 RVK LEADS S8UL VALORANT INTO EWC",
];

export default function Ticker() {
  const text = ITEMS.join("  ·  ") + "  ·  ";

  return (
    <div className="ticker-wrap mt-16">
      <div className="ticker-content">
        <span className="pr-16">{text}{text}</span>
      </div>
    </div>
  );
}
