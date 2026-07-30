"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Fingerprint,
  History,
  Info,
  Mail,
  MapPin,
  PencilLine,
  Printer,
  Trophy,
  WalletCards,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import type { FinanceRecord } from "@/features/finance/types/finance-record";
import { cn } from "@/lib/utils";

const activityStyles = {
  success: "border-[#006c49] bg-[#e4f7ee] text-[#006c49]",
  info: "border-[#3f6375] bg-[#e7f4fa] text-[#3f6375]",
  warning: "border-[#855300] bg-[#fff2d9] text-[#855300]",
};

export function FinanceRecordDetail({ record }: { record: FinanceRecord }) {
  const act = (message: string) => toast.success(message);

  return (
    <main className="min-h-[calc(100vh-70px)] bg-[#f8f9fa] px-4 py-5 sm:px-6 sm:py-6">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-[#5d6070]">
            <Link href="/finance" className="hover:text-[#006c49]">Finance</Link>
            <ChevronRight className="size-3.5" />
            <span>Management</span>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-[#191c1e]">Record Details</span>
          </nav>
          <h1 className="text-2xl font-bold tracking-[-0.4px] text-[#191c1e]">
            Record Details - {record.employee.name}
          </h1>
          <p className="mt-1 text-sm text-[#5d6070]">
            Ref: #{record.id} <span className="mx-1">•</span> Created on {record.createdAt}
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-7 h-10 rounded-[4px] border-[#c4c5d5] bg-[#e1e3e4] px-4 font-semibold"
          onClick={() => act("PDF export prepared")}
        >
          <Printer className="size-4" />
          Export PDF
        </Button>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <div className="space-y-6">
          <section className="rounded-lg border border-[#c4c5d5] bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative">
                <Image
                  src={record.employee.avatar}
                  alt={record.employee.name}
                  width={80}
                  height={80}
                  className="size-20 rounded-xl border-2 border-[#dde1ff] object-cover"
                />
                <span className="absolute -right-1 -bottom-1 flex size-6 items-center justify-center rounded-full border-2 border-[#f8f9fa] bg-[#1fa628] text-white">
                  <Check className="size-3" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold text-[#191c1e]">{record.employee.name}</h2>
                  <span className="rounded-full bg-[#611e001a] px-3 py-1 text-xs font-bold tracking-[0.6px] text-[#872d00]">
                    {record.status.toUpperCase()}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#444653]">
                  <span className="flex items-center gap-1.5"><Mail className="size-3.5" />{record.employee.email}</span>
                  <span className="flex items-center gap-1.5"><BriefcaseBusiness className="size-3.5" />{record.employee.role}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="size-3.5" />{record.employee.location}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-[#c4c5d5] bg-white p-5 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-semibold text-[#191c1e]">Financial Breakdown</h2>
                <span className="rounded-sm bg-[#edeeef] px-2 py-1 text-xs font-semibold text-[#444653]">Currency: {record.currency}</span>
              </div>
              <div className="rounded-lg bg-[#1fa628] p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.55px] text-white/80">TOTAL AMOUNT</p>
                    <p className="text-[32px] font-extrabold leading-10">{record.totalAmount}</p>
                  </div>
                  <WalletCards className="size-9 text-white/25" />
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <AmountCard icon={BadgeDollarSign} label="Base Salary" amount={record.baseSalary} />
                <AmountCard icon={Trophy} label="Performance Bonus" amount={record.performanceBonus} />
              </div>
              <div className="mt-4 flex gap-2 rounded border border-dashed border-[#c4c5d5] bg-[#f8f9fa] p-3 text-xs leading-5 text-[#444653]">
                <Info className="mt-0.5 size-4 shrink-0" />
                <p>{record.validationNote}</p>
              </div>
          </section>

          <section className="rounded-lg border border-[#c4c5d5] bg-white p-5 shadow-sm">
            <div className="mb-5">
              <h2 className="font-bold text-[#191c1e]">Activity Log</h2>
            </div>
            <div>
              {record.activities.map((activity, index) => (
                <div key={activity.title} className="relative flex gap-3 pb-6 last:pb-0">
                  {index < record.activities.length - 1 && (
                    <span className="absolute top-8 bottom-0 left-[15px] w-px bg-[#d5d6df]" />
                  )}
                  <span className={cn("relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border", activityStyles[activity.tone])}>
                    {activity.tone === "success" ? <Check className="size-4" /> : activity.tone === "info" ? <Clock3 className="size-4" /> : <CircleAlert className="size-4" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="text-sm font-bold text-[#191c1e]">{activity.title}</p>
                      <time className="text-[11px] text-[#707382]">{activity.date}</time>
                    </div>
                    <p className="mt-1 text-xs text-[#5d6070]">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-5">
          <SideCard title="Required Actions">
            <Button className="h-12 w-full rounded-[10px] bg-[#006e33] text-base font-normal text-white hover:bg-[#00583c]" onClick={() => act("Record approved")}>
              <CheckCircle2 className="size-4" />Approve Record
            </Button>
            <Button className="mt-3 h-12 w-full rounded-[10px] bg-[#ba1a1a] text-base font-normal text-white hover:bg-[#a31515]" onClick={() => toast.error("Record rejected")}>
              <X className="size-5" />Reject Record
            </Button>
          </SideCard>

          <SideCard title="Verification Tools">
            <ToolButton icon={Fingerprint} label="Verify Identity" onClick={() => act("Identity verification opened")} />
            <ToolButton icon={PencilLine} label="Edit Details" onClick={() => act("Edit mode opened")} />
            <ToolButton icon={History} label="Change Logs" onClick={() => act("Change log opened")} last />
          </SideCard>

          <SideCard title="Metadata">
            <dl className="space-y-3 text-xs">
              <Meta label="Department" value={record.metadata.department} />
              <Meta label="Due Date" value={record.metadata.dueDate} />
              <Meta label="Type" value={record.metadata.type} />
              <Meta label="Contract ID" value={record.metadata.contractId} />
              <Meta label="Last Modified" value={record.metadata.lastModified} />
            </dl>
            <div className="mt-4 border-t border-[#dedfe9] pt-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.6px] text-[#707382]">Assigned to</p>
              <div className="flex items-center gap-3">
                <Image src={record.metadata.assignee.avatar} alt={record.metadata.assignee.name} width={36} height={36} className="size-9 rounded-lg object-cover" />
                <div>
                  <p className="text-xs font-bold text-[#191c1e]">{record.metadata.assignee.name}</p>
                  <p className="text-[11px] text-[#5d6070]">{record.metadata.assignee.role}</p>
                </div>
              </div>
            </div>
          </SideCard>
        </aside>
      </div>
    </main>
  );
}

function AmountCard({ icon: Icon, label, amount }: { icon: typeof WalletCards; label: string; amount: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#c4c5d5] p-4">
      <span className="flex size-10 items-center justify-center rounded-xl bg-[#d8e2ff] text-[#0058be]">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-[11px] font-semibold text-[#5d6070]">{label}</p>
        <p className="mt-1 text-lg font-bold text-[#191c1e]">{amount}</p>
      </div>
    </div>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-[#c4c5d5] bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.7px] text-[#5d6070]">{title}</h2>
      {children}
    </section>
  );
}

function ToolButton({ icon: Icon, label, onClick, last = false }: { icon: typeof Fingerprint; label: string; onClick: () => void; last?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={cn("flex w-full items-center gap-3 border-b border-[#dedfe9] py-3 text-left text-xs font-semibold text-[#191c1e] hover:text-[#006c49]", last && "border-b-0 pb-0")}>
      <Icon className="size-4 text-[#5d6070]" />
      <span className="flex-1">{label}</span>
      <ChevronRight className="size-4 text-[#8b8d99]" />
    </button>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-[#707382]">{label}</dt>
      <dd className="text-right font-semibold text-[#191c1e]">{value}</dd>
    </div>
  );
}
