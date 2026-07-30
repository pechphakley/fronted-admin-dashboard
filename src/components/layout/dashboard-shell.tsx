import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";

export function DashboardShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#078b00] p-0 lg:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1440px] overflow-hidden bg-white lg:rounded-[30px]">
        <AppSidebar />
        <div className="min-w-0 flex-1 bg-white">
          <AppHeader />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
