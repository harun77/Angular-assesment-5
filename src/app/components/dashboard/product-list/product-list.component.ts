import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: any;
  @Input() selectedProducts: number[];
  @Input() toAdd: boolean;

  @Output() addProductEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addProduct(event: any) {
    this.addProductEvent.emit(event);
  }

}
