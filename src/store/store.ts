import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';

//  sessionStorage
import storageSession from 'redux-persist/lib/storage/session';
//  IndexedDB 存储
import createIdbStorage from 'redux-persist-indexeddb-storage';
//  压缩转换
import fflateTransform from "./config/persistTransform";

// slices
import themeslice from './slices/themeSlice';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { Storage } from 'redux-persist';


// Create IndexedDB storage for resultslice
const idbStorage = createIdbStorage('xxxxxx', {
  version: 1,
  storeName: 'xxxxx',
  description: "xxxxx"
});
const resultslicePersistConfig = {
  key: 'xxxx',
  storage: idbStorage,
  debug: true,
  transforms: [fflateTransform],
};

const createPersistConfig = (key: string, storageType?: Storage) => ({
  key,
  version: 1,
  storage: storageType || storage,
});


const themePersistConfig = createPersistConfig('theme');

const persistedThemeReducer = persistReducer(themePersistConfig, themeslice);


// 你可以后续添加 reducer
export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },
})

// 导出类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// 类型化hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);