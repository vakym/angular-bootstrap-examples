import { Component } from '@angular/core';
import { CategoryService } from '../../openapi/api/category.service'
import { map } from 'rxjs';


@Component({
  selector: 'app-category-popular',
  templateUrl: './category-popular.component.html',
  styleUrls: ['./category-popular.component.css']
})
export class CategoryPopularComponent {
  $category =  this.categoryService.categoryList(true).pipe(map(v => v.categories));

  constructor(private readonly categoryService: CategoryService){}
}
