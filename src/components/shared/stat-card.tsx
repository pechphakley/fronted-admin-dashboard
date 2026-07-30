import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  note,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone: "green" | "orange" | "red";
}) {
  const tones = {
    green: {
      icon: "bg-green-50 text-[#1fa628]",
      note: "text-[#1fa628]",
    },
    orange: {
      icon: "bg-orange-50 text-[#f97316]",
      note: "text-[#f97316]",
    },
    red: {
      icon: "bg-red-50 text-[#ef4444]",
      note: "text-[#ef4444]",
    },
  };

  return (
    <article className="relative min-h-[130px] rounded-lg border border-[#c3c6d7] bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#737686]">
        {label}
      </p>
      <div className={cn("absolute top-4 right-4 rounded p-2", tones[tone].icon)}>
        <Icon className="size-5" strokeWidth={1.8} />
      </div>
      <p className="mt-7 text-[28px] font-semibold leading-8 text-[#191c1e]">
        {value}
      </p>
      <p className={cn("mt-1 text-xs", tones[tone].note)}>{note}</p>
    </article>
  );
}
