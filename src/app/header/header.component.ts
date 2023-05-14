import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css' , './slicknav.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor(private readonly authService: AuthService) {
  }

  isManager() {
    return this.authService.isAdmin();
  }

  ngOnInit(): void {
    this.isCollapsed = true;
  } 
}
