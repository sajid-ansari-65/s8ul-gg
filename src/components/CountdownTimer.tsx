"use client";

import { useCountdown } from "@/lib/hooks";
import { EWC_2026 } from "@/lib/constants";

interface UnitProps {
  value: number;
  label: string;
}

function Unit({ value, label }: UnitProps) {
  return (
    <div className="text-center">
      <div className="font-[var(--font-orbitron)] text-[clamp(1.8rem,5vw,3.2rem)] font-black text-[#FFD700] leading-none"
        style={{ textShadow: "0 0 20px rgba(255,215,0,0.15)" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="font-[var(--font-rajdhani)] text-xs text-[#777] tracking-[0.15em] uppercase mt-1.5">
        {label}
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="text-[#FFD700]/25 font-[var(--font-orbitron)] text-3xl self-start mt-1">
      :
    </div>
  );
}

export default function CountdownTimer({ className = "" }: { className?: string }) {
  const cd = useCountdown(EWC_2026.startDate);

  return (
    <div className={`inline-flex gap-5 px-8 py-4 bg-[#111]/75 border border-[#FFD700]/10 rounded-lg backdrop-blur-lg ${className}`}>
      <Unit value={cd.days} label="Days" />
      <Separator />
      <Unit value={cd.hours} label="Hrs" />
      <Separator />
      <Unit value={cd.minutes} label="Min" />
      <Separator />
      <Unit value={cd.seconds} label="Sec" />
    </div>
  );
}
