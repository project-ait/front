import { stateStore } from "$lib/stores/StateStore"
import { Author } from "$lib/types/Chat"
import { Client as LLM } from "booga.js"
import { get } from "svelte/store"

export class Client {

    private _url: string = get(stateStore).url.model

    public updateUrl(): void {
        this._url = get(stateStore).url.model
        this.llm = new LLM({
            uri: this._url
        })
    }

    public llm = new LLM({uri: this._url})

    constructor() {}

    public async appendHistory(author: Author, msg: string) {
        stateStore.update((state) => {
            return {
                ...state,
                history: [
                    ...state.history,
                    {
                        author: author,
                        message: msg
                    }
                ]
            }
        })
    }


    public async send(msg: string, char: string = "Commander") {
        this.updateUrl()

        await this.appendHistory(Author.User, msg)

        await this.llm.chat(msg, {
            character: char
        }).then(res => {
            this.appendHistory(Author.Assistant, res)
        })
    }

}

export const client = new Client()
