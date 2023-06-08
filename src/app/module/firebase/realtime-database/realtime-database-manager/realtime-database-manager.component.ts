import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Member} from "@app/module/firebase/crud/model/member.model";
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";
import {RealtimeDatabaseService} from "@core/firestore/service/realtime-database/realtime-database.service";

@Component({
  selector: 'app-realtime-database-manager',
  templateUrl: './realtime-database-manager.component.html',
  styleUrls: ['./realtime-database-manager.component.scss']
})
export class RealtimeDatabaseManagerComponent implements OnInit, OnChanges {

  newMember = new Member()
  selectedMember = new Member()
  members: Member[] = []
  usersPath = 'users'
  selectedMethod: { key: string } = {key: 'name'}
  value: string | undefined = ''

  queryMethods = [
    {
      key: 'name'
    },
    {
      key: 'hobby'
    }
  ]

  constructor(
    private layoutService: BackOfficeLayoutService,
    private firebaseRealtimeDatabase: RealtimeDatabaseService,
  ) {
  }

  ngOnInit(): void {
    this.initLayout()
    this.getListMember().then(r => r)
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.members[0] === undefined) {
      this.getListMember().then(r => r)
    }
  }

  private initLayout() {
    this.layoutService.sideMenu = true
    this.layoutService.header = true
    this.layoutService.footer = true
  }

  async createMember() {
    await this.firebaseRealtimeDatabase.addData(this.usersPath, this.newMember)
    this.getListMember().then(() => this.newMember = new Member())
  }

  async getListMember() {
    this.members = await this.firebaseRealtimeDatabase.getList(this.usersPath)
    console.log(this.members)
  }

  selectMember(member: Member) {
    this.selectedMember = {...member}
  }

  deleteMember(id: string) {
    this.firebaseRealtimeDatabase.deleteData(this.usersPath,id)
    this.getListMember().then(r => r)
  }

  updateMember(id: string) {
    this.firebaseRealtimeDatabase.updateData(this.usersPath,id, this.selectedMember)
    this.getListMember().then(() => this.selectedMember = new Member())

  }

  queryData() {
    this.members = this.firebaseRealtimeDatabase.query(this.selectedMethod.key, this.value)
  }

}
