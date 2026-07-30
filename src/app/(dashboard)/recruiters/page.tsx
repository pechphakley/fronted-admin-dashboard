import type { Metadata } from "next";

import { RecruitersOverview } from "@/features/recruiters/components/recruiters-overview";

export const metadata: Metadata = {
  title: "Recruiter Management | InterviewAI",
};

export default function RecruitersPage() {
  return <RecruitersOverview />;
}
