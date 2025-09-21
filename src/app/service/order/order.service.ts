import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private baseUrl = `${environment.apiUrl}/Order`;
  constructor(private http: HttpClient) {}

  // GET all orders
  getAllOrders(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/AllOrder`);
  }

  // POST new order
  insertOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsertOrder`, order);
  }
}
