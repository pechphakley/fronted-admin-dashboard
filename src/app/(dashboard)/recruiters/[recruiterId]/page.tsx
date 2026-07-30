import { redirect } from "next/navigation";

export default async function RecruiterDetailPage({
  params,
}: {
  params: Promise<{ recruiterId: string }>;
}) {
  await params;
  redirect("/recruiters");
}
