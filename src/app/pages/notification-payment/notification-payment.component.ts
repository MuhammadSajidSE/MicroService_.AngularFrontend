import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentnotificationService } from '../../service/PaymentNotification/paymentnotification.service';

@Component({
  selector: 'app-notification-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notification-payment.component.html',
  styleUrls: ['./notification-payment.component.css']
})
export class NotificationPaymentComponent {
  newPayment = { name: '', description: '', type: '', price: '', amount: 0 };

  constructor(private paymentService: PaymentnotificationService) {}

  addPayment(): void {
    if (!this.newPayment.name || !this.newPayment.description || !this.newPayment.type || !this.newPayment.price || this.newPayment.amount <= 0) {
      alert('All fields are required and must be valid');
      return;
    }

this.paymentService.addPayment(this.newPayment).subscribe({
  next: (res) => {
    if (res && res.message) {
      alert(res.message); // ✅ will show "Notification sent successfully"
      console.log("Inserted payment:", res.notification); 
      console.log("Service response:", res.serviceResponse);

      // reset form
      this.newPayment = { name: '', description: '', type: '', price: '', amount: 0 };
    } else {
      alert('Unexpected response from server');
    }
  },
  error: (err) => {
    console.error('Error:', err);
    alert('Something went wrong while adding payment');
  }
});

  }
}
