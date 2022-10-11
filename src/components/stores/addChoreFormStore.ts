// LIBRARIES
import create from "zustand";

export interface AddChoreFormStoreProps {
  nameInput: string;
  setNameInput: (input: string) => void;
  isDifficult: boolean;
  toggleIsDifficult: () => void;
}

export const useAddChoreFormStore = create<AddChoreFormStoreProps>((set) => ({
  nameInput: "",
  setNameInput: (input: string) => set({ nameInput: input }),
  isDifficult: false,
  toggleIsDifficult: () => set((state) => ({ isDifficult: !state.isDifficult })),
}));
