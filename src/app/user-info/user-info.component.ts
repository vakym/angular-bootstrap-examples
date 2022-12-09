import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';

@Component({

  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  openCart() {
		const offcanvasRef = this.offcanvasService.open(CartComponent);
		offcanvasRef.componentInstance.name = 'World';
	}
}
