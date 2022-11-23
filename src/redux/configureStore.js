import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coinReducer from './coinSlice';
import coinDetailsReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    coin: coinReducer,
    details: coinDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
