import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { AuthService } from '../service/auth.service';
import { CartHolderService } from '../service/cart-holder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {

  public cartCount: Observable<Number> | undefined;

  constructor(private offcanvasService: NgbOffcanvas,
    public readonly authService: AuthService,
    private readonly cartHolderService: CartHolderService) {}
  ngOnInit(): void {
    this.cartCount = this.cartHolderService.getCartCount();
  }

  openCart() {
		const offcanvasRef = this.offcanvasService.open(CartComponent);
		offcanvasRef.componentInstance.name = 'World';
	}

  logOut() {
    this.authService.doLogout();
  }
}
