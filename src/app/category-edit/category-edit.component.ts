import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category, CategoryService } from 'src/openapi';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryId: number = 0;
  title: string = "";
  buttonText: string = "";
  category: Category = {};
  

  constructor(public readonly activeModal: NgbActiveModal,
    private readonly authService: AuthService,
    private readonly categoryService: CategoryService) {}
  
    ngOnInit(): void {
    if (this.categoryId != 0) {
      this.categoryService.categoryList(false)
      .subscribe(v => this.category = v.categories?.find(c => c.id == this.categoryId) || {});
    }
  }

  deleteCategory() {
    
  }

  updateCategory() {
    if (this.categoryId != 0) {
      // обновить категорию
    } else {
      // добавить категорию
    }
    this.activeModal.close("Close");
  }
}
