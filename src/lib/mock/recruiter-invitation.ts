import type { RecruiterInvitation } from "@/features/recruiters/types/recruiter-invitation";

export const recruiterInvitationDefaults: RecruiterInvitation = {
  fullName: "",
  workEmail: "",
  position: "Senior Talent Acquisition",
  department: "Human Resources",
  permissions: {
    viewCandidates: true,
    manageInterviews: true,
    editJobPostings: false,
  },
};
