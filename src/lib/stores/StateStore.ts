import { writable } from "svelte/store"

export enum Appearance {
    Light,
    Dark
}

export enum PageType {
    Chat,
    Document,
}

export interface StateStore {
    showSettings: boolean
    appearance: Appearance
    chatType: PageType
}


export const stateStore = writable<StateStore>({
    showSettings: false,
    appearance: Appearance.Dark,
    chatType: PageType.Chat
})
