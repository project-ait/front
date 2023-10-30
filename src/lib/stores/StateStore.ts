import type { Message } from "$lib/types/Chat"
import { Author, PageType } from "$lib/types/Chat"
import { writable } from "svelte/store"

export enum Appearance {
    Light,
    Dark
}

export interface StateStore {
    showSettings: boolean
    appearance: Appearance
    pageType: PageType
    waiting: boolean
    input: string
    user?: {
        profilePic: string
        token: string
    },
    history: Array<Message>
    url: {
        server: string
        model: string
    },
    debug: boolean
}


export const stateStore = writable<StateStore>({
    showSettings: false,
    appearance: Appearance.Dark,
    pageType: PageType.Chat,
    waiting: false, // is waiting AI response?
    input: "", // it must be updating when send the message for avoid the bugs (and trash request),
    history: [{
        author: Author.Assistant,
        message: "Hello! I'm your private assistant! How can I help you today? 🤖",
    }],
    url: {
        server: "localhost:1777",
        model: ""
    },
    debug: false
})
