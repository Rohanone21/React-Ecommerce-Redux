import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  items: localStorage.getItem('cart') 
      ? JSON.parse(localStorage.getItem('cart')) 
      : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value += 1;
      state.items.push(action.payload);

      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    RemoveItem: (state, action) => {
      const cartData = state.items.filter(item => item.id !== action.payload.id);

      state.items = cartData;

      localStorage.setItem('cart', JSON.stringify(cartData));
    },

    clearAllItems: (state) => {
      state.value = 0;
      state.items = [];
      localStorage.setItem('cart', JSON.stringify([]));
    },
  },
});

export const { addItem, RemoveItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
