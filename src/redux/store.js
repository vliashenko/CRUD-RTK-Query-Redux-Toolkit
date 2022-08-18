import { configureStore } from "@reduxjs/toolkit";
import { materialsAPI } from "./materialsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        [materialsAPI.reducerPath] : materialsAPI.reducer
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        materialsAPI.middleware
    ],
    devTools: process.env.NODE_ENV === "development"
})

setupListeners(store.dispatch)