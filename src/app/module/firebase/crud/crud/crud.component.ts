import { Component } from '@angular/core';
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";
import {DemoController} from "@core/firestore/controller/demo/demo-controller.service";
import {Member} from "@app/module/firebase/crud/model/member.model";
import {map} from "rxjs";

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  newMember = new Member()
  selectedMember = new Member()
  members: Member[] = []

  constructor(
    private layoutService: BackOfficeLayoutService,
    private demoController: DemoController
  ) {
  }

  ngOnInit(): void {
    this.initLayout()
    this.getListMember()
  }

  private initLayout() {
    this.layoutService.sideMenu = true
    this.layoutService.header = true
    this.layoutService.footer = true
  }

  createMember() {
    this.demoController.createMember(this.newMember).then(r => r)
  }

  getListMember() {
    this.demoController.getListMember().snapshotChanges().pipe(
        map(changes =>
            changes.map(c =>
                ({ id: c.payload.doc.id, ...c.payload.doc.data() })
            )
        )
    ).subscribe(data => {
      this.members = data;
    });
  }

  updateMember() {
    this.demoController.updateMember(this.selectedMember, this.selectedMember.id).then(() => {
      this.selectedMember = new Member()
    })
  }

  selectMember(member: Member) {
    this.selectedMember = {...member}
  }

  deleteMember(id: string) {
    this.demoController.deleteMember(id).then(r => r)
  }

}
