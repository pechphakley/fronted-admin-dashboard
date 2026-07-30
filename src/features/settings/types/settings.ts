export type SettingsTab =
  | "general"
  | "ai"
  | "security"
  | "notifications"
  | "integrations";

export interface SettingsPreferences {
  language: string;
  timezone: string;
}
