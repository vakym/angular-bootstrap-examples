import { Component } from '@angular/core';
import { CategoryService } from '../../openapi/api/category.service'
import { map } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  category =  this.categoryService.categoryList(true).pipe(map(v => v.categories));
  constructor(private readonly categoryService: CategoryService) {}
}
