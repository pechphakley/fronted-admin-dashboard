import type { Recruiter } from "@/features/recruiters/types/recruiter";

export const recruiters: Recruiter[] = [
  {
    id: "REC-1001",
    name: "Sarah Jenkins",
    email: "sarah.j@techrecruit.com",
    position: "Senior Technical Recruiter",
    linkedIn: "linkedin.com/in/sjenk...",
    status: "Active",
    initials: "SJ",
  },
  {
    id: "REC-1002",
    name: "Marcus Chen",
    email: "m.chen@hiringflow.io",
    position: "Head of Talent",
    linkedIn: "linkedin.com/in/marcus...",
    status: "Pending",
    avatar: "/assets/recruiter-marcus.png",
    initials: "MC",
  },
  {
    id: "REC-1003",
    name: "Elena Rodriguez",
    email: "elena.r@globalhr.com",
    position: "Recruitment Specialist",
    linkedIn: "linkedin.com/in/elenar...",
    status: "Suspended",
    initials: "ER",
  },
  {
    id: "REC-1004",
    name: "David Kim",
    email: "dkim@innovatetalent.com",
    position: "Technical Sourcing Lead",
    linkedIn: "linkedin.com/in/dkim-t...",
    status: "Active",
    avatar: "/assets/recruiter-david.png",
    initials: "DK",
  },
];
