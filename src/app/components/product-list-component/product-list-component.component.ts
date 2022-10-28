import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  productList: string[] = [];
  productName: string = "";
  constructor() { }

  ngOnInit(): void {
    this.getProducts;
  }

  addProduct(productName:string){
    this.productList.push(this.productName)
  }
  deleteProduct(productName:string){
    this.productList = this.productList.filter(element => element !== productName)
  }
  getProducts(){
    return this.productList;
  }

}
