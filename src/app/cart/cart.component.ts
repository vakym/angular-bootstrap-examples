import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartProduct, CartRequest, CartService } from 'src/openapi';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  name!: string;

  public cartList: CartProduct[] | undefined = [];

	constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    private readonly cartService: CartService,
    private readonly authService: AuthService) {}
  ngOnInit(): void {
   this.updateCartList();
  }


  updateCartList() {
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.cartService.getCart().subscribe(data => this.cartList = data.products);
  }

  clearCart() {
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.cartService.removeAllFromCart().subscribe(result => this.updateCartList());
  }

  onChangeEvent(event: any){
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    var req: CartRequest = {
      productId: Number.parseInt(event.target.placeholder),
      amount: Number.parseInt(event.target.value)
    };
    this.cartService.changeCart(req).subscribe(d => this.updateCartList());
  }
}
