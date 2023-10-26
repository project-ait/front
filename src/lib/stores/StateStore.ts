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

export enum Author {
    Assistant,
    User
}

export interface Message {
    author: Author
    message: string
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
}


export const stateStore = writable<StateStore>({
    showSettings: false,
    appearance: Appearance.Dark,
    pageType: PageType.Chat,
    waiting: false, // is waiting AI response?
    input: "", // it must be updating when send the message for avoid the bugs (and trash request),
    history: [{
        author: Author.Assistant,
        message: "Hello! I'm your private assistant! How can I help you today? 🤖"
    }]
})
