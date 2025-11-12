import { create } from "zustand"
const initialTape = ['_', '_', '_', '_', '_', '1']

const initialState = {
  tape: initialTape,
  head: 0,
  mode: 'A'
};

export const useMachineStore = create((set, get) => ({
  ...initialState,
  step: () => {
    const { tape, head, mode } = get();
    if (mode === 'HALT') return;

    const current = tape[head];

    if (mode === 'A' && current === '_') {
      // write 1 and move right, stay in A
      const newTape = [...tape];
      newTape[head] = '1';
      set({
        tape: newTape,
        head: head + 1,
        mode: 'A'
      });
    }

    else if (mode === 'A' && current === '1') {
      // write 1 and HALT (switch to B)
      const newTape = [...tape];
      newTape[head] = '1';
      set({
        tape: newTape,
        head,
        mode: 'HALT'
      });
    }
  },

  reset: () => set({ ...initialState })
}))