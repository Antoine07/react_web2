// stores/useFiboStore.js
import { create } from "zustand"
import { persist } from "zustand/middleware"

const initialState = {
    fibos: [1, 1],
    head: 2,
    running: false,
}

export const useFiboStore = create(persist((set, get) => ({
    ...initialState,
    next: () => {
        const { fibos, head } = get()
        const a = fibos[head - 2] ?? 1
        const b = fibos[head - 1] ?? 1

        set({ fibos: [...fibos, a + b], head: head + 1 })
    },

    reset: () => {
        set({ fibos: [1, 1], head: 2 })
    }

}),
    { name: "fibonacci" }
)
);
