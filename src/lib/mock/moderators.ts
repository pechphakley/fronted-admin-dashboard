import type { Moderator } from "@/features/moderators/types/moderator";

export const moderators: Moderator[] = [
  {
    id: "MOD-1001",
    name: "Sarah Jenkins",
    email: "sarah.j@interview.ai",
    specialization: "Technical (Backend)",
    verificationLevel: "Level 2",
    status: "Active",
    avatar: "/assets/moderator-sarah.png",
  },
  {
    id: "MOD-1002",
    name: "Marcus Thorne",
    email: "m.thorne@interview.ai",
    specialization: "System Architecture",
    verificationLevel: "Level 1",
    status: "Pending",
    avatar: "/assets/moderator-marcus.png",
  },
  {
    id: "MOD-1003",
    name: "Elena Rodriguez",
    email: "elena.r@interview.ai",
    specialization: "Behavioral",
    verificationLevel: "Level 2",
    status: "Suspended",
    avatar: "/assets/moderator-elena.png",
  },
  {
    id: "MOD-1004",
    name: "David Park",
    email: "d.park@interview.ai",
    specialization: "Product Management",
    verificationLevel: "Level 2",
    status: "Active",
    avatar: "/assets/moderator-david.png",
  },
];
