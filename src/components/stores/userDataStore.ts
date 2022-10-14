// LIBRARIES
import create from "zustand";
import { User } from "next-auth";

// TYPES

export interface UserDataStoreTypes {
  user: User | null | undefined;
  setUser: (userData: User | null | undefined) => void;
}

export const useUserDataStore = create<UserDataStoreTypes>((set) => ({
  user: null,
  setUser: (userData: User | null | undefined) => set({ user: userData }),
}));
