import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// Slices (Info)
import infoReducer from "./infoSlice.js"

const persistConfigInfo = {
  key: 'root',
  //storage,
  storage: AsyncStorage,
  whitelist: ["info"]
};

const reducersCombined = {
  info:persistReducer(persistConfigInfo,infoReducer)
}

export const store = configureStore({
  reducer: reducersCombined,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
}) ;

export const persistor = persistStore(store,()=>console.log("Se guardo en persist"));;
