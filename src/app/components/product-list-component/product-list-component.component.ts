import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  myForm: FormGroup;
  myNames: string[] = [];
  name:string = "";
  /*
  
  productList: string[] = [];
  productName: string = "";

  */
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ''
    });
  }

   ngOnInit(): void {
    this.getNames();
   }

  
   addNames(name:string){
    this.myNames.push(name)
   }

   getNames(){
    return this.myNames;
   }

   deleteName(name:string){
    this.myNames = this.myNames.filter(p => p !== name)
   }


  onSubmit(form: FormGroup) {
    this.addNames(form.value.name)
  }


 /*  this.getProducts;

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

  */

}
