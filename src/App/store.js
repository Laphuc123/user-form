import { configureStore } from "@reduxjs/toolkit";
import profile from './reducer';
export const store = configureStore({
    reducer: {
        Show: profile,
    }
})