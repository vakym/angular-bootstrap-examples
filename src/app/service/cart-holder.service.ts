import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, map } from 'rxjs';
import { CartProduct, CartRequest, CartService } from 'src/openapi';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartHolderService {
  
  private cartList = new BehaviorSubject([] as CartProduct[]);
  private cartCount = new BehaviorSubject(0);
  private inited: boolean = false;


  constructor(
    private readonly cartService: CartService,
    private readonly authService: AuthService
    ) { }

  public getCartList():  Observable<CartProduct[]> {
    if (!this.inited) {
      this.updateCartList();
      this.inited = true
    }
    return this.cartList;
  }

  public getCartCount(): Observable<Number> {
    if (!this.inited) {
      this.updateCartList();
      this.inited = true
    }
    return this.cartCount;
  }

  private updateCartCount() {
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.cartService.getCartCount().subscribe(v => this.cartCount.next(v.count || 0) );
  }
  
  private updateCartList() {
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.updateCartCount();
    this.cartService.getCart().pipe(map(resp => resp.products || [])).subscribe(v => this.cartList.next(v));
  }

  public clearCart() {
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.cartService.removeAllFromCart().subscribe(result => this.updateCartList());
  }

  public changeCart(req: CartRequest) {
    this.cartService.changeCart(req).subscribe(d => this.updateCartList());
  }

  public addToCart(req: CartRequest) {
    this.cartService.configuration.credentials = { "BearerAuth" : this.authService.getToken() || ""};
    this.cartService.addToCart(req).subscribe(resp => this.updateCartList());
  }
}
