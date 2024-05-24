import { create } from "zustand";
import axios from "axios";
import { apiData } from "../configs/api";
import { useTokenStore } from "./Auth";

export const useDataStore = create((set) => ({
  data: [],
  loading: false,
  getData: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(apiData);
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
  postData: async (payload) => {
    set({ loading: true });
    console.log(payload);
    try {
      await axios.post(apiData, payload, {
        headers: {
          Authorization: `Bearer ${useTokenStore.getState().token}`,
        },
      });
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
