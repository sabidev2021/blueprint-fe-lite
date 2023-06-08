import { Component } from '@angular/core';
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";
import {Book} from "@app/module/firebase/query/model/book.model";
import {QueryService} from "@core/firestore/service/query/query.service";

@Component({
  selector: 'app-query-manager',
  templateUrl: './query-manager.component.html',
  styleUrls: ['./query-manager.component.scss']
})
export class QueryManagerComponent {

  queryMethods = [
    {
      method: 'less then',
      key: 'price'
    },
    {
      method: 'less then equal',
      key: 'price'
    },
    {
      method: 'equal to',
      key: 'price'
    },
    {
      method: 'greater then',
      key: 'price'
    },
    {
      method: 'greater then equal',
      key: 'price'
    },
    {
      method: 'not equal',
      key: 'price'
    },
    {
      method: 'array-contains',
      key: 'category'
    },
    {
      method: 'array-contains-any',
      key: 'category'
    }
  ]

  value: string | number | undefined
  otherValue: string | number | undefined

  selectedMethod: { method: string, key: string } = {method: 'les then', key: 'price'}

  books: Book[] = []

  constructor(
    private layoutService: BackOfficeLayoutService,
    private firestormQuery: QueryService
  ) {
  }

  ngOnInit(): void {
    this.initLayout()
  }

  private initLayout() {
    this.layoutService.sideMenu = true
    this.layoutService.header = true
    this.layoutService.footer = true
  }

  async queryData() {
    if (this.selectedMethod.method === 'less then') {
      let response = await this.firestormQuery.queryLessThan('books', this.selectedMethod.key, Number(this.value))
      this.books = response
    } else if (this.selectedMethod.method === 'less then equal') {
      let response = await this.firestormQuery.queryLessThanOrEqualTo('books', this.selectedMethod.key, Number(this.value))
      this.books = response
    } else if (this.selectedMethod.method === 'equal to') {
      let response = await this.firestormQuery.queryEqualTo('books', this.selectedMethod.key, Number(this.value))
      this.books = response
    } else if (this.selectedMethod.method === 'greater then') {
      let response = await this.firestormQuery.queryGreaterThan('books', this.selectedMethod.key, Number(this.value))
      this.books = response
    } else if (this.selectedMethod.method === 'greater then equal') {
      let response = await this.firestormQuery.queryGreaterThanOrEqualTo('books', this.selectedMethod.key, Number(this.value))
      this.books = response
    } else if (this.selectedMethod.method === 'not equal') {
      let response = await this.firestormQuery.queryNotEqualTo('books', this.selectedMethod.key, Number(this.value))
      this.books = response
    } else if (this.selectedMethod.method === 'array-contains') {
      let response = await this.firestormQuery.queryArrayContains('books', this.selectedMethod.key, this.value)
      this.books = response
    } else if (this.selectedMethod.method === 'array-contains-any') {
      let response = await this.firestormQuery.queryArrayContainsAny('books', this.selectedMethod.key, [this.value, this.otherValue])
      this.books = response
    }
    // else if (this.selectedMethod.method === 'in') {
    //   let response = await this.firestormQuery.queryIn('books', this.selectedMethod.key, [this.value, this.otherValue])
    //   this.books = response
    // } else if (this.selectedMethod.method === 'not-in') {
    //   let response = await this.firestormQuery.queryNotIn('books', this.selectedMethod.key, [this.value, this.otherValue])
    //   this.books = response
    // }
  }

}
