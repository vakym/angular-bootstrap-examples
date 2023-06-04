import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { AdminService, Category, CategoryService } from 'src/openapi';
import { MatTable } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'main', 'img'];
  dataSource = new BehaviorSubject([] as Category[]);


  @ViewChild(MatTable)
  table: MatTable<Category>;

  constructor(
    private readonly authService: AuthService,
    private readonly adminService: AdminService,
    private readonly categoryService: CategoryService,
    private modalService: NgbModal) {}
  
  ngOnInit(): void {
    this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
    this.categoryService.categoryList(false).subscribe(v => this.dataSource.next(v.categories || []))
  }

  addCategory(categoryId: number) {
    const modalRef = this.modalService.open(CategoryEditComponent);
    if(categoryId == 0) {
      modalRef.componentInstance.title = 'Добавление категории';
      modalRef.componentInstance.buttonText = 'Сохранить';
      modalRef.componentInstance.categoryId = 0;
    } else {
      modalRef.componentInstance.title = 'Изменение категории';
      modalRef.componentInstance.buttonText = 'Обновить';
      modalRef.componentInstance.categoryId = categoryId;
    }
    modalRef.result.then(res => {
      this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
      this.categoryService.categoryList(false).subscribe(v => this.dataSource.next(v.categories || []));
    });
   
  }
}
