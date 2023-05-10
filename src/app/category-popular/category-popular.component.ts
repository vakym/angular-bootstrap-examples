import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-popular',
  templateUrl: './category-popular.component.html',
  styleUrls: ['./category-popular.component.css']
})
export class CategoryPopularComponent implements OnInit {
  popularCategories: Category[]=[];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.categoryService.getPopularCategories()
    .subscribe(data => this.popularCategories = data);
  }
}
