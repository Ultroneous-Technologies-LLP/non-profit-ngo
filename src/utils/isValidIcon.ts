import { Icon } from "@/components";

const validIcons: Icon[] = ["Facebook", "Instagram", "LinkedIn", "Youtube"];

export function isValidIcon(icon: unknown): icon is Icon {
  return typeof icon === "string" && validIcons.includes(icon as Icon);
}
