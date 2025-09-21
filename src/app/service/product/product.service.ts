import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl = `${environment.apiUrl}/Product`;
  constructor(private http: HttpClient) {}

  // GET all products
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/AllProduct`);
  }

  // POST new product
  insertProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsertProduct`, product);
  }
}
