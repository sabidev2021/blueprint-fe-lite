import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private db: AngularFirestore,
  ) {
  }

  addDataToCollection(path: string, data: object): Promise<any> {
    return this.db.collection(path).add({ ...data })
  }

  getByID(path: string, id: string): any {
    return this.db.collection(path).doc(id)
  }

  getList(path: string): AngularFirestoreCollection<any> {
    return this.db.collection(path)
  }

  updateData(path: string, data: object, id: string): Promise<void> {
    return this.db.collection(path).doc(id).update(data)
  }

  deleteData(path: string, id: string): Promise<void> {
    return this.db.collection(path).doc(id).delete()
  }

}
