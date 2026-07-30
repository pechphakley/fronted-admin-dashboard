"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Banknote,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { navigationItems } from "@/lib/constants/navigation";

const icons = {
  users: Users,
  moderators: UserCog,
  recruiters: BriefcaseBusiness,
  "job-seekers": Users,
  finance: Banknote,
  reports: ChartNoAxesColumnIncreasing,
  settings: Settings,
};

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <nav className="mt-12 flex flex-col gap-1 pr-0 pl-3">
      {navigationItems.map((item) => {
        const Icon = icons[item.icon];
        const active =
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex h-12 items-center gap-3 rounded-l-full px-5 text-sm font-semibold transition-colors",
              active
                ? "bg-white text-[#191c1e]"
                : "text-white hover:bg-white/10",
            )}
          >
            <Icon className="size-5 shrink-0" strokeWidth={1.8} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
