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
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-[var(--font-rajdhani)] text-sm text-[#888] tracking-[0.08em] uppercase">
          {label}
        </span>
        <span
          className="font-[var(--font-orbitron)] text-sm font-bold"
          style={{ color }}
        >
          {value}
        </span>
      </div>
      <div className="h-[4px] bg-[#222] rounded overflow-hidden">
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
