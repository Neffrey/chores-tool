// LIBRARIES
import create from "zustand";

export interface LoginFormStoreProps {
  nameInput: string;
  setNameInput: (input: string) => void;
  isDifficult: boolean;
  toggleIsDifficult: () => void;
}

export const useLoginFormStore = create<LoginFormStoreProps>((set) => ({
  nameInput: "",
  setNameInput: (input: string) => set({ nameInput: input }),
  isDifficult: false,
  toggleIsDifficult: () =>
    set((state) => ({ isDifficult: !state.isDifficult })),
}));
