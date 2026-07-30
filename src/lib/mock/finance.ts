import type { FinanceRecord } from "@/features/finance/types/finance-record";

export const financeRecord: FinanceRecord = {
  id: "INV-8821",
  createdAt: "Oct 12, 2023",
  status: "Pending Approval",
  employee: {
    name: "Sarah Jenkins",
    email: "s.jenkins@interviewai.com",
    role: "Senior Software Engineer",
    location: "New York, USA",
    avatar: "/assets/finance-sarah.png",
  },
  currency: "USD",
  totalAmount: "$8,450.00",
  baseSalary: "$7,200.00",
  performanceBonus: "$1,250.00",
  validationNote:
    "Automated validation confirmed these figures against current contract ID #ENG-990-2023.",
  activities: [
    {
      title: "Record Submitted",
      description: "Payroll cycle auto-generated record for review.",
      date: "Oct 12, 09:15 AM",
      tone: "success",
    },
    {
      title: "Automatic Validation",
      description: "System integrity checks passed. No discrepancies found.",
      date: "Oct 12, 11:30 AM",
      tone: "info",
    },
    {
      title: "Marked for Admin Review",
      description: "Flags: Manual verification required for bonus threshold.",
      date: "Oct 14, 02:45 PM",
      tone: "warning",
    },
  ],
  metadata: {
    department: "Engineering",
    dueDate: "Oct 24, 2023",
    type: "Monthly Payroll",
    contractId: "ENG-990-23",
    lastModified: "2 hours ago",
    assignee: {
      name: "David Chen",
      role: "Finance Lead",
      avatar: "/assets/finance-assignee.png",
    },
  },
};

export function getFinanceRecord(recordId: string) {
  return recordId ? financeRecord : undefined;
}
