// LIBRARIES
import create from "zustand";

// TYPES
import { Chore } from "@prisma/client";

type ChoreWithUserName = Chore & { user?: { name: string | null } | undefined };

export interface VisitorDataStoreTypes {
  allChores: ChoreWithUserName[];
  setAllChores: (chores: ChoreWithUserName[]) => void;
  deleteChore: (choreId: string) => void;
}

export const useVisitorDataStore = create<VisitorDataStoreTypes>(
  (set, get) => ({
    allChores: [],
    setAllChores: (chores: ChoreWithUserName[]) => set({ allChores: chores }),
    deleteChore: (id: string) => {
      set({ allChores: get().allChores.filter((chore) => chore.id !== id) });
    },
  })
);
