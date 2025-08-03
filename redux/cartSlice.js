
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const id = product.id;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { product, quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity = quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state =>
  Object.values(state.cart.items).reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

export default cartSlice.reducer;
