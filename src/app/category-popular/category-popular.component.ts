import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../openapi/api/category.service'
import { BehaviorSubject, map } from 'rxjs';
import { Category } from 'src/openapi';


@Component({
  selector: 'app-category-popular',
  templateUrl: './category-popular.component.html',
  styleUrls: ['./category-popular.component.css']
})
export class CategoryPopularComponent implements OnInit{
  
  public category = new BehaviorSubject([] as Category[]);

  constructor(private readonly categoryService: CategoryService){}
  ngOnInit(): void {
     this.categoryService.categoryList(true)
     .pipe(map(v =>{ console.log(v); return v;}))
     .subscribe(v => this.category.next(v.categories || []));
  }
}
