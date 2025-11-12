import { create } from "zustand"
const initialTape = ['_', '_', '_', '_', '_', '_']

const initialState = {
  tape: initialTape,
  head: 0,
  mode: "MOVE",
  halted : false
};

export const useMachineStore = create((set, get) => ({
  ...initialState,
  step: () => {
    const { tape, head } = get();
    const current = tape[head] ?? 'stop';

    if (current === 'stop') {
      set({
        mode: "STOP",
        halted : true
      })

      return
    }

    if (current === '_') {
      // write 1 and move right, stay in A
      const newTape = [...tape];
      newTape[head] = '1';
      set({
        tape: newTape,
        head: head + 1
      });
    }

  },

  reset: () => set({ ...initialState })
}))