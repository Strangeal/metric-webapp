import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const coinGeckco = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';
const initialState = {
  coins: [],
  status: null,
};

export const coinFetch = createAsyncThunk(
  'coin/coinFetch',
  async () => {
    const response = await fetch(`${coinGeckco}`);
    const data = await response.json();
    return data;
  },
);

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(coinFetch.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(coinFetch.fulfilled, (state, action) => {
        const isfulfilled = state;
        isfulfilled.status = 'Success';
        isfulfilled.coins = action.payload;
      })
      .addCase(coinFetch.rejected, (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      });
  },
});

export const { coinSearch } = coinSlice.actions;

export default coinSlice.reducer;
