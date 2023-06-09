import { Injectable } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Member} from "@app/module/firebase/crud/model/member.model";
import {onValue, push, remove, update} from "@angular/fire/database";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {
  dataBase = getDatabase();
  result: any[] = []

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private http: HttpClient
  ) {
  }


  addData(path: string, data: Member) {
    set(ref(this.dataBase, path + "/" + RealtimeDatabaseService.dummyId(data)), {
      ...data
    }).then(r => r);
  }

  async getList(path: string) {
    this.result = []
    await onValue(ref(this.dataBase, path), (snapshot) => {
      const response = snapshot.val()
      for (const key in response) {
        const output = {
          id: key,
          ...response[key]
        }
        this.result.push(output)
      }
    }, {
      onlyOnce: true
    });
    return this.result
  }

  deleteData(path: string, id: string) {
    remove(ref(this.dataBase, path + "/" + id)).then(r => r)
  }

  private static dummyId(data: Member) {
    return data.name
  }

  updateData(path: string, id: string, data: any) {
    update(ref(this.dataBase, path + "/" + id), data).then(r => r)
  }

  query(param: string, value: string | undefined) {
    this.result = []
    this.http.get<any>(`https://sabi-dev-test-default-rtdb.firebaseio.com/users.json?orderBy="${param}"&startAt="${value}"`).subscribe(data => {
      for (const key in data) {
        const output = {
          id: key,
          ...data[key]
        }
        this.result.push(output)
      }
    })
    return this.result
  }
}
