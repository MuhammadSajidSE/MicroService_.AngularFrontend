import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = `${environment.apiUrl}/Payment`;

  constructor(private http: HttpClient) {}

  // GET all payments
  getAllPayments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/AllPayment`);
  }

  // POST new payment
  insertPayment(payment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/InsertPayment`, payment);
  }
}
