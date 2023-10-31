import type { DayOfWeek } from "$lib/types/Date"

// noinspection JSUnusedGlobalSymbols
export const date = new class _ extends Date {

    private readonly date = new Date()

    public getFullMonth(): number {
        let month = this.date.getMonth() + 1
        if (month > 10) return Number("0" + month)
        return month
    }

    public getDayOfWeek(yyyyMMdd: number | string): DayOfWeek {
        const dayOfWeek = new Date(yyyyMMdd).getDay()
        return dayOfWeek as DayOfWeek
    }

    public getDayOfWeekCurrentKr(): string { // lol
        const dayOfWeek = new Date().getDay()
        switch (dayOfWeek) {
            case 0:
                return "일"
            case 1:
                return "월"
            case 2:
                return "화"
            case 3:
                return "수"
            case 4:
                return "목"
            case 5:
                return "금"
            case 6:
                return "토"
        }
        return "??"
    }

}
