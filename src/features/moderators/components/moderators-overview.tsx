"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Filter,
  MoreVertical,
  Plus,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  moderatorStatusOptions,
  specializationOptions,
} from "@/features/moderators/constants/moderator-options";
import type {
  ModeratorStatus,
  VerificationLevel,
} from "@/features/moderators/types/moderator";
import { moderators } from "@/lib/mock/moderators";
import { cn } from "@/lib/utils";

export function ModeratorsOverview() {
  const [specialization, setSpecialization] = useState("All Specializations");
  const [status, setStatus] = useState("All Statuses");

  const visibleModerators = useMemo(
    () =>
      moderators.filter(
        (moderator) =>
          (specialization === "All Specializations" ||
            moderator.specialization === specialization) &&
          (status === "All Statuses" || moderator.status === status),
      ),
    [specialization, status],
  );

  const resetFilters = () => {
    setSpecialization("All Specializations");
    setStatus("All Statuses");
  };

  return (
    <div className="px-4 py-8 sm:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[30px] font-semibold tracking-[-0.3px] text-[#191c1e]">
            Moderator Management
          </h1>
          <p className="mt-1 text-base text-[#434655]">
            Oversee AI interview evaluation standards and personnel.
          </p>
        </div>
        <Button className="h-11 rounded-[4px] bg-[#004ac6] px-6 font-semibold text-white hover:bg-[#003d9f]">
          <Plus className="size-4" />
          Onboard Moderator
        </Button>
      </div>

      <div className="mb-6 flex flex-col gap-3 rounded-lg border border-[#c3c6d7] bg-white p-4 lg:flex-row lg:items-center">
        <span className="text-xs font-bold uppercase text-[#434655]">Filters:</span>
        <Select value={specialization} onValueChange={(value) => setSpecialization(value ?? "All Specializations")}>
          <SelectTrigger className="h-10 w-full rounded-[4px] border-[#c3c6d7] bg-[#f2f4f6] px-3 lg:w-52">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {specializationOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={(value) => setStatus(value ?? "All Statuses")}>
          <SelectTrigger className="h-10 w-full rounded-[4px] border-[#c3c6d7] bg-[#f2f4f6] px-3 lg:w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {moderatorStatusOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex-1" />
        <Button type="button" variant="ghost" className="h-10 rounded-[4px] text-[#434655]">
          <Filter className="size-4" />
          More Filters
        </Button>
        <Button type="button" variant="ghost" onClick={resetFilters} className="h-10 rounded-[4px] text-[#434655]">
          <RotateCcw className="size-4" />
          Reset
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#c3c6d7] bg-white">
        <Table>
          <TableHeader className="bg-[#f2f4f6]">
            <TableRow className="hover:bg-transparent">
              {["Name & Email", "Specialization", "Verification Level", "Status", "Actions"].map((heading) => (
                <TableHead key={heading} className="h-14 px-6 text-[11px] font-semibold uppercase tracking-wide text-[#434655]">
                  {heading}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleModerators.map((moderator) => (
              <TableRow key={moderator.id} className="h-[76px] border-[#c3c6d7]/30">
                <TableCell className="px-6">
                  <div className="flex items-center gap-3">
                    <Image src={moderator.avatar} alt="" width={40} height={40} className="size-10 rounded-xl object-cover" />
                    <div>
                      <p className="font-bold text-[#191c1e]">{moderator.name}</p>
                      <p className="text-xs font-semibold text-[#434655]">{moderator.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-6 text-[#191c1e]">{moderator.specialization}</TableCell>
                <TableCell className="px-6"><LevelBadge level={moderator.verificationLevel} /></TableCell>
                <TableCell className="px-6"><ModeratorStatusBadge status={moderator.status} /></TableCell>
                <TableCell className="px-6 text-right">
                  <Button type="button" variant="ghost" size="icon" aria-label={`Actions for ${moderator.name}`}>
                    <MoreVertical className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-col gap-3 border-t border-[#c3c6d7] bg-[#f2f4f6] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold text-[#434655]">
            Showing 1 to {visibleModerators.length} of 28 moderators
          </p>
          <div className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon-sm" disabled aria-label="Previous page">‹</Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                type="button"
                variant={page === 1 ? "default" : "ghost"}
                size="icon"
                className={cn("size-8 rounded-[2px]", page === 1 && "bg-[#004ac6] hover:bg-[#003d9f]")}
              >
                {page}
              </Button>
            ))}
            <Button type="button" variant="ghost" size="icon-sm" aria-label="Next page">›</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LevelBadge({ level }: { level: VerificationLevel }) {
  const verified = level === "Level 2";
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm font-medium", verified ? "text-[#004ac6]" : "text-[#434655]")}>
      <BadgeCheck className="size-4" strokeWidth={1.8} />
      {level}
    </span>
  );
}

function ModeratorStatusBadge({ status }: { status: ModeratorStatus }) {
  const styles: Record<ModeratorStatus, string> = {
    Active: "bg-green-100 text-green-800",
    Pending: "bg-amber-100 text-amber-800",
    Suspended: "bg-red-100 text-red-800",
  };
  return <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", styles[status])}>{status}</span>;
}
