import Image from "next/image";

import { SidebarNavigation } from "@/components/layout/sidebar-navigation";

export function AppSidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 flex-col bg-[#078b00] text-white lg:flex">
      <div className="flex items-center gap-3 px-[38px] pt-9">
        <div className="size-12 rounded-full border-2 border-[#dfe0eb] p-1">
          <Image
            src="/assets/samantha-avatar.png"
            alt="Samantha"
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-5">Samantha</p>
          <p className="truncate text-[9px] leading-3 text-white/60">
            +998 (99) 436-46-15
          </p>
        </div>
      </div>
      <SidebarNavigation />
    </aside>
  );
}
