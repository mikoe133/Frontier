// utils/cleanupOldSessions.ts
import { deleteDB } from 'idb';
import getCurrentSessionId from './getCurrentSessionId';

export const cleanupOldImgDatabases = async () => {
    console.log('Cleaning up old image databases...');
    
    if (typeof window === 'undefined') {
        console.warn('window is undefined, skipping cleanup.');
        return;
    }
        ;
    if (typeof indexedDB.databases !== 'function') {
        console.warn('indexedDB.databases() not supported, skipping cleanup.');
        return;
    }
    console.log('indexedDB.databases() supported, continuing cleanup.');
    
    try {
        const databases = await indexedDB.databases();
        const currentId = getCurrentSessionId();

        for (const db of databases) {
            console.log('db.name: ', db.name);
            
            if (db.name && db.name.startsWith('imgslice_') && db.name !== `imgslice_${currentId}`) {
                console.log(`Deleting old img database: ${db.name}`);
                await deleteDB(db.name);
            }
        }
    } catch (error) {
        console.error('Error cleaning up old img databases:', error);
        throw error;
    }

};