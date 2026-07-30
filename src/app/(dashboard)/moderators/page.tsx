import type { Metadata } from "next";

import { ModeratorsOverview } from "@/features/moderators/components/moderators-overview";

export const metadata: Metadata = {
  title: "Moderator Management | InterviewAI",
};

export default function ModeratorsPage() {
  return <ModeratorsOverview />;
}
