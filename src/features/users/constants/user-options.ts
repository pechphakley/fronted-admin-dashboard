import type { UserRole, UserStatus } from "@/features/users/types/user";

export const roleOptions: ReadonlyArray<{
  label: string;
  value: "all" | UserRole;
}> = [
  { label: "All Roles", value: "all" },
  { label: "Admins", value: "Admin" },
  { label: "Moderators", value: "Moderator" },
  { label: "Recruiters", value: "Recruiter" },
  { label: "Job Seekers", value: "Job Seeker" },
];

export const statusOptions: ReadonlyArray<{
  label: string;
  value: "all" | UserStatus;
}> = [
  { label: "All Statuses", value: "all" },
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Suspended", value: "Suspended" },
];
