import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';





@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  
  categories : Category[] = []

  newCategories : Category[] = [];

  selectedCategory !: Category;

  header : any = "Form - Add";

  language: string = 'en';

  categoryAddForm !: FormGroup;

  categoryIdToDelete !: number ; // state
  
  categoryIdToUpdate !: number;

  error: string = '';

  isUpdating : boolean = false;


  
  constructor( private categoriesService: CategoriesService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getCategories();
    this.createCategoryAddForm();
  }
  changeToUpdate(item: Category){
    this.isUpdating = true;
    
    this.categoryAddForm = this.formBuilder.group({
      name: [item.name , Validators.required],
      description: [item.description, [Validators.required, Validators.minLength(10)]],
    });
    this.categories.forEach((p) => {
      if(p.name === this.categoryAddForm.value.name)
      {
        this.categoryIdToUpdate = p.id
      }
    })

    this.header = "Form-Update " + this.categoryIdToUpdate

  }
  
  updateCategory( ){
  this.isUpdating = false;
  this.header = `Form - Add` 
  this.selectedCategory = {...this.categoryAddForm.value}

  this.categoriesService.update( this.categoryIdToUpdate ,this.selectedCategory).subscribe({
    next: (response) => {
      console.log(`Category${response} has updated`);
    },
    error: (err) => {
      console.log(err);

      this.error = err.statusText;
    },
    complete: () => {
      if (this.error) this.error = '';
      this.categoryAddForm.reset();
      this.getCategories();
    },
    
  })
 

  this.categoryAddForm = this.formBuilder.group({
    name: ['' , Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });
  
  
  }
  

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  getCategories(): void {

    this.categoriesService.getCategories().subscribe((response) => {
     
      this.categories = response;
    });
  }

  // changecategoryIdToDelete(event: any) {
  //   this.categoryIdToDelete = event.target.value;
  // }

  add(): void {
    this.isUpdating = false


    if (this.categoryAddForm.invalid) {
      this.error = 'Form is invalid';
      return;
    }
    if (this.error) this.error = '';

    // const {name, description} = this.categoryAddForm.value;
    // // this.categoryAddForm.value
    // const category: Category = {
    //   id: 0,
    //   // name: name,
    //   name,
    //   description,
    // };

    // spread operator ... (ES6)
   
    const category: Category = { ...this.categoryAddForm.value }

    this.categoriesService.add(category).subscribe({
      next: (response) => {
        console.info(`Category(${response}) has added.`);
      },
      error: (err) => {
        console.log(err);

        this.error = err.statusText;
      },
      complete: () => {
        if (this.error) this.error = '';
        this.categoryAddForm.reset();
        this.getCategories();
      },
    });

   
    
  }

  delete() {
    this.categoriesService.delete(this.categoryIdToDelete).subscribe(() => {
      this.categoryIdToDelete = 0;
      this.getCategories();
    });
  }
}
