import { Component, OnInit } from '@angular/core';
import { OrderpaymentService } from '../../service/OrderPayment/orderpayment.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.component.html',
  styleUrls: ['./order-payment.component.css'],
  imports:[NgFor]
})
export class OrderPaymentComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderPaymentService: OrderpaymentService) {}

  ngOnInit(): void {
    this.orderPaymentService.checkOrder().subscribe({
      next: (res) => {
        if (res.result && res.data) {
          this.orders = res.data;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}
