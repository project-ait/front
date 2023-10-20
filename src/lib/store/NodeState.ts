import { writable } from "svelte/store";

export const NodeState = writable<HTMLDivElement | null>(null);
