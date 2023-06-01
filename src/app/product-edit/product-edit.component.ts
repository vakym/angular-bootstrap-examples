import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductService } from 'src/openapi';
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
    private readonly productService: ProductService) {}
  
  ngOnInit(): void {
    if (this.productId != 0) {
      this.productService.productInfo(this.productId).subscribe(v => this.product = v || {});
    }
  }

  deleteProduct() {
    
  }

  updateProduct() {
    if (this.productId != 0) {
      // обновить категорию
    } else {
      // добавить категорию
    }
    this.activeModal.close("Close");
  }
}
