import { create } from "zustand";
import axios from "axios";
import { apiUser } from "../configs/api";
import { useTokenStore } from "./Auth";

export const useUserStore = create((set) => {
  return {
    data: [],
    loading: false,
    getData: async () => {
      set({ loading: true });
      try {
        const response = await axios.get(apiUser, {
          headers: {
            Authorization: `Bearer ${useTokenStore.getState().token}`,
          },
        });
        set({ data: response.data });
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
  };
});
