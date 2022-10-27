import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categories : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categories = ["Şapka", "Ayakkabı", "Parfüm", "Kemer"]
  }

}
