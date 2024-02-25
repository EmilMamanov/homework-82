import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {usersReducer} from "../features/users/usersSlice.ts";
import {artistsReducer} from "../features/artists/artistsSlice.ts";
import {albumsReducer} from "../features/albums/albumsSlice.ts";
import {tracksReducer} from "../features/tracks/tracksSlice.ts";
import storage from 'redux-persist/lib/storage';
import {persistReducer, FLUSH, PAUSE, PERSIST, REGISTER, PURGE, REHYDRATE, persistStore} from 'redux-persist';

const usersPersistConfig = {
    key: 'music:users',
    storage: storage,
    whitelist: ['user'],
};

const rootReducer = combineReducers( {
    users: persistReducer(usersPersistConfig, usersReducer),
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ( {
        serializableCheck: {
            ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;