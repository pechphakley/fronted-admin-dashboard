"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Bell, ChevronRight, CircleHelp, Grid3X3, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppHeader() {
  const pathname = usePathname();
  const isUsersPage = pathname === "/users";
  const isModeratorsPage = pathname === "/moderators";
  const isRecruitersPage = pathname === "/recruiters";
  const isRecruiterInvitePage = pathname === "/recruiters/invite";
  const isJobSeekersPage = pathname === "/job-seekers";
  const isFinancePage = pathname === "/finance" || pathname.startsWith("/finance/");
  const searchPlaceholder = isUsersPage
    ? "Search platform..."
    : isModeratorsPage
      ? "Search moderators by name or ID..."
      : isRecruitersPage
        ? "Search recruiters by name, email, or position..."
        : isJobSeekersPage
          ? "Search across candidates..."
          : isFinancePage
            ? "Search records, users, or transactions..."
            : "Search system settings...";

  if (isRecruiterInvitePage) {
    return (
      <header className="mx-4 flex min-h-[70px] items-center justify-between gap-5 border-b border-[#c3c6d7] sm:mx-6">
        <div className="flex items-center gap-4">
          <Link href="/recruiters" aria-label="Back to recruiters" className="text-[#1fa628]"><ArrowLeft className="size-5" /></Link>
          <div>
            <p className="font-semibold text-[#1fa628]">Role Details</p>
            <div className="flex items-center gap-1 text-[9px] text-[#444653]"><span>Roles</span><ChevronRight className="size-2.5" /><span>Senior Recruiter</span><ChevronRight className="size-2.5" /><span className="font-semibold text-[#1fa628]">Invite Recruiter</span></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="relative hidden w-56 md:block">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#444653]" />
            <Input type="search" placeholder="Search resources..." aria-label="Search resources" className="h-9 rounded-xl border-[#c4c5d5] bg-[#f3f4f5] pl-9 text-xs" />
          </label>
          <Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="size-5" /></Button>
          <Button variant="ghost" size="icon" aria-label="Help"><CircleHelp className="size-5" /></Button>
        </div>
      </header>
    );
  }

  return (
    <header className="mx-4 flex h-[70px] items-center justify-between border-b border-[#c3c6d7] px-0 sm:mx-8">
      <div className="flex flex-1 items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Open navigation"
          className="lg:hidden"
        >
          <Menu className="size-5" />
        </Button>
        {isJobSeekersPage && (
          <span className="hidden shrink-0 text-base font-semibold text-[#191c1e] xl:block">
            InterviewAI Admin
          </span>
        )}
        <label className="relative hidden w-full max-w-[448px] sm:block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-[#434655]" />
          <Input
            type="search"
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-10 rounded-[4px] border-[#c3c6d7] bg-[#eceef0] pl-10 text-sm"
          />
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="relative rounded-xl"
        >
          <Bell className="size-5" strokeWidth={1.7} />
          <span className="absolute top-2 right-2 size-2 rounded-full border-2 border-white bg-[#ba1a1a]" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Help"
          className="rounded-xl"
        >
          <CircleHelp className="size-5" strokeWidth={1.7} />
        </Button>
        {isFinancePage && (
          <>
            <span className="mx-2 h-8 w-px bg-[#c3c6d7]" />
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold leading-5 text-[#191c1e]">Admin Panel</p>
              <p className="text-xs font-semibold leading-4 text-[#444653]">Super Administrator</p>
            </div>
            <Image
              src="/assets/admin-finance.png"
              alt="Administrator"
              width={40}
              height={40}
              className="size-10 rounded-xl border-2 border-[#f8f9fa] object-cover shadow-sm"
            />
          </>
        )}
        {isModeratorsPage && (
          <>
            <span className="mx-2 h-8 w-px bg-[#c3c6d7]" />
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold leading-5 text-[#191c1e]">Alex Chen</p>
              <p className="text-xs font-semibold leading-4 text-[#434655]">System Admin</p>
            </div>
            <Image
              src="/assets/admin-alex.png"
              alt="Alex Chen"
              width={40}
              height={40}
              className="size-10 rounded-xl border border-[#c3c6d7] object-cover"
            />
          </>
        )}
        {isUsersPage && (
          <>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Applications"
              className="rounded-xl"
            >
              <Grid3X3 className="size-4" strokeWidth={2} />
            </Button>
            <span className="mx-2 h-8 w-px bg-[#c3c6d7]" />
            <Image
              src="/assets/administrator-profile.png"
              alt="Administrator profile"
              width={36}
              height={36}
              className="size-9 rounded-[4px] object-cover"
            />
          </>
        )}
        {isRecruitersPage && (
          <>
            <span className="mx-2 h-8 w-px bg-[#c3c6d7]" />
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-5 text-[#191c1e]">Alex Rivera</p>
              <p className="text-[10px] uppercase tracking-[0.5px] text-[#434655]">Super Admin</p>
            </div>
            <Image
              src="/assets/admin-rivera.png"
              alt="Alex Rivera"
              width={40}
              height={40}
              className="size-10 rounded-xl border border-[#c3c6d7] object-cover"
            />
          </>
        )}
        {isJobSeekersPage && (
          <Image
            src="/assets/admin-jobseekers.png"
            alt="Administrator"
            width={40}
            height={40}
            className="ml-2 size-10 rounded-xl object-cover"
          />
        )}
      </div>
    </header>
  );
}
