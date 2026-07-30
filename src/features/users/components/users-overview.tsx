"use client";

import { useMemo, useState } from "react";
import { Ban, BadgeCheck, Hourglass, UserPlus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";
import { UsersFilters } from "@/features/users/components/users-filters";
import { UsersTable } from "@/features/users/components/users-table";
import { directoryUsers, userStats } from "@/lib/mock/users";

export function UsersOverview() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");

  const users = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return directoryUsers.filter((user) => {
      const matchesQuery =
        !normalizedQuery ||
        user.name.toLowerCase().includes(normalizedQuery) ||
        user.email.toLowerCase().includes(normalizedQuery) ||
        user.id.toLowerCase().includes(normalizedQuery);
      const matchesRole = role === "all" || user.role === role;
      const matchesStatus = status === "all" || user.status === status;
      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [query, role, status]);

  return (
    <div className="px-4 py-6 sm:px-8">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[30px] font-semibold tracking-[-0.3px] text-[#191c1e]">
            User Directory
          </h1>
          <p className="mt-1 text-base text-[#737686]">
            Manage and monitor all platform participants across roles.
          </p>
        </div>
        <Button className="h-11 rounded-[4px] bg-[#1fa628] px-5 font-semibold text-white hover:bg-[#188d21]">
          <UserPlus className="size-4" />
          Create User
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Users" value={userStats.total.toLocaleString()} note="↗ +2.4% this month" icon={Users} tone="green" />
        <StatCard label="Active" value={userStats.active.toLocaleString()} note="77.2% Activity Rate" icon={BadgeCheck} tone="green" />
        <StatCard label="Pending" value={userStats.pending.toLocaleString()} note="Requires attention" icon={Hourglass} tone="orange" />
        <StatCard label="Suspended" value={userStats.suspended.toLocaleString()} note="Security flagged" icon={Ban} tone="red" />
      </div>

      <div className="space-y-4">
        <UsersFilters
          query={query}
          role={role}
          status={status}
          onQueryChange={setQuery}
          onRoleChange={setRole}
          onStatusChange={setStatus}
        />
        <UsersTable users={users} />
      </div>
    </div>
  );
}
