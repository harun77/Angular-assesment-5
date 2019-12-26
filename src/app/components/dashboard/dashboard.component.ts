import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedList: any;
  selectedListId: number;
  products: any;
  searchKey: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.selectedListId = params['id'] || 1);
    this.selectedList = this.productService.getList(this.selectedListId);
  }

  addProduct(event: any) {
    this.selectedList.products =
      event.toAdd ?
        this.selectedList.products.concat(event.id)
        :
        this.selectedList.products = this.selectedList.products.filter(e => e != event.id);
    // console.log(this.selectedList.products);
    this.productService.updateList(this.selectedListId, this.selectedList);
  }

}