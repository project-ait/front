import { writable } from "svelte/store";

export const NodeState = writable<HTMLElement | null>(null);
