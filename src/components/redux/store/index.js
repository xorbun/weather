import { combineReducers, configureStore } from "@reduxjs/toolkit";
import viewMeteo from "../reducers/meteo";
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
  import storage from 'redux-persist/lib/storage'; 
import viewNews from "../reducers/news";

  const persistConfig = {
    key: 'root',
    storage,
  
  };
  const bigReducer=combineReducers({
    meteo:viewMeteo,
    news:viewNews
  })
  const persistedReducer = persistReducer(persistConfig,bigReducer );  

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