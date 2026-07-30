export type ModeratorStatus = "Active" | "Pending" | "Suspended";
export type VerificationLevel = "Level 1" | "Level 2";

export interface Moderator {
  id: string;
  name: string;
  email: string;
  specialization: string;
  verificationLevel: VerificationLevel;
  status: ModeratorStatus;
  avatar: string;
}
