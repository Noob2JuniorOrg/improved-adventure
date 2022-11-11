import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialCalcState = {
  totalBill: 0,
  numberOfPeople: 0,
  tipFraction: 0.15,
  index: 2,
  isDefault: true, //Shows if the default tip % is selected
};

const calcSlice = createSlice({
  name: 'calc',
  initialState: initialCalcState,
  reducers: {
    setBill(state, action) {
      state.totalBill = action.payload;
    },
    setNumberOfPeople(state, action) {
      state.numberOfPeople = action.payload;
    },
    setTip(state, action) {
      state.tipFraction = action.payload;
      state.isDefault = false;
    },
    setIndex(state, action) {
      state.index = action.payload;
    },
    reset(state) {
      state.totalBill = 0;
      state.numberOfPeople = 0;
      state.tipFraction = 0.15;
      state.index = 2;
      state.isDefault = true;
    },
  },
});

const store = configureStore({
  reducer: { calc: calcSlice.reducer },
});

export const calcActions = calcSlice.actions;
export default store;
