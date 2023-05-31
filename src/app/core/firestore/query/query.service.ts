import {Injectable} from '@angular/core';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  firestore = getFirestore();

  constructor() {
  }

  async queryLessThan(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "<", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryLessThanOrEqualTo(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "<=", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryEqualTo(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "==", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryGreaterThan(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, ">", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryGreaterThanOrEqualTo(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, ">=", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryNotEqualTo(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "!=", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async in(path: string, key: string, value: []) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "in", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async notIn(path: string, key: string, value: []) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "not-in", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async arrayContains(path: string, key: string, value: []) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "array-contains", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async arrayContainsAny(path: string, key: string, value: []) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "array-contains-any", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

}
