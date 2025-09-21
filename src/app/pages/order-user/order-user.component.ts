import { Component, OnInit } from '@angular/core';
import { OrderuserService } from '../../service/OrderUser/orderuser.service';
import { NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css'],
  imports:[NgFor]
})
export class OrderUserComponent implements OnInit {
  users: any[] = [];

  constructor(private orderUserService: OrderuserService) {}

  ngOnInit(): void {
    this.orderUserService.getUsersFromGateway().subscribe({
      next: (res) => {
        if (res.result && res.data) {
          this.users = res.data;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
