import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-popular',
  templateUrl: './category-popular.component.html',
  styleUrls: ['./category-popular.component.css']
})
export class CategoryPopularComponent implements OnInit {
  popularCategories: Category[]=[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Category[]>("http://localhost:9009/category/main").subscribe({next: (data: any) => this.popularCategories=data});
  }

}
