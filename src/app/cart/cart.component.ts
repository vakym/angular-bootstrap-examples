import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartProduct, CartRequest, OrderService } from 'src/openapi';
import { AuthService } from '../service/auth.service';
import { CartHolderService } from '../service/cart-holder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  name!: string;

  public showSuccess: boolean = false;

  public cartList = new Observable<CartProduct[]>;

	constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    private readonly cartHolderService: CartHolderService,
    private readonly authService: AuthService,
    private readonly orderService: OrderService) {}
    
  ngOnInit(): void {
    this.cartList = this.cartHolderService.getCartList();
  }

  onChangeEvent(event: any){
    var req: CartRequest = {
      productId: Number.parseInt(event.target.placeholder),
      amount: Number.parseInt(event.target.value)
    };
    this.cartHolderService.changeCart(req);
  }

  clearCart() {
    this.cartHolderService.clearCart();
  }

  createOrder() {
    this.orderService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.orderService.createOrder().subscribe(v =>{
      this.cartHolderService.clearCart();
      this.showSuccess = true;
    })
  }
}
