import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      state.totalAmount += action.payload.amount;
      if (index === -1) {
        state.items.push({
          title: action.payload.title,
          amount: action.payload.amount,
          price: action.payload.price,
          image: action.payload.image,
        });
      } else {
        state.items[index].amount += action.payload.amount;
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.title === action.payload
      );
      state.totalAmount -= state.items[index].amount;
      state.items = state.items.filter((item) => item.title !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
