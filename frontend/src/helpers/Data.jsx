import { create } from "zustand";
import axios from "axios";
import { apiData } from "../configs/api";
import { useTokenStore } from "./Auth";

export const useDataStore = create((set) => ({
  data: [],
  loading: false,
  getAllData: async () => {
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
    try {
      await axios.post(apiData, payload, {
        headers: {
          Authorization: `Bearer ${useTokenStore.getState().token}`,
        },
      });
      await useDataStore.getState().getAllData();
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
  deleteData: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${apiData}/${id}`, {
        headers: {
          Authorization: `Bearer ${useTokenStore.getState().token}`,
        },
      });
      await useDataStore.getState().getAllData();
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
  getData: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${apiData}/${id}`, {
        headers: {
          Authorization: `Bearer ${useTokenStore.getState().token}`,
        },
      });
      return response.data;
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
  editData: async (id, payload) => {
    set({ loading: true });
    try {
      await axios.put(`${apiData}/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${useTokenStore.getState().token}`,
        },
      });
      await useDataStore.getState().getAllData();
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
