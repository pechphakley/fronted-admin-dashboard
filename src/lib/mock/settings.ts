import type { SettingsPreferences } from "@/features/settings/types/settings";

export const defaultSettings: SettingsPreferences = {
  language: "en-US",
  timezone: "UTC",
};

export const settingsOptions = {
  languages: [
    { label: "English (United States)", value: "en-US" },
    { label: "English (United Kingdom)", value: "en-GB" },
  ],
  timezones: [
    { label: "UTC (Coordinated Universal Time)", value: "UTC" },
    { label: "Asia/Bangkok (UTC+07:00)", value: "Asia/Bangkok" },
  ],
};
