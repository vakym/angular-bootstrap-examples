import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductRequest, AdminService, Product, ProductService } from 'src/openapi';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent  implements OnInit{

  productId: number = 0;
  title: string = "";
  buttonText: string = "";
  product: Product = {};

  constructor(public readonly activeModal: NgbActiveModal,
    private readonly authService: AuthService,
    private readonly productService: ProductService,
    private readonly adminService: AdminService) {}
  
  ngOnInit(): void {
    if (this.productId != 0) {
      this.productService.productInfo(this.productId).subscribe(v => this.product = v || {});
    }
  }

  deleteProduct(productId: number) {
    this.adminService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.adminService.removeProduct(productId).subscribe(v => v);
    this.activeModal.close("Close");
  }

  updateProduct() {
    if (this.productId != 0) {
      this.adminService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
      var req: AddProductRequest = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        description: this.product.productDescription,
        categoryId: this.product.categoryId,
        picture: this.product.productImage  
      };
      this.adminService.updateProduct(req).subscribe(v => v);
    } else {
      this.adminService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
      var req: AddProductRequest = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        description: this.product.productDescription,
        categoryId: this.product.categoryId,
        picture: this.product.productImage  
      };
      this.adminService.addProduct(req).subscribe(v=>v);
    }
    this.activeModal.close("Close");
  }
}
