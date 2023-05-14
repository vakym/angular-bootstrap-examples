import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Configuration, LoginService } from 'src/openapi';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject(false);
  private userName = new BehaviorSubject("");
  private isAdminProp = new BehaviorSubject(false);
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
      var data = jwt_decode(token) as any;
      if (data.scope === "fulladmin") {
        this.isAdminProp.next(true);
      }
      this.loggedIn.next(true);
      this.userName.next(user);
      return true;
    }))
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn;
  }

  isAdmin(): Observable<boolean> {
    return this.isAdminProp;
  }

  getUserName(): Observable<string> {
    return this.userName;
  }

  doLogout() {
    localStorage.removeItem('access_token');
    this.isAdminProp.next(false);
    this.loggedIn.next(false);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
