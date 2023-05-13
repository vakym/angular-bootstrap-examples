import { Component, Input, OnInit } from '@angular/core';
import { CartService, Product, ProductService, CartRequest } from 'src/openapi';
import { AuthService } from '../service/auth.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productId: number = 0;
  public product: Product = {};
  public amount: number = 1;
  constructor(private readonly productService: ProductService,
              private readonly authService: AuthService,
              private readonly cartService: CartService){}
  ngOnInit(): void {
    this.productService.productInfo(this.productId)
      .subscribe(data => this.product = data);
  }

  canAddToCart() : Observable<boolean> {
      return this.authService.isLoggedIn();
  }

  addToCart() {
      this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
      var req: CartRequest = {
        productId: this.productId,
        amount: this.amount
      };
      this.cartService.addToCart(req).subscribe(resp => console.log(resp));
  }
}
