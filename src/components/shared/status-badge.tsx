import { CircleCheck, Clock3 } from "lucide-react";

import type {
  UserRole,
  UserStatus,
  VerificationStatus,
} from "@/features/users/types/user";
import { cn } from "@/lib/utils";

export function RoleBadge({ role }: { role: UserRole }) {
  const styles: Record<UserRole, string> = {
    Admin: "bg-blue-100 text-blue-700",
    Recruiter: "bg-purple-100 text-purple-700",
    "Job Seeker": "bg-slate-100 text-slate-700",
    Moderator: "bg-amber-100 text-amber-700",
  };

  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs", styles[role])}>
      {role}
    </span>
  );
}

export function UserStatusBadge({ status }: { status: UserStatus }) {
  const styles: Record<UserStatus, string> = {
    Active: "bg-[#22c55e] text-[#15803d]",
    Inactive: "bg-[#c3c6d7] text-[#737686]",
    Suspended: "bg-[#ef4444] text-[#b91c1c]",
  };

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
      <span className={cn("size-1.5 rounded-full", styles[status].split(" ")[0])} />
      <span className={styles[status].split(" ")[1]}>{status}</span>
    </span>
  );
}

export function VerificationBadge({
  status,
}: {
  status: VerificationStatus;
}) {
  const verified = status === "Verified";
  const pending = status === "Pending";
  const Icon = pending ? Clock3 : CircleCheck;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium",
        verified && "text-[#1fa628]",
        pending && "text-[#f97316]",
        status === "Unverified" && "text-[#737686]",
      )}
    >
      <Icon className="size-3.5" strokeWidth={2} />
      {status}
    </span>
  );
}
