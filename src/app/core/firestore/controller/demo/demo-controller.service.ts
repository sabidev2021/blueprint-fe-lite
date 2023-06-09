import { Injectable } from '@angular/core';
import {CrudService} from "@core/firestore/service/crud/crud.service";
import {Member} from "@app/module/firebase/crud/model/member.model";
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class DemoController {
  path = 'members'

  constructor(
    private firestoreCRUDService: CrudService,
  ) { }

  async createMember(member: Member) {
    await this.firestoreCRUDService.addDataToCollection(this.path, member)
  }

  getListMember(): AngularFirestoreCollection<Member> {
    return this.firestoreCRUDService.getList(this.path)
  }

  updateMember(member: Member, id: string | undefined) {
    return this.firestoreCRUDService.updateData(this.path, member, id)
  }

  deleteMember(id: string) {
    return this.firestoreCRUDService.deleteData(this.path, id)
  }



}
