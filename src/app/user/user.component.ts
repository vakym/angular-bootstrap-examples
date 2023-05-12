import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  host: {'class': 'col-xl-3 col-lg-3 d-none d-lg-block'}
})
export class UserComponent {
  constructor(public readonly authService: AuthService) {
  }
}
