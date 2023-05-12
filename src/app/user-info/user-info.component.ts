import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { AuthService } from '../service/auth.service';

@Component({

  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  constructor(private offcanvasService: NgbOffcanvas,
    public readonly authService: AuthService) {}

  openCart() {
		const offcanvasRef = this.offcanvasService.open(CartComponent);
		offcanvasRef.componentInstance.name = 'World';
	}

  logOut() {
    this.authService.doLogout();
  }
}
