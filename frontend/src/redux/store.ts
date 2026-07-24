import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./sclices/resumeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}
const persistdReducer = persistReducer(persistConfig, resumeReducer)

export const store = configureStore({
    reducer:{
        resume: persistdReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);