import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

const store = configureStore({
    reducer: {
        sliceName: todoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
