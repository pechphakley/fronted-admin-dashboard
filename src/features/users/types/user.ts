export type UserRole = "Admin" | "Recruiter" | "Job Seeker" | "Moderator";
export type UserStatus = "Active" | "Inactive" | "Suspended";
export type VerificationStatus = "Verified" | "Pending" | "Unverified";

export interface DirectoryUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  verification: VerificationStatus;
  joinedAt: string;
  avatar: string;
}

export interface UserStats {
  total: number;
  active: number;
  pending: number;
  suspended: number;
}
