"use client";

const ITEMS = [
  "🏆 S8UL WINS BGIS 2026 CHENNAI",
  "⚡ EWC PARIS 2026 — JULY 6TH",
  "🔥 SOUL LEGIT — BGIS MVP",
  "🎮 OFFICIAL EWC 2026 CLUB PARTNER",
  "💀 8BIT ROSTER CONFIRMED FOR PARIS",
  "🌍 ROAD TO PARIS — JUL 6 · AUG 23",
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
