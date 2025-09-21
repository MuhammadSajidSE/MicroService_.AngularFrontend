import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdernotificationService {
    private baseUrl = `${environment.apiUrl}/Order`;

  constructor(private http: HttpClient) {}

  addNotification(payload: { title: string; description: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/AddNotification`, payload);
  }
}
