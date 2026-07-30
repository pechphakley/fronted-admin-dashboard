"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { BriefcaseBusiness, Eye, Info, Mail, PencilLine, ShieldCheck, Video } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { recruiterInvitationDefaults } from "@/lib/mock/recruiter-invitation";

const invitationSchema = z.object({
  fullName: z.string().min(2, "Enter the recruiter’s full name"),
  workEmail: z.email("Enter a valid work email"),
  position: z.string().min(2),
  department: z.string().min(2),
  permissions: z.object({
    viewCandidates: z.boolean(),
    manageInterviews: z.boolean(),
    editJobPostings: z.boolean(),
  }),
});

type InvitationValues = z.infer<typeof invitationSchema>;

export function InviteRecruiterForm() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InvitationValues>({
    resolver: zodResolver(invitationSchema),
    defaultValues: recruiterInvitationDefaults,
  });

  const submit = async (values: InvitationValues) => {
    await Promise.resolve(values);
    toast.success("Recruiter invitation sent");
    router.push("/recruiters");
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="grid items-start gap-6 px-4 py-5 sm:px-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-4">
        <Card title="Recruiter Details" description="Provide basic identification information for the new recruiter invitation.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" error={errors.fullName?.message}>
              <Input {...register("fullName")} placeholder="e.g. Sarah Jenkins" className="h-10 rounded-[4px] border-[#c4c5d5] bg-[#f3f4f5] px-3" />
            </Field>
            <Field label="Work Email" error={errors.workEmail?.message}>
              <Input {...register("workEmail")} type="email" placeholder="sarah.j@company.com" className="h-10 rounded-[4px] border-[#c4c5d5] bg-[#f3f4f5] px-3" />
            </Field>
            <Field label="Position">
              <Input {...register("position")} className="h-10 rounded-[4px] border-[#c4c5d5] bg-[#f3f4f5] px-3" />
            </Field>
            <Field label="Department">
              <select {...register("department")} className="h-10 w-full rounded-[4px] border border-[#c4c5d5] bg-[#f3f4f5] px-3 text-sm outline-none focus:border-[#1fa628]">
                <option>Human Resources</option>
                <option>Talent Acquisition</option>
                <option>People Operations</option>
              </select>
            </Field>
          </div>
        </Card>

        <Card title="System Permissions" description="Define granular access levels for this recruiter profile.">
          <div className="space-y-1">
            <Permission control={control} name="permissions.viewCandidates" icon={Eye} title="View Candidates" description="Allows access to candidate profiles and portfolios." />
            <Permission control={control} name="permissions.manageInterviews" icon={Video} title="Manage Interviews" description="Schedule, reschedule, and participate in AI-assisted interviews." />
            <Permission control={control} name="permissions.editJobPostings" icon={PencilLine} title="Edit Job Postings" description="Modify active job descriptions and evaluation criteria." />
          </div>
        </Card>

        <div className="flex justify-end gap-4 pt-3">
          <Button type="button" variant="outline" className="h-10 rounded-[4px] border-[#757684] px-6 text-xs font-semibold" onClick={() => router.push("/recruiters")}>Cancel</Button>
          <Button type="submit" disabled={isSubmitting} className="h-10 rounded-[4px] bg-[#1fa628] px-8 text-xs font-semibold text-white shadow-md hover:bg-[#188d21]">Send Invitation</Button>
        </div>
      </div>

      <aside className="space-y-6">
        <Card title="Invitation Preview">
          <div className="rounded-lg border border-dashed border-[#757684] bg-[#f3f4f5] p-5">
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#dde1ff] text-[#1fa628]"><Mail className="size-5 fill-current" /></div>
            <div className="mb-3 h-4 w-3/4 rounded-sm bg-[#c4c5d5]" />
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded-sm bg-[#c4c5d5]" />
              <div className="h-2.5 w-5/6 rounded-sm bg-[#c4c5d5]" />
              <div className="h-2.5 w-2/3 rounded-sm bg-[#c4c5d5]" />
            </div>
            <div className="mt-4 h-8 w-36 rounded-sm bg-[#1fa628]/40" />
            <div className="absolute" />
          </div>
          <p className="mt-4 text-xs italic leading-5 text-[#444653]">&quot;Welcome to the team! You&apos;ve been invited by Admin to join InterviewAI as a Senior Recruiter. Click below to secure your access.&quot;</p>
          <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#1fa628]"><Info className="size-[15px]" />Preview reflects actual email template</p>
        </Card>

        <div className="relative h-48 overflow-hidden rounded-lg">
          <Image src="/assets/recruiter-enterprise-analytics.png" alt="Enterprise recruiting analytics dashboard" fill className="object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 to-transparent p-4 text-white">
            <h3 className="font-semibold">Enterprise Analytics</h3>
            <p className="text-xs text-white/80">Empower your recruiters with real-time talent insights.</p>
          </div>
        </div>

        <section className="rounded-lg border border-[#c4c5d5] bg-[#f3f4f5]/50 p-5">
          <h3 className="mb-4 text-xs font-semibold tracking-[0.6px] text-[#1fa628]">PERMISSION HELP</h3>
          <div className="space-y-3 text-xs leading-4 text-[#444653]">
            <p className="flex gap-3"><BriefcaseBusiness className="size-4 shrink-0" /><span><b className="text-[#191c1d]">View Only:</b> Standard recruiters can only observe candidate flow.</span></p>
            <p className="flex gap-3"><ShieldCheck className="size-4 shrink-0" /><span><b className="text-[#191c1d]">Privileged:</b> Senior recruiters can override AI scoring metrics.</span></p>
          </div>
        </section>
      </aside>
    </form>
  );
}

function Card({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="overflow-hidden rounded-lg border border-[#c4c5d5] bg-white">
      <header className="border-b border-[#c4c5d5] px-5 py-4">
        <h2 className="text-base font-semibold text-[#191c1d]">{title}</h2>
        {description && <p className="text-xs text-[#444653]">{description}</p>}
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="space-y-1.5 text-xs font-semibold text-[#191c1d]">{label}{children}{error && <span className="block font-normal text-red-600">{error}</span>}</label>;
}

function Permission({ control, name, icon: Icon, title, description }: { control: ControlType; name: PermissionName; icon: typeof Eye; title: string; description: string }) {
  return (
    <div className="flex items-center gap-3 rounded p-3">
      <Icon className="size-5 shrink-0 text-[#0878d1]" />
      <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#191c1d]">{title}</p><p className="text-xs text-[#444653]">{description}</p></div>
      <Controller control={control} name={name} render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} className="data-checked:bg-[#1fa628]" aria-label={title} />} />
    </div>
  );
}

type ControlType = ReturnType<typeof useForm<InvitationValues>>["control"];
type PermissionName = "permissions.viewCandidates" | "permissions.manageInterviews" | "permissions.editJobPostings";
