import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
  coinetails: [],
});

const coinDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    coinDetails(state, action) {
      const myState = state;
      const newState = myState.coinetails.filter((detail) => detail.id === action.payload.id);
      myState.coinetails = newState;
      myState.coinetails.push(action.payload);
    },
  },
});

export const { coinDetails } = coinDetailsSlice.actions;

export default coinDetailsSlice.reducer;
