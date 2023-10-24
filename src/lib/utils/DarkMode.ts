import { Appearance, stateStore } from "$lib/stores/StateStore"

export function DarkMode(isDark: boolean) {
    const html = document.documentElement
    if (isDark) {
        html.classList.add("dark")
    } else {
        html.classList.remove("dark")
    }
    stateStore.update(state => {
        state.appearance = isDark ? Appearance.Dark : Appearance.Light
        return state
    })
}
