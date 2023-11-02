export interface WeatherInfo {
    temp: number
    tmin: number | null
    tmax: number | null
    chill: number
    rain: number
    reh: number
    ws: number
    wd: string
    fdst: number
    ffdst: number
    dong: string
}