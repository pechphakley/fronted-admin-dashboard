import type { Metadata } from "next";

import { JobSeekersOverview } from "@/features/job-seekers/components/job-seekers-overview";

export const metadata: Metadata = {
  title: "Job Seeker Management | InterviewAI",
};

export default function JobSeekersPage() {
  return <JobSeekersOverview />;
}
