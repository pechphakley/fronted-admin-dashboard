export type RecruiterStatus = "Active" | "Pending" | "Suspended";

export interface Recruiter {
  id: string;
  name: string;
  email: string;
  position: string;
  linkedIn: string;
  status: RecruiterStatus;
  avatar?: string;
  initials: string;
}
