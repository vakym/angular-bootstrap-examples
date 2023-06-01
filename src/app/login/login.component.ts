import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private modalService: NgbModal) {}

  openLoginModal() {
    this.modalService.open(LoginModalComponent);
  }
  
  openRegistrationModal() {
    const modalRef = this.modalService.open(RegistrationModalComponent);
    modalRef.componentInstance.title = 'Регистрация';
  }
}
