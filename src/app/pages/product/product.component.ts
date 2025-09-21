import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product/product.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct = { name: '', description: '', price: 0, quantity: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load all products
  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        if (res.result) {
          this.products = res.data;
        }
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  // Add new product
  addProduct(): void {
    if (!this.newProduct.name || !this.newProduct.description || this.newProduct.price <= 0 || this.newProduct.quantity <= 0) {
      alert('All fields are required and must be valid');
      return;
    }

    this.productService.insertProduct(this.newProduct).subscribe({
      next: (res) => {
        if (res.result) {
          alert('Product added successfully');
          this.newProduct = { name: '', description: '', price: 0, quantity: 0 }; // reset form
          this.loadProducts(); // refresh table
        } else {
          alert(res.errormessage || 'Error adding product');
        }
      },
      error: (err) => console.error('Error adding product:', err)
    });
  }
}
