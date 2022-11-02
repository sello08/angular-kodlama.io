import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import { ServicesComponentsComponent } from './components/services-components/services-components.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'services' , component: ServicesComponentsComponent },
  {path:'categories' , component: ProductListComponentComponent },
  {path:'customers' , component: ProductListComponentComponent },
  {path:'roles' , component: ProductListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
