import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdernotificationService } from '../../service/OrderNotification/ordernotification.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order-notification',
  templateUrl: './order-notification.component.html',
  styleUrls: ['./order-notification.component.css'],
  imports:[ReactiveFormsModule,NgIf]
})
export class OrderNotificationComponent {
  notificationForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private orderNotificationService: OrdernotificationService
  ) {
    this.notificationForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitNotification() {
    if (this.notificationForm.valid) {
      this.orderNotificationService.addNotification(this.notificationForm.value)
        .subscribe({
          next: (res) => {
            this.message = '✅ Notification added successfully!';
            this.notificationForm.reset();
          },
          error: (err) => {
            this.message = '❌ Error adding notification!';
            console.error(err);
          }
        });
    }
  }
}
