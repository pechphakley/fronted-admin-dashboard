"use client";

import { useState } from "react";
import {
  Bell,
  Bot,
  Braces,
  LockKeyhole,
  Settings2,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  SettingsPreferences,
  SettingsTab,
} from "@/features/settings/types/settings";
import { defaultSettings, settingsOptions } from "@/lib/mock/settings";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "general", label: "General", icon: Settings2 },
  { id: "ai", label: "AI Configuration", icon: Bot },
  { id: "security", label: "Security", icon: LockKeyhole },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "integrations", label: "API & Integrations", icon: Braces },
] as const;

export function SettingsOverview() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");
  const [preferences, setPreferences] =
    useState<SettingsPreferences>(defaultSettings);
  const [savedPreferences, setSavedPreferences] =
    useState<SettingsPreferences>(defaultSettings);

  const reset = () => setPreferences(defaultSettings);
  const cancel = () => setPreferences(savedPreferences);
  const save = () => {
    setSavedPreferences(preferences);
    toast.success("System settings saved");
  };

  return (
    <div className="px-4 py-7 sm:px-8 lg:px-8">
      <div className="mb-6">
        <h1 className="text-[30px] font-semibold tracking-[-0.3px] text-[#191c1e]">
          System Settings
        </h1>
        <p className="mt-1 max-w-2xl text-base leading-6 text-[#434655]">
          Manage your global platform configurations, AI scoring sensitivity,
          security protocols, and integration endpoints from one centralized
          dashboard.
        </p>
      </div>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(220px,1fr)_minmax(540px,3fr)]">
        <nav
          aria-label="Settings sections"
          className="rounded-lg border border-[#c3c6d7] bg-white p-[9px]"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-[4px] px-4 py-3 text-left text-sm font-medium text-[#434655] transition-colors",
                  active &&
                    "border-r-4 border-[#1fa628] bg-blue-600/10 text-[#1fa628]",
                )}
              >
                <Icon className="size-5" strokeWidth={1.8} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-[#c3c6d7] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[#191c1e]">
              {activeTab === "general"
                ? "General Preferences"
                : tabs.find((tab) => tab.id === activeTab)?.label}
            </h2>

            {activeTab === "general" ? (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <SettingSelect
                  label="Platform Language"
                  value={preferences.language}
                  options={settingsOptions.languages}
                  onValueChange={(language) =>
                    setPreferences((current) => ({ ...current, language }))
                  }
                />
                <SettingSelect
                  label="Default Timezone"
                  value={preferences.timezone}
                  options={settingsOptions.timezones}
                  onValueChange={(timezone) =>
                    setPreferences((current) => ({ ...current, timezone }))
                  }
                />
              </div>
            ) : (
              <p className="mt-4 text-sm text-[#6b7280]">
                This configuration section is ready for your Spring Boot API.
              </p>
            )}
          </section>

          <div className="flex flex-col gap-4 rounded-lg border border-[#c3c6d7] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <Button
              type="button"
              variant="outline"
              onClick={reset}
              className="h-12 rounded-[4px] border-[#ba1a1a]/20 px-6 font-bold text-[#ba1a1a] hover:bg-red-50 hover:text-[#ba1a1a]"
            >
              Reset to Defaults
            </Button>
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="ghost"
                onClick={cancel}
                className="h-12 rounded-[4px] px-6 text-base font-bold text-[#434655]"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={save}
                className="h-12 rounded-[4px] bg-[#1fa628] px-10 text-base font-bold text-white shadow-lg hover:bg-[#188d21]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingSelect({
  label,
  value,
  options,
  onValueChange,
}: {
  label: string;
  value: string;
  options: ReadonlyArray<{ label: string; value: string }>;
  onValueChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-[#434655]">{label}</span>
      <Select value={value} onValueChange={(nextValue) => onValueChange(nextValue ?? value)}>
        <SelectTrigger className="h-[50px] w-full rounded-[4px] border-[#c3c6d7] bg-[#eceef0] px-3 text-base text-[#191c1e]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}
