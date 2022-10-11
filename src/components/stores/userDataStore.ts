// LIBRARIES
import create from "zustand";

// TYPES
import { Chore } from "@prisma/client";

export interface UserDataStoreTypes {
  allChores: Chore[] | null;
  setAllChores: (chores: Chore[]) => void;
}

export const useUserDataStore = create<UserDataStoreTypes>((set) => ({
  allChores: null,
  setAllChores: (chores: Chore[]) => set({ allChores: chores }),
}));
