import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration, LoginService } from 'src/openapi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject(false);
  private userName = new BehaviorSubject("");
  constructor(private readonly loginService: LoginService) { }

  signIn(user: string, password: string): Observable<boolean> {
    var config = new Configuration();
    config.username = user;
    config.password = password;
    config.basePath = this.loginService.configuration.basePath;
    this.loginService.configuration = config;
    return this.loginService.login()
    .pipe(map(token => {
      localStorage.setItem('access_token', token);
      this.loggedIn.next(true);
      this.userName.next(user);
      return true;
    }))
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn;
  }

  getUserName(): Observable<string> {
    return this.userName;
  }

  doLogout() {
    localStorage.removeItem('access_token');
    this.loggedIn.next(false);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
