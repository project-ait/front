import { stateStore } from "$lib/stores/StateStore"
import type { WeatherInfo } from "$lib/types/api/WeatherResponse"
import { Author } from "$lib/types/Chat"
import axios from "axios"
import { Client as LLM } from "booga.js"
import { get } from "svelte/store"

export const client = new class Client {

    private _modelUrl: string = get(stateStore).url.model
    private _serverUrl: string = get(stateStore).url.server

    public llm = new LLM({ uri: this._modelUrl })
    public _axios = axios.create({
        baseURL: this._serverUrl,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })

    constructor() {}

    public updateModelUrl(): void {
        this._modelUrl = get(stateStore).url.model
        this.llm = new LLM({
            uri: this._modelUrl
        })
    }

    public updateServerUrl(): void {
        this._serverUrl = get(stateStore).url.server
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
        char: string = "Commander",
        inst: string = "Commander",
        preset: string = "Commander"
    ) {
        this.updateModelUrl()

        if (this._modelUrl === "")
            return  // TODO do something for empty url

        await this.appendHistory(Author.User, msg)
        await this.appendHistory(Author.Assistant, "...") // TODO add loading animation or anything blabla

        await this.llm.chat(msg, {
            character: char,
            instruction_template: inst,
            preset: preset,
            mode: "chat-instruct"
        }).then(async (res) => {
            await this.removeLastHistory()
            await this.appendHistory(Author.Assistant, res)
        })
    }

    public async getWeather(): Promise<WeatherInfo | void> {
        this.updateServerUrl()

        return await this._axios.get(`${this._serverUrl}/service/weather`).then(res => res.data)
    }

    public async translateToKr(content: string): Promise<string> {
        return await this._axios.post(`${this._serverUrl}/service/translate/toKr`, content).then(res => res.data)
    }

}
