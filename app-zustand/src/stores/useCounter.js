import { create } from "zustand"

export const useCounter = create((set) => ({
    count : 1,
    increment : () => set((state) => ({ count: state.count + 1 })),
}))
