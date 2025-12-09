import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';

// util
import getCurrentSessionId from '@/utils/getCurrentSessionId';

//  sessionStorage
import storageSession from 'redux-persist/lib/storage/session';
//  IndexedDB 存储
import createIdbStorage from 'redux-persist-indexeddb-storage';
//  压缩转换
import fflateTransform from "./config/persistTransform";
import imgsTransform from "./config/imgTransform";


// api


// slices
import themeslice from './slices/themeSlice';




import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { Storage } from 'redux-persist';

const currentSessionId = getCurrentSessionId();
// Create IndexedDB storage for resultslice
const idbStorageForImgs = createIdbStorage(`imgslice_${currentSessionId}`, {
  version: 1,
  storeName: 'images',
  description: `Session-scoped image storage (${currentSessionId})`,
});
const resultslicePersistConfig = {
  key: 'img',
  storage: idbStorageForImgs,
  debug: true,
  // transforms: [fflateTransform],
  // transforms: [imgsTransform],
};

const createPersistConfig = (key: string, storageType?: Storage) => ({
  key,
  version: 1,
  storage: storageType || storage,
});


const themePersistConfig = createPersistConfig('theme');
const parsedPersistConfig = createPersistConfig('parsed', storageSession);

const persistedThemeReducer = persistReducer(themePersistConfig, themeslice);




// 你可以后续添加 reducer
export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    // api

  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // 如果你的 img 数据包含不可序列化的对象（如 Blob、File 等），可能还需要忽略更多内容
        // ignoredPaths: ['img.someField']
      },
    })
})

// 导出类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// 类型化hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);