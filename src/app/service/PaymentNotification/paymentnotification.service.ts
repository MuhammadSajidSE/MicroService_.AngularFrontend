import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentnotificationService {
  private baseUrl = `${environment.apiUrl}/Notification`;

  constructor(private http: HttpClient) {}

  // POST: Add Payment Notification
  addPayment(payment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/AddPayment`, payment);
  }
}
