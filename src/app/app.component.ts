import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telco-frontend';


  sumofNums(a:number, b:number) : number{
    return a + b;
  }

  btnClick(){
    alert("Butona tıklandı")
  }
}
