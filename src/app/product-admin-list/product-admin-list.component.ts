import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { User, AdminService, ProductService, Product } from 'src/openapi';
import { AuthService } from '../service/auth.service';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-admin-list',
  templateUrl: './product-admin-list.component.html',
  styleUrls: ['./product-admin-list.component.css']
})
export class ProductAdminListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new BehaviorSubject([] as Product[]);

  @ViewChild(MatTable)
  table: MatTable<Product>;

  constructor(public readonly authService: AuthService,
    private readonly adminService: AdminService,
    private readonly productService: ProductService,
    private modalService: NgbModal) {
  }
  ngOnInit(): void {
    this.updateProductList();
  }

  updateProductList() {
    this.productService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
    this.productService.productList(0).subscribe(v => this.dataSource.next(v.products||[]));
  }

  addProduct(productId: number) {
    const modalRef = this.modalService.open(ProductEditComponent);
    if(productId == 0) {
      modalRef.componentInstance.title = 'Добавление продукта';
      modalRef.componentInstance.buttonText = 'Сохранить';
      modalRef.componentInstance.productId = 0;
    } else {
      modalRef.componentInstance.title = 'Изменение продукта';
      modalRef.componentInstance.buttonText = 'Обновить';
      modalRef.componentInstance.productId = productId;
    }
  }
}
