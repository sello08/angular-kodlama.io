import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ListComponent } from './components/list/list.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { SplitPipe } from './pipes/split.pipe'
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ServicesComponentsComponent } from './components/services-components/services-components.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ListComponent,
    ProductListComponentComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    SpinnerComponent,
    ServicesComponentsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }    
