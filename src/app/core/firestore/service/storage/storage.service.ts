import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage,
  ) {
  }

  async uploadFile(path: string, file: any): Promise<any> {
    return this.storage.upload(path, file);
  }
}
