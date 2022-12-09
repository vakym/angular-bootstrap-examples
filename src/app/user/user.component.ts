import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  host: {'class': 'col-xl-3 col-lg-3 d-none d-lg-block'}
})
export class UserComponent {
  isLoggin: boolean = false;
}
