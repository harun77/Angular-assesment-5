import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit, OnDestroy {
  lists: any;
  newListLabel: string = "";
  constructor(private router: Router, private productService: ProductService) { 
    this.lists = this.productService.getLists();
  }

  ngOnInit() { }

  deleteList(idx: number) {
    this.lists.splice(idx, 1);
  }

  createList() {
    const newList = {
      id: this.lists[this.lists.length-1].id + 1,
      label: this.newListLabel.trim(),
      products: []
    }
    this.lists.push(newList);
    this.productService.updateLists(this.lists);
    this.newListLabel = "";
    // console.log(this.lists);
  }

  editList(id: number) {
    this.router.navigate(["/dashboard", id]);
  }

  ngOnDestroy(){
    
  }
}
