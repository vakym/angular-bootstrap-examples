import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AdminService, User } from 'src/openapi';
import { AuthService } from '../service/auth.service';
import { BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'enabled', 'ban'];
  dataSource = new BehaviorSubject([] as User[]);

  @ViewChild(MatTable)
  table: MatTable<User>;

  constructor(public readonly authService: AuthService,
    private readonly adminService: AdminService,
    private modalService: NgbModal) {
  }
  ngOnInit(): void {
    this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
    this.adminService.getUserList().subscribe(v => this.dataSource.next(v.users || []));
  }

  ban(userName: string) {
    this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
    this.adminService.banUser(userName || "").subscribe(v => v);
    this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
    this.adminService.getUserList().subscribe(v => this.dataSource.next(v.users || []));
    this.table.renderRows();
  }

  addUser() {
    const modalRef = this.modalService.open(RegistrationModalComponent);
    modalRef.componentInstance.title = 'Добавление пользователя';
    
    modalRef.result.then(res => {
      this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
      this.adminService.getUserList().subscribe(v => this.dataSource.next(v.users || []));
    });
  }
}
