import { create } from "zustand"

const initialState = {
    displayed: [],
    head: 0,
    running: false, // important : NE démarre pas automatiquement
    halted: false,
    mode: "prime number",
    message: ""
};

export const usePrimeMachineStore = create((set, get) => ({
    ...initialState,

    push: (item) => {
        const { displayed, head, running, halted } = get();
        if (!running) return; // sécurité

        set({
            displayed: [...displayed, item.number],
            head: head + 1,
            message : "",
            halted : item.halted
        });
    },
    reset: () => set({ displayed: [], head: 0, message : "", halted: false, }),
    start: () => set({ running: true }),
    stop: () => set({ running: false }),
    updateHalted : (s) => set({ halted : s})
}));
