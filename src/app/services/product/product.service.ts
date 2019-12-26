import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  arrayOfProducts = [
    {
      "id":1,
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "CHECK PRINT SHIRT",
      "price": 110
    },
    {
      "id":2,
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "GLORIA HIGH LOGO SNEAKER",
      "price": 91
    },
    {
      "id":3,
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "CATE RIGID BAG",
      "price": 94.5
    },
    {
      "id":4,
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 438.9
    },
    {
      "id":5,
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 20
    }
  ];

  lists = [
    {
      id: 1,
      label: 'Default',
      products: [1, 2, 3]
    },
    {
      id: 2,
      label: 'List1',
      products: [4, 5]
    },
    {
      id: 3,
      label: 'List2',
      products: [1, 2, 3]
    }
  ];


  constructor() { }

  getProducts(){
    return this.arrayOfProducts;
  }

  getLists(){
    return this.lists;
  }

  getList(id: number){
    return this.lists.find( e => e.id == id);
  }

  updateLists(lists: any){
    this.lists = lists;
    // console.log(this.lists);
  }

  updateList(idx: number, list: any){
    const listIndex = this.lists.findIndex(e=>e.id == idx);
    this.lists[listIndex] = list;
    // console.log(this.lists);
  }
}
