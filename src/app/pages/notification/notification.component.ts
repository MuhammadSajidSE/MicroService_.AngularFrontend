import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../service/notification/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];
  newNotification = { title: '', description: '' };

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  // Load all notifications
  loadNotifications(): void {
    this.notificationService.getAllNotifications().subscribe({
      next: (res) => {
        if (res.result) {
          this.notifications = res.data;
        }
      },
      error: (err) => console.error('Error fetching notifications:', err)
    });
  }

  // Add new notification
  addNotification(): void {
    if (!this.newNotification.title || !this.newNotification.description) {
      alert('Both fields are required');
      return;
    }

    this.notificationService.addNotification(this.newNotification).subscribe({
      next: (res) => {
        if (res.result) {
          alert('Notification added successfully');
          this.newNotification = { title: '', description: '' }; // reset form
          this.loadNotifications(); // refresh table
        } else {
          alert(res.errormessage || 'Error adding notification');
        }
      },
      error: (err) => console.error('Error adding notification:', err)
    });
  }
}
