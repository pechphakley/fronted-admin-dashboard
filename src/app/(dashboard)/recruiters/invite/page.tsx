import type { Metadata } from "next";

import { InviteRecruiterForm } from "@/features/recruiters/components/invite-recruiter-form";

export const metadata: Metadata = {
  title: "Invite Recruiter",
};

export default function InviteRecruiterPage() {
  return <InviteRecruiterForm />;
}
