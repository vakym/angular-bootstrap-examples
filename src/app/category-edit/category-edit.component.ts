import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, Category, CategoryService } from 'src/openapi';
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
  

  constructor(
    public readonly activeModal: NgbActiveModal,
    private readonly authService: AuthService,
    private readonly categoryService: CategoryService,
    private readonly adminService: AdminService) {}
  
    ngOnInit(): void {
    if (this.categoryId != 0) {
      this.categoryService.categoryList(false)
      .subscribe(v => this.category = v.categories?.find(c => c.id == this.categoryId) || {});
    }
  }

  deleteCategory(id: number) {
    this.adminService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.adminService.removeCategory(id).subscribe(v =>v);
    this.activeModal.close("Close");
  }

  updateCategory() {
    if (this.categoryId != 0) {
      this.adminService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
      this.adminService.updateCategory(this.category.id, this.category.name, this.category.mainCategory, this.category.imageUrl)
      .subscribe(v =>v);
    } else {
      this.adminService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
      this.adminService.addCategory(this.category.name, this.category.mainCategory, this.category.imageUrl)
      .subscribe(v=>v);
    }
    this.activeModal.close("Close");
  }
}
