// LIBRARIES
import create from "zustand";

// TYPES
import { Chore } from "@prisma/client";

export interface VisitorDataStoreTypes {
  allChores: Chore[] | null;
  setAllChores: (chores: Chore[]) => void;
}

export const useVisitorDataStore = create<VisitorDataStoreTypes>((set) => ({
  allChores: null,
  setAllChores: (chores: Chore[]) => set({ allChores: chores }),
}));
