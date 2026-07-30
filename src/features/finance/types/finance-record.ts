export type FinanceActivity = {
  title: string;
  description: string;
  date: string;
  tone: "success" | "info" | "warning";
};

export type FinanceRecord = {
  id: string;
  createdAt: string;
  status: "Pending Approval" | "Approved" | "Rejected";
  employee: {
    name: string;
    email: string;
    role: string;
    location: string;
    avatar: string;
  };
  currency: string;
  totalAmount: string;
  baseSalary: string;
  performanceBonus: string;
  validationNote: string;
  activities: FinanceActivity[];
  metadata: {
    department: string;
    dueDate: string;
    type: string;
    contractId: string;
    lastModified: string;
    assignee: {
      name: string;
      role: string;
      avatar: string;
    };
  };
};
