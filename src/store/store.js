import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './../reducer/todoSlice';

export const store = configureStore({
    reducer: {
        request: requestSlice,
    },
});