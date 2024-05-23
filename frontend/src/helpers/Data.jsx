import { create } from "zustand";
import axios from "axios";
import { apiData } from "../configs/api";

export const useDataStore = create((set) => ({
  data: [],
  loading: false,
  getData: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(apiData);
      set({ data: response.data, loading: false });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      }
      throw new Error("An error occurred. Please try again.");
    }
  },
}));
