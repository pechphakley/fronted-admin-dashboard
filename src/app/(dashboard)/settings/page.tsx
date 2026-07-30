import type { Metadata } from "next";

import { SettingsOverview } from "@/features/settings/components/settings-overview";

export const metadata: Metadata = {
  title: "System Settings | InterviewAI",
};

export default function SettingsPage() {
  return <SettingsOverview />;
}
