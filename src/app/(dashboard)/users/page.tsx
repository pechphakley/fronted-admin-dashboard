import type { Metadata } from "next";

import { UsersOverview } from "@/features/users/components/users-overview";

export const metadata: Metadata = {
  title: "User Directory | InterviewAI",
};

export default function UsersPage() {
  return <UsersOverview />;
}
