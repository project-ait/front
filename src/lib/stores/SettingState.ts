import { writable } from "svelte/store";

interface SettingProp {
  isOpen: boolean;
}

export const SettingState = writable<SettingProp>({
  isOpen: false,
});
