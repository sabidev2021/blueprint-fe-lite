import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DbIndexService {

    private db!: IDBDatabase;
    private dbName = '';
    private tableName = '';

    initConfigDb(dbName: string, createObjectStore: string) {
        this.dbName = dbName;
        this.tableName = createObjectStore;
        this.initializeDatabase().then(r => r);
    }

    private getDatabase(): Promise<IDBDatabase> {
        return new Promise<IDBDatabase>((resolve, reject) => {
            const openDBRequest: IDBOpenDBRequest = window.indexedDB.open(this.dbName, 1);
            openDBRequest.onupgradeneeded = (event: any) => {
                const db = event.target?.result
                db.createObjectStore(this.tableName, {
                    autoIncrement: true
                });
                resolve(db);
            };

            openDBRequest.onsuccess = (event: any) => {
                const db = event.target.result
                db.onerror = (err: IDBRequestEventMap) => {
                    console.error(err);
                    console.info("An error occurred while working with DB! ");
                }
                resolve(db);
            };

            openDBRequest.onerror = () => {
                console.info("can't open IndexedDB");
                reject();
            }
        })
    }


    private async initializeDatabase(): Promise<void> {
        if (!window.indexedDB) {
            return console.info("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
        } else if (!this.db) {
            this.db = await this.getDatabase()
        }
    }

    addRows<T>(keyName: string, tableName: string, data: T) {
        const response = {spinner: false, message: 'success uploaded file', status: 201};
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (this.db != undefined) {
                const request = await this.db.transaction(tableName, 'readwrite').objectStore(tableName).put(data, keyName);
                request.onsuccess = await async function () {
                    Object.assign(response, [data])
                    resolve(response);
                }
                request.onerror = (err: Event) => {
                    reject(err);
                }
            }
        })
    }

    addSingleRows<T>(keyName: string, tableName: string, data: T): Promise<object> {
        const response = {spinner: false, message: 'success uploaded file', status: 201};
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (this.db != undefined) {
                const request = await this.db.transaction(tableName, 'readwrite').objectStore(tableName).add(data, keyName);
                request.onsuccess = function () {
                    resolve(response);
                }
                request.onerror = (err: Event) => {
                    reject(err);
                }
            }
        })
    }

    updateRows<T>(keyName: string, tableName: string, data?: T, cursorEnable?: boolean) {
        const response = {spinner: false, message: 'success update file', status: 200};
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (this.db != undefined) {
                const request = await this.db.transaction(tableName, 'readwrite').objectStore(tableName).put(data, keyName)
                let getStorage: IDBRequest<IDBCursorWithValue | null>;
                if (cursorEnable) {
                    getStorage = await this.db.transaction(tableName, 'readwrite').objectStore(tableName).openCursor()
                }
                request.onsuccess = function (event: any) {
                    const cursorIdb = event.target.result;
                    if (cursorIdb) {
                        request.onsuccess = () => {
                            console.info('success update rows data via cursor interfaces');
                        };
                    }
                    resolve(response);
                }
                request.onerror = (err: Event) => {
                    reject(err);
                }
            }
        })
    }

    deleteRows(keyName: string, tableName: string) {
        const response = {spinner: false, message: 'success delete file', status: 200};
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (this.db != undefined) {
                const request = await this.db.transaction(tableName, 'readwrite').objectStore(tableName).delete(keyName);
                request.onsuccess = await function () {
                    resolve(response)
                }
                request.onerror = (err: Event) => {
                    reject(err)
                }
            }
        })
    }

    async getRows(keyName: string, tableName: string) {
        this.db = await this.getDatabase()
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            if (this.db != undefined) {
                const request = this.db.transaction(tableName, 'readonly').objectStore(tableName).get(keyName);
                request.onsuccess = (event: any) => {
                    const request = event.target;
                    resolve(<File>request?.result)
                }
                request.onerror = (err: Event) => {
                    reject(err)
                }
            }
        });
    }

    async clearAllStorage() {
        this.db = await this.getDatabase()
        const response = {spinner: false, message: 'success cleanup all storage', status: 200};
        return new Promise((resolve, reject) => {
            if (this.db != undefined) {
                const request = this.db.transaction(this.tableName, 'readwrite').objectStore(this.tableName);
                const cleanUpStorageRequest = request.clear();
                cleanUpStorageRequest.onsuccess = () => {
                    resolve(response)
                };
                cleanUpStorageRequest.onerror = (err: Event) => {
                    reject(err)
                }
            }
        });
    }
}
