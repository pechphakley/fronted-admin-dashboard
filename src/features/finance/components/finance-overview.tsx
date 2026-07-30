import Link from "next/link";
import { ArrowRight, CircleDollarSign, Clock3, FileCheck2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { financeRecord } from "@/lib/mock/finance";

export function FinanceOverview() {
  return (
    <main className="px-4 py-8 sm:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-[-0.3px] text-[#191c1e]">
          Finance Management
        </h1>
        <p className="mt-1 text-base text-[#434655]">
          Review payroll records, transactions, and pending approvals.
        </p>
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <SummaryCard icon={CircleDollarSign} label="Total Amount" value={financeRecord.totalAmount} />
        <SummaryCard icon={Clock3} label="Pending Approval" value="1 record" />
        <SummaryCard icon={FileCheck2} label="Validated Records" value="1 record" />
      </div>

      <section className="overflow-hidden rounded-lg border border-[#c4c5d5] bg-white">
        <div className="border-b border-[#c4c5d5] px-5 py-4">
          <h2 className="font-semibold text-[#191c1e]">Finance Records</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-[#f2f4f6] text-xs uppercase tracking-[0.5px] text-[#434655]">
              <tr>
                {["Reference", "Employee", "Department", "Amount", "Status", "Action"].map((heading) => (
                  <th key={heading} className="px-6 py-4 last:text-right">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#c4c5d5] text-sm">
                <td className="px-6 py-5 font-semibold">#{financeRecord.id}</td>
                <td className="px-6 py-5">
                  <p className="font-semibold text-[#191c1e]">{financeRecord.employee.name}</p>
                  <p className="text-xs text-[#5d6070]">{financeRecord.employee.email}</p>
                </td>
                <td className="px-6 py-5">{financeRecord.metadata.department}</td>
                <td className="px-6 py-5 font-semibold">{financeRecord.totalAmount}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-[#fff0d2] px-3 py-1 text-xs font-bold text-[#855300]">
                    {financeRecord.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <Button
                    render={<Link href={`/finance/${financeRecord.id}`} />}
                    nativeButton={false}
                    variant="ghost"
                    className="text-[#078b00]"
                  >
                    View details <ArrowRight className="size-4" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function SummaryCard({ icon: Icon, label, value }: {
  icon: typeof CircleDollarSign;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-[#c4c5d5] bg-white p-5">
      <Icon className="mb-4 size-5 text-[#078b00]" />
      <p className="text-xs font-semibold text-[#5d6070]">{label}</p>
      <p className="mt-1 text-xl font-bold text-[#191c1e]">{value}</p>
    </div>
  );
}
