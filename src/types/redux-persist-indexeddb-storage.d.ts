// src/types/redux-persist-indexeddb-storage.d.ts
declare module 'redux-persist-indexeddb-storage' {
  import { Storage } from 'redux-persist';

  // 定义 createIdbStorage 的返回类型
  interface IDBStorage extends Storage {
    // 可以在这里添加你期望的方法或属性
    databaseName: string;
    version: number;
    storeName: string;
  }

  // 定义 createIdbStorage 函数的完整类型
  function createIdbStorage(
    dbName: string,
    options?: {
      version?: number;
      storeName?: string;
      description?: string;
    }
  ): IDBStorage;

  export default createIdbStorage;
}