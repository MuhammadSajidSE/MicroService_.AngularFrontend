import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderpaymentService {
     private baseUrl = `${environment.apiUrl}/Payment`;

  constructor(private http: HttpClient) {}

  checkOrder(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/CheckOrder`);
  }
}
