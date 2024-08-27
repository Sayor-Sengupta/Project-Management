import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    creator: JSON.parse(localStorage.getItem("creator")) || null,
    setCreator: (user) => {
        localStorage.setItem("creator", JSON.stringify(user));
        set({ creator: user });
    },
    clearCreator: () => {
        localStorage.removeItem("creator");
        set({ creator: null });
      }
}));
