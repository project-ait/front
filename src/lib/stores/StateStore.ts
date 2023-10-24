import { writable } from "svelte/store"

export enum Appearance {
    Light,
    Dark
}

/**
 * @desc First value is must be two over.
 * If not, it will be confusing to use comparison operators.
 * @example $stateStore.pageType === PageType.Chat
 *          If chat is 0, it will be true even if it is not chat.
 */
export enum PageType {
    Chat = 2,
    Docs,
}

export interface StateStore {
    showSettings: boolean
    appearance: Appearance
    pageType: PageType
}


export const stateStore = writable<StateStore>({
    showSettings: false,
    appearance: Appearance.Dark,
    pageType: PageType.Chat
})
