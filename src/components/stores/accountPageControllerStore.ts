// LIBRARIES
import create from "zustand";

export interface AccountPageControllerStoreProps {
  currentTab: "account-details" | "completed-tasks" | "assigned-tasks";
  setCurrentTab: (
    tab: "account-details" | "completed-tasks" | "assigned-tasks"
  ) => void;
}

export const useAccountPageControllerStore = create<AccountPageControllerStoreProps>((set) => ({
  currentTab: "account-details",
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));
