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
import themeSlice from "@shared/store/model/slices/themeSlice";
import languagesSlice from "@shared/store/model/slices/languageSlice";
import pinMenuSlice from "@shared/store/model/slices/pinMenuSlice";
import technologySlice from "@shared/store/model/slices/technologySlice";

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

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

export type RootReducer = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch