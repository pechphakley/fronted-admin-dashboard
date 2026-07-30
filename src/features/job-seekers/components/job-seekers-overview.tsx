"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Eye, Pencil, SlidersHorizontal } from "lucide-react";

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
  availabilityOptions,
  locationOptions,
  salaryOptions,
  verificationOptions,
} from "@/features/job-seekers/constants/job-seeker-options";
import type {
  CandidateStatus,
} from "@/features/job-seekers/types/job-seeker";
import { jobSeekers } from "@/lib/mock/job-seekers";
import { cn } from "@/lib/utils";

export function JobSeekersOverview() {
  const [location, setLocation] = useState("All Locations");
  const [salary, setSalary] = useState("Any Range");
  const [availability, setAvailability] = useState("All Availability");
  const [verification, setVerification] = useState("Any Status");
  const [applied, setApplied] = useState({
    location: "All Locations",
    salary: "Any Range",
    availability: "All Availability",
    verification: "Any Status",
  });

  const visibleCandidates = useMemo(
    () =>
      jobSeekers.filter((candidate) => {
        const matchesLocation =
          applied.location === "All Locations" ||
          candidate.location === applied.location;
        const matchesSalary =
          applied.salary === "Any Range" ||
          (applied.salary === "$150k+" && candidate.salary >= 150_000) ||
          (applied.salary === "$100k-$149k" &&
            candidate.salary >= 100_000 &&
            candidate.salary < 150_000);
        const matchesAvailability =
          applied.availability === "All Availability" ||
          candidate.status === applied.availability;
        const matchesVerification =
          applied.verification === "Any Status" ||
          (applied.verification === "Verified" && candidate.verified) ||
          (applied.verification === "Unverified" && !candidate.verified);
        return (
          matchesLocation &&
          matchesSalary &&
          matchesAvailability &&
          matchesVerification
        );
      }),
    [applied],
  );

  const applyFilters = () =>
    setApplied({ location, salary, availability, verification });

  return (
    <div className="px-4 py-8 sm:px-8">
      <div className="mb-6">
        <h1 className="text-[30px] font-semibold tracking-[-0.3px] text-[#191c1e]">
          Job Seeker Management
        </h1>
        <p className="mt-1 text-base text-[#434655]">
          Review and manage candidate profiles, preferences, and availability.
        </p>
      </div>

      <div className="mb-6 grid gap-3 rounded-lg border border-[#c3c6d7] bg-white p-4 sm:grid-cols-2 xl:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
        <FilterSelect label="Location" value={location} options={locationOptions} onChange={setLocation} />
        <FilterSelect label="Salary Range" value={salary} options={salaryOptions} onChange={setSalary} />
        <FilterSelect label="Availability" value={availability} options={availabilityOptions} onChange={setAvailability} />
        <FilterSelect label="Verification Status" value={verification} options={verificationOptions} onChange={setVerification} />
        <Button type="button" onClick={applyFilters} className="mt-auto h-10 rounded-[4px] bg-[#004ac6] px-6 text-white hover:bg-[#003d9f]">
          <SlidersHorizontal className="size-4" />
          Apply Filters
        </Button>
      </div>

      <div className="min-h-[430px] overflow-hidden rounded-lg border border-[#c3c6d7] bg-white">
        <Table>
          <TableHeader className="bg-[#f2f4f6]">
            <TableRow className="hover:bg-transparent">
              {["Name", "Headline", "Current Position", "Salary", "Location", "Status", "Verification", "Actions"].map((heading) => (
                <TableHead key={heading} className="h-14 px-5 text-xs font-semibold uppercase tracking-wide text-[#434655]">
                  {heading}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleCandidates.map((candidate) => (
              <TableRow key={candidate.id} className="h-[88px] border-[#c3c6d7]">
                <TableCell className="px-5">
                  <div className="flex items-center gap-3">
                    <Image src={candidate.avatar} alt="" width={40} height={40} className="size-10 rounded-xl object-cover" />
                    <div>
                      <p className="text-base text-[#191c1e]">{candidate.name}</p>
                      <p className="text-xs text-[#434655]">{candidate.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="max-w-32 whitespace-normal px-5 text-[#191c1e]">{candidate.headline}</TableCell>
                <TableCell className="max-w-36 whitespace-normal px-5 text-[#191c1e]">{candidate.currentPosition}</TableCell>
                <TableCell className="px-5 text-[#191c1e]">${candidate.salary.toLocaleString()}</TableCell>
                <TableCell className="max-w-32 whitespace-normal px-5 text-[#191c1e]">{candidate.location}</TableCell>
                <TableCell className="px-5"><CandidateStatusBadge status={candidate.status} /></TableCell>
                <TableCell className="px-5">
                  <span className="inline-flex items-center gap-1 text-base text-[#004ac6]">
                    <BadgeCheck className="size-4" />
                    Verified
                  </span>
                </TableCell>
                <TableCell className="px-5">
                  <div className="flex gap-1">
                    <Button render={<Link href={`/job-seekers/${candidate.id}`} />} nativeButton={false} variant="ghost" size="icon-sm" aria-label={`View ${candidate.name}`}>
                      <Eye className="size-[15px]" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon-sm" aria-label={`Edit ${candidate.name}`}>
                      <Pencil className="size-[15px]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex flex-col gap-3 border-t border-[#c3c6d7] bg-[#f2f4f6] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#434655]">
            Showing 1 to {visibleCandidates.length} of 248 candidates
          </p>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="icon-sm" disabled aria-label="Previous page" className="rounded-[2px]">‹</Button>
            {[1, 2, 3].map((page) => (
              <Button key={page} type="button" variant={page === 1 ? "default" : "outline"} size="icon" className={cn("size-8 rounded-[2px]", page === 1 && "bg-[#004ac6] hover:bg-[#003d9f]")}>
                {page}
              </Button>
            ))}
            <Button type="button" variant="outline" size="icon-sm" aria-label="Next page" className="rounded-[2px]">›</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-[#434655]">{label}</span>
      <Select value={value} onValueChange={(nextValue) => onChange(nextValue ?? value)}>
        <SelectTrigger className="h-10 w-full rounded-[4px] border-[#c3c6d7] bg-white px-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => <SelectItem key={option} value={option}>{option}</SelectItem>)}
        </SelectContent>
      </Select>
    </label>
  );
}

function CandidateStatusBadge({ status }: { status: CandidateStatus }) {
  const styles: Record<CandidateStatus, string> = {
    Active: "bg-green-100 text-green-800",
    "Open to Work": "bg-blue-100 text-blue-800",
    Placed: "bg-gray-100 text-gray-800",
  };
  return <span className={cn("inline-flex max-w-20 rounded-full px-2.5 py-1 text-xs font-medium whitespace-normal", styles[status])}>{status}</span>;
}
