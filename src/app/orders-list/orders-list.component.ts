import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { AdminService, Order } from 'src/openapi';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  displayedColumns: string[] = ['id', 'userName', 'enabled'];
  dataSource = new BehaviorSubject([] as Order[]);
  selectedUser: Order;

  @ViewChild(MatTable)
  table: MatTable<Order>;

  constructor(public readonly authService: AuthService,
    private readonly adminService: AdminService) {
  }
  ngOnInit(): void {
    this.adminService.configuration.credentials = { "BearerAuth": this.authService.getToken() || "" };
    this.adminService.getOrders().subscribe(v => this.dataSource.next(v.orders || []));
  }
}
