import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../service/payment/payment.service';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: any[] = [];
  newPayment = { name: '', description: '', type: '', price: '', amount: 0 };

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  // Load all payments
  loadPayments(): void {
    this.paymentService.getAllPayments().subscribe({
      next: (res) => {
        if (res.result) {
          this.payments = res.data;
        }
      },
      error: (err) => console.error('Error fetching payments:', err)
    });
  }

  // Add new payment
  addPayment(): void {
    if (!this.newPayment.name || !this.newPayment.description || !this.newPayment.type || !this.newPayment.price) {
      alert('All fields are required');
      return;
    }

    this.paymentService.insertPayment(this.newPayment).subscribe({
      next: (res) => {
        if (res.result) {
          alert('Payment added successfully');
          this.newPayment = { name: '', description: '', type: '', price: '', amount: 0 };
          this.loadPayments();
        } else {
          alert(res.errormessage || 'Error adding payment');
        }
      },
      error: (err) => console.error('Error adding payment:', err)
    });
  }
}
