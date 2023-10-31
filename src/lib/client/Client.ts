import { stateStore } from "$lib/stores/StateStore"
import { Author } from "$lib/types/Chat"
import { Client as LLM } from "booga.js"
import { get } from "svelte/store"

export class Client {

    private _url: string = get(stateStore).url.model
    public llm = new LLM({ uri: this._url })

    constructor() {}

    public updateUrl(): void {
        this._url = get(stateStore).url.model
        this.llm = new LLM({
            uri: this._url
        })
    }

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

    // not tested
    public async removeLastHistory() {
        stateStore.update((state) => {
            return {
                ...state,
                history: state.history.slice(0, -1)
            }
        })
    }

// TODO get char/inst/preset from settings and/or env vars
    public async send(
        msg: string,
        char: string = "Commander V3",
        inst: string = "Commander V3",
        preset: string = "Commander V3"
    ) {
        this.updateUrl()

        if (this._url === "")
            return  // TODO do something for empty url

        await this.appendHistory(Author.User, msg)
        await this.appendHistory(Author.Assistant, "...") // TODO add loading animation or anything blabla

        await this.llm.chat(msg, {
            character: char,
            instruction_template: inst,
            preset: preset,
            mode: "chat-instruct"
        }).then(async (res) => {
            if (get(stateStore).debug)
                console.log("Response: ", res)
            await this.removeLastHistory()
            await this.appendHistory(Author.Assistant, res)
        })
    }

}

export const client = new Client()
