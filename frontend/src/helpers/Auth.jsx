import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import { apiLogin } from "../configs/api";

export const useTokenStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
    }),
    {
      name: "token-storage",
    }
  )
);

export const useAuthStore = create((set) => ({
  loading: false,
  LOGIN: async (username, password) => {
    set({ loading: true });
    try {
      const { data } = await axios.post(apiLogin, { username, password });
      console.log(data);
      useTokenStore.getState().setToken({ token: data.token });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      }
      throw new Error("An error occurred. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
}));
