import { create } from "zustand"
import { produce } from "immer"

export const useAddStore = create((set, get) => ({
  tape: ["1", "_", "1", "_", "_", "_"],
  head: 0,
  mode: "A",

  step: () => {
    const { tape, head, mode } = get();
    const symbol = tape[head];

    if (mode === "A" && symbol === "1") {
      set(produce(s => {
        s.head += 1;
      }));
    }

    else if (mode === "A" && symbol === "_") {
      set(produce(s => {
        s.tape[head] = "1";
        s.mode = "HALT";
      }));
    }
  },

  reset: () => set({
    tape: ["1", "_", "1", "_", "_", "_"],
    head: 0,
    mode: "A"
  })
}))

import { create } from "zustand";

export const useAddStore = create((set, get) => ({
  tape: ["1", "_", "1", "_", "_", "_"],
  head: 0,
  mode: "A",

  step: () => {
    const { tape, head, mode } = get();
    const symbol = tape[head];

    // (A, "1") → avancer
    if (mode === "A" && symbol === "1") {
      set({
        tape: [...tape],           // on garde la même bande
        head: head + 1,            // on déplace la tête
        mode: "A"                  // on reste en mode A
      });
    }

    // (A, "_") → écrire "1" + arrêter
    else if (mode === "A" && symbol === "_") {
      // clé : recréer la bande pour changer la référence
      const newTape = [...tape];
      newTape[head] = "1";         // on remplace "_"

      set({
        tape: newTape,
        head,                      // la tête ne bouge pas ici
        mode: "HALT"               // fin
      });
    }
  },

  reset: () => set({
    tape: ["1", "_", "1", "_", "_", "_"],
    head: 0,
    mode: "A"
  })
}));


// sans produce
import { create } from "zustand";

export const useCountStore = create((set, get) => ({
  numbers: [1, 2, 3],

  addNumber: () => {
    const { numbers } = get();
    const newNumbers = [...numbers]; // créer une nouvelle référence
    newNumbers.push(4);              // modifier la copie
    set({ numbers: newNumbers });    // mettre à jour l'état
  }
}));

// avec produce
import { create } from "zustand";
import { produce } from "immer";

export const useCountStore = create((set) => ({
  numbers: [1, 2, 3],

  addNumber: () => {
    set(produce(state => {
      state.numbers.push(4); // on "mute" comme si c'était normal
    }));
  }
}));