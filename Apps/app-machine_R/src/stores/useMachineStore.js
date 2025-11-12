import { create } from "zustand"
import { persist } from "zustand/middleware"
const initialTape = ['_', '_', '_', '_', '_', '_']

// entité, et une source de vérité
const initialState = {
  tape: initialTape, // tableau il faudra créer une nouvelle réf pour le re-render
  head: 0,
  mode: "MOVE",
  halted: false
};

export const useMachineStore = create(persist((set, get) => ({
  ...initialState, // spread ma source de vérité
  // actions 
  step: () => {
    const { tape, head } = get()
    const current = tape[head] ?? "stop"

    if (current == "stop") {
      // vous pouvez modifier qu'une partie du state sans casser la structure de l'entité, zustand mettra à jour uniquement les clés que vous modifiez avec la méthode set
      set({
        mode: "HALT",
        halted: true
      })
      return
    }

    if (current === '_') {
      const newTape = [...tape]
      newTape[head] = "1"

      set({
        tape: newTape,
        head: head + 1
      })

    }
  },
  reset: () => set({ ...initialState })
}), {
  name: "machine-storage"
}
)
)