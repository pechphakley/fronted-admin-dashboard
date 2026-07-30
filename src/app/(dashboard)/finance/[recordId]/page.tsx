import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinanceRecordDetail } from "@/features/finance/components/finance-record-detail";
import { getFinanceRecord } from "@/lib/mock/finance";

export const metadata: Metadata = {
  title: "Finance Record Details",
};

export default async function FinanceRecordDetailPage({
  params,
}: {
  params: Promise<{ recordId: string }>;
}) {
  const { recordId } = await params;
  const record = getFinanceRecord(recordId);

  if (!record) notFound();

  return <FinanceRecordDetail record={record} />;
}
