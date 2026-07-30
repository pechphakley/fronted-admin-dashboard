export type CandidateStatus = "Active" | "Open to Work" | "Placed";

export interface JobSeeker {
  id: string;
  name: string;
  email: string;
  headline: string;
  currentPosition: string;
  salary: number;
  location: string;
  status: CandidateStatus;
  verified: boolean;
  avatar: string;
}
