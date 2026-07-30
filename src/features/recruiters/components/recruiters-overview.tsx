"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MoreVertical, Plus, SlidersHorizontal } from "lucide-react";

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
  recruiterPositionOptions,
  recruiterStatusOptions,
} from "@/features/recruiters/constants/recruiter-options";
import type {
  Recruiter,
  RecruiterStatus,
} from "@/features/recruiters/types/recruiter";
import { recruiters } from "@/lib/mock/recruiters";
import { cn } from "@/lib/utils";

export function RecruitersOverview() {
  const [position, setPosition] = useState("All Positions");
  const [status, setStatus] = useState("All Statuses");

  const visibleRecruiters = useMemo(
    () =>
      recruiters.filter(
        (recruiter) =>
          (position === "All Positions" || recruiter.position === position) &&
          (status === "All Statuses" || recruiter.status === status),
      ),
    [position, status],
  );

  return (
    <div className="px-4 py-8 sm:px-8">
      <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <h1 className="text-[30px] font-semibold tracking-[-0.3px] text-[#191c1e]">
            Recruiter Management
          </h1>
          <p className="mt-1 max-w-sm text-base leading-6 text-[#434655]">
            Manage, verify, and monitor recruitment professionals on the
            platform.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Select value={position} onValueChange={(value) => setPosition(value ?? "All Positions")}>
            <SelectTrigger className="h-10 w-full rounded-[4px] border-[#c3c6d7] bg-white px-4 sm:w-60">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {recruiterPositionOptions.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={status} onValueChange={(value) => setStatus(value ?? "All Statuses")}>
            <SelectTrigger className="h-10 w-full rounded-[4px] border-[#c3c6d7] bg-white px-4 sm:w-36">
              <SelectValue />
              <SlidersHorizontal className="size-4 text-[#434655]" />
            </SelectTrigger>
            <SelectContent>
              {recruiterStatusOptions.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            render={<Link href="/recruiters/invite" />}
            nativeButton={false}
            className="min-h-10 rounded-[4px] bg-[#1fa628] px-4 text-base text-white hover:bg-[#188d21]"
          >
            <Plus className="size-4" />
            Invite Recruiter
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#c3c6d7] bg-white">
        <Table>
          <TableHeader className="bg-[#f2f4f6]">
            <TableRow className="hover:bg-transparent">
              {["Name", "Position", "LinkedIn URL", "Status", "Actions"].map((heading) => (
                <TableHead key={heading} className="h-12 px-6 text-xs font-semibold uppercase tracking-[0.6px] text-[#434655]">
                  {heading}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleRecruiters.map((recruiter) => (
              <TableRow key={recruiter.id} className="h-20 border-[#c3c6d7]/30">
                <TableCell className="px-6">
                  <RecruiterIdentity recruiter={recruiter} />
                </TableCell>
                <TableCell className="max-w-48 whitespace-normal px-6 text-base leading-6 text-[#434655]">
                  {recruiter.position}
                </TableCell>
                <TableCell className="px-6">
                  <a href={`https://${recruiter.linkedIn.replace("...", "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-[#1fa628]">
                    {recruiter.linkedIn}
                    <ExternalLink className="size-3" />
                  </a>
                </TableCell>
                <TableCell className="px-6"><RecruiterStatusBadge status={recruiter.status} /></TableCell>
                <TableCell className="px-6 text-right">
                  <Button type="button" variant="ghost" size="icon" aria-label={`Actions for ${recruiter.name}`}>
                    <MoreVertical className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between border-t border-[#c3c6d7] bg-[#f2f4f6] px-6 py-4">
          <p className="text-sm text-[#434655]">
            Showing 1-{visibleRecruiters.length} of 128 recruiters
          </p>
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="icon-sm" disabled aria-label="Previous page" className="rounded-[4px] border-[#c3c6d7]">‹</Button>
            <Button type="button" variant="outline" size="icon-sm" aria-label="Next page" className="rounded-[4px] border-[#c3c6d7]">›</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecruiterIdentity({ recruiter }: { recruiter: Recruiter }) {
  return (
    <div className="flex items-center gap-3">
      {recruiter.avatar ? (
        <Image src={recruiter.avatar} alt="" width={40} height={40} className="size-10 rounded-xl object-cover" />
      ) : (
        <span className={cn("flex size-10 items-center justify-center rounded-xl text-base font-bold", recruiter.initials === "SJ" ? "bg-blue-100 text-[#1fa628]" : "bg-slate-200 text-[#4d556b]")}>
          {recruiter.initials}
        </span>
      )}
      <div>
        <p className="font-medium text-[#191c1e]">{recruiter.name}</p>
        <p className="text-sm text-[#434655]">{recruiter.email}</p>
      </div>
    </div>
  );
}

function RecruiterStatusBadge({ status }: { status: RecruiterStatus }) {
  const styles: Record<RecruiterStatus, string> = {
    Active: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Suspended: "bg-red-100 text-red-800",
  };
  return <span className={cn("rounded-full px-3 py-1 text-xs font-bold", styles[status])}>{status}</span>;
}
