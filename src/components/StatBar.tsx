"use client";

import { motion } from "framer-motion";

interface StatBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
}

export default function StatBar({ label, value, max, color }: StatBarProps) {
  const pct = Math.min((value / max) * 100, 100);

  return (
    <div className="mb-2.5">
      <div className="flex justify-between mb-1">
        <span className="font-[var(--font-rajdhani)] text-[0.6rem] text-[#666] tracking-[0.1em] uppercase">
          {label}
        </span>
        <span
          className="font-[var(--font-orbitron)] text-[0.65rem] font-bold"
          style={{ color }}
        >
          {value}
        </span>
      </div>
      <div className="h-[3px] bg-[#1a1a1a] rounded-sm overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-sm"
          style={{
            background: color,
            boxShadow: `0 0 8px ${color}33`,
          }}
        />
      </div>
    </div>
  );
}
