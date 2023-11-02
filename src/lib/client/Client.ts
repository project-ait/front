import { stateStore } from "$lib/stores/StateStore"
import type { TrainResponse } from "$lib/types/api/TrainResponse"
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
        let url = get(stateStore).url.server

        if (url.endsWith("/"))
            url = url.slice(0, -1)
        else {
            url += "/"
        }

        this._serverUrl = url
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

    public async clearHistory() {
        stateStore.update((state) => {
            return {
                ...state,
                history: []
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
        visibleMessage?: string | undefined,
        char: string = "Commander",
        inst: string = "Commander",
        preset: string = "Commander"
    ) {
        this.updateModelUrl()

        if (this._modelUrl === "")
            return  // TODO do something for empty url

        if (visibleMessage !== undefined)
            await this.appendHistory(Author.User, visibleMessage)
        else
            await this.appendHistory(Author.User, msg)

        await this.appendHistory(Author.Assistant, "...") // TODO add loading animation or anything blabla

        await this.llm.chat(msg, {
            character: char,
            instruction_template: inst,
            preset: preset,
            mode: "chat-instruct"
        }).then(async (res) => {
            await this.removeLastHistory()
            if (!get(stateStore).translate)
                return await this.appendHistory(Author.Assistant, res)

            // translate without a command
            const regex: RegExp = /`([^`]*)`/g

            // [`cmd1`, `cmd2 arg`]
            const commands = res.match(regex)

            // `cmd1` `cmd2 arg`
            const mergedCommands = commands?.join(" ") ?? ""

            // translated message without commands
            const translated = await this.translateToKr(res.replace(regex, "").trim())

            console.log(commands)
            console.log(translated)

            await this.appendHistory(Author.Assistant, `${translated} ${mergedCommands}`)
        })
    }

    public async getWeather(): Promise<WeatherInfo | void> {
        this.updateServerUrl()

        return await this._axios.get(`${this._serverUrl}/service/weather`).then(res => res.data)
    }

    public async translateToKr(content: string): Promise<string> {
        this.updateServerUrl()

        const res = await this._axios.post(`${this._serverUrl}/service/translate/toKr`, {
            text: content
        })

        return res.data.text
    }

    public async translateToEn(content: string): Promise<string> {
        this.updateServerUrl()

        const res = await this._axios.post(`${this._serverUrl}/service/translate/toEn`, {
            text: content
        })

        return res.data.text
    }

    public async getTrainInfo(station: string): Promise<TrainResponse> {
        const res = await this._axios.post(`${this._serverUrl}/service/subway`, {
            station_name: station
        }).then(res => res.data)

        console.log(res)

        return <TrainResponse>{
            status: {
                code: res.error_msg.code,
                message: res.error_msg.message,
                total: res.error_msg.total
            }
        }
    }

}
