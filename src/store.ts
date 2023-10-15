import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import themeSlice from "./features/themeSlice";
import languagesSlice from "./features/languageSlice";
import pinMenuSlice from "./features/pinMenuSlice";
import technologySlice from "./features/technologySlice";

const rootReducer = combineReducers({
    languagesSlice,
    themeSlice,
    pinMenuSlice,
    technologySlice,
})

const persistConfig = {
    key: 'root',
    // whitelist: ['themeSlice'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export default store;

export type RootReducer = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch