import type { Metadata } from "next";

import { FinanceRecordDetail } from "@/features/finance/components/finance-record-detail";
import { financeRecord } from "@/lib/mock/finance";

export const metadata: Metadata = {
  title: "Finance Record Details",
};

export default function FinancePage() {
  return <FinanceRecordDetail record={financeRecord} />;
}
