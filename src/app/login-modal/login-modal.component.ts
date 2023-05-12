import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  user: string = "";
  password: string = "";

  constructor(
    public activeModal: NgbActiveModal,
    private readonly authService: AuthService) {}

  login() {
      this.authService.signIn(this.user, this.password)
      .subscribe(result => result ? this.activeModal.close():"");
  }
}
