import { redirect } from "next/navigation";

export default async function JobSeekerDetailPage({
  params,
}: {
  params: Promise<{ jobSeekerId: string }>;
}) {
  await params;
  redirect("/job-seekers");
}
