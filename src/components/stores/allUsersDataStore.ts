// LIBRARIES
import create from "zustand";

// TYPES
type User = {
  id?: string;
  name?: string | number | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  role?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  password?: string | null;
};

export interface AllUsersDataStoreTypes {
  allUsers: User[] | null;
  setAllUsers: (usersData: User[] | null) => void;
}

export const useAllUsersDataStore = create<AllUsersDataStoreTypes>((set) => ({
  allUsers: null,
  setAllUsers: (usersData) => set({ allUsers: usersData }),
}));
