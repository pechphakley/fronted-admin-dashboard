import type {
  DirectoryUser,
  UserStats,
} from "@/features/users/types/user";

export const userStats: UserStats = {
  total: 24_512,
  active: 18_922,
  pending: 312,
  suspended: 145,
};

export const directoryUsers: DirectoryUser[] = [
  {
    id: "UA-9021",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Admin",
    status: "Active",
    verification: "Verified",
    joinedAt: "Oct 12, 2023",
    avatar: "/assets/user-jane.png",
  },
  {
    id: "UA-8842",
    name: "Marcus Sterling",
    email: "m.sterling@talent-hub.com",
    role: "Recruiter",
    status: "Active",
    verification: "Pending",
    joinedAt: "Nov 03, 2023",
    avatar: "/assets/user-marcus.png",
  },
  {
    id: "UA-7721",
    name: "Leo Liang",
    email: "leo.liang@cloudsys.net",
    role: "Job Seeker",
    status: "Inactive",
    verification: "Verified",
    joinedAt: "Jan 15, 2024",
    avatar: "/assets/user-leo.png",
  },
  {
    id: "UA-6549",
    name: "Sarah Chen",
    email: "s.chen@interact.ai",
    role: "Moderator",
    status: "Suspended",
    verification: "Unverified",
    joinedAt: "Feb 20, 2024",
    avatar: "/assets/user-sarah.png",
  },
];
