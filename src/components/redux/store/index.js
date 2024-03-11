import { configureStore } from "@reduxjs/toolkit";
import viewMeteo from "../reducers/meteo";
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
  import storage from 'redux-persist/lib/storage'; 

  const persistConfig = {
    key: 'root',
    storage,
  
  };
  const persistedReducer = persistReducer(persistConfig,viewMeteo );  

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}) 
const persistor = persistStore(store);
export  {store,persistor}