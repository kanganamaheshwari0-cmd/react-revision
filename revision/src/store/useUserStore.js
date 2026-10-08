import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: "Kangana",

  setUser: (name) => set({ user: name }),
}));