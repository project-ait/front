import { stateStore } from "$lib/stores/StateStore"
import { Author } from "$lib/types/Chat"
import { Client as LLM } from "booga.js"

export class Client {

    private _url: string = ""
    public llm = new LLM({
        uri: this._url
    })

    constructor() {
        stateStore.subscribe((state) => {
            this._url = state.url.model
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


    public async send(msg: string, char: string = "Commander") {
        await this.appendHistory(Author.User, msg)

        await this.llm.chat(msg, {
            character: char
        }).then(res => {
            this.appendHistory(Author.Assistant, res)
        })
    }

}

export const client = new Client()