import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../service/order/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  newOrder = { name: '', description: '', price: '', quantity: 0 };

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  // Load all orders
  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: (res) => {
        if (res.result) {
          this.orders = res.data;
        }
      },
      error: (err) => console.error('Error fetching orders:', err)
    });
  }

  // Add new order
  addOrder(): void {
    if (!this.newOrder.name || !this.newOrder.description || !this.newOrder.price) {
      alert('All fields are required');
      return;
    }

    this.orderService.insertOrder(this.newOrder).subscribe({
      next: (res) => {
        if (res.result) {
          alert('Order added successfully');
          this.newOrder = { name: '', description: '', price: '', quantity: 0 }; // reset form
          this.loadOrders(); // refresh table
        } else {
          alert(res.errormessage || 'Error adding order');
        }
      },
      error: (err) => console.error('Error adding order:', err)
    });
  }
}
