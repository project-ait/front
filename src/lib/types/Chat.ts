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