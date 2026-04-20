import { createSlice } from "@reduxjs/toolkit";

// Load saved items from localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("saved");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    return [];
  }
};

const initialState = loadFromLocalStorage();

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.find(
        (item) => item.code === action.payload.code
      );

      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("saved", JSON.stringify(state));
      }
    },

    removeItem: (state, action) => {
      const updated = state.filter(
        (item) => item.code !== action.payload
      );

      localStorage.setItem("saved", JSON.stringify(updated));
      return updated;
    }
  }
});

export const { addItem, removeItem } = savedSlice.actions;
export default savedSlice.reducer;