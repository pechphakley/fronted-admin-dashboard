export type RecruiterInvitation = {
  fullName: string;
  workEmail: string;
  position: string;
  department: string;
  permissions: {
    viewCandidates: boolean;
    manageInterviews: boolean;
    editJobPostings: boolean;
  };
};
