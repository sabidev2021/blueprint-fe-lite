import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sabi-shimmer',
  templateUrl: './sabi-shimmer.component.html',
  styleUrls: ['./sabi-shimmer.component.scss']
})
export class SabiShimmerComponent implements OnInit {
  url = '';
  products: any[] = [];

  ngOnInit() {
    this.products = Array.from({ length: 5 }).map((_, i) => `Item #${i}`);
    console.log('products : ', this.products);
  }
}
