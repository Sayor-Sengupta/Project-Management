import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    authUser: JSON.parse(localStorage.getItem("authUser")) || null,
    setAuthUser: (user) => {
        localStorage.setItem("authUser", JSON.stringify(user));
        set({ authUser: user });
    },
    logoutUser: () => set({ authUser: null })
}));
