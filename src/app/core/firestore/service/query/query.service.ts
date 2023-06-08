import { Injectable } from '@angular/core';
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  firestore = getFirestore();

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
  ) {
  }

  async queryLessThan(path: string, key: string, value: string | number | boolean) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "<", value))
    const snapshot = await getDocs(response)
    console.log(snapshot)
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

  async queryIn(path: string, key: string, value: [(string | number | undefined), (string | number | undefined)]) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "in", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryNotIn(path: string, key: string, value: [(string | number | undefined), (string | number | undefined)]) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "not-in", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryArrayContains(path: string, key: string, value: string | number | undefined) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "array-contains", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

  async queryArrayContainsAny(path: string, key: string, value: (string | number | undefined)[]) {
    let result: any[] = []
    const response = query(collection(this.firestore, path), where(key, "array-contains-any", value))
    const snapshot = await getDocs(response)
    snapshot?.forEach((doc: { id: string; data: () => any; }) => {
      result.push({id: doc.id, ...doc.data()});
    });
    return result
  }

}
