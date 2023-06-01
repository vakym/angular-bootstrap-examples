import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService, RegistrationUserRequest, RegistrationValidationRequest } from 'src/openapi';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent {

  public title: string = "";
  public user: string = "";
  public password: string = "";
  public email: string = "";
  public validEmail: boolean = true;
  public emailError: string = "";
  public validLogin: boolean = true;
  public loginError: string = "";
  public passwordError: string = "";
  public validPassword: boolean = true;

  constructor(
    private readonly activeModal: NgbActiveModal,
    private readonly registrationService: RegistrationService) { }

  validateData() {
    var req: RegistrationValidationRequest = {
      userName: this.user,
      email: this.email
    }
    this.registrationService.validateUserData(req).subscribe(data => {
      if (!data.validationStatus) {
        data.validationError?.forEach((value, index) => {
          if (value.property === 'user') {
            this.validLogin = false;
            this.loginError = value.message || "";
          }
          if (value.property === 'contact') {
            this.validEmail = false;
            this.emailError = value.message || "";
          }
        });
      }
    })
  }

  localValidate() {
    if (this.user.length == 0) {
      this.validLogin = false;
      this.loginError = "Это обязательное поле";
    }

    if (this.password.length == 0) {
      this.validPassword = false;
      this.passwordError = "Это обязательное поле";
    }

    if (this.email.length == 0) {
      this.validEmail = false;
      this.emailError = "Это обязательное поле";
    }
  }

  public formCanged() {
    this.validLogin = true;
    this.validPassword = true;
    this.validEmail = true;
    this.localValidate();
    this.validateData();
  }

  public canRegister() {
    return this.validEmail && this.validLogin && this.validPassword;
  }

  public register() {
    if (!this.canRegister()) {
      this.formCanged();
      return;
    }
    var req: RegistrationUserRequest = {
      userName: this.user,
      password: this.password,
      email: this.email
    }
    this.registrationService.register(req).subscribe(d => this.close());
  }


  public close() {
    this.activeModal.close("Close");
  }
}
