import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    private baseUrl = `${environment.apiUrl}/Notification`;
  constructor(private http: HttpClient) {}

  // GET all notifications
  getAllNotifications(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/AllNotification`);
  }

  // POST new notification
  addNotification(notification: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/AddNotification`, notification);
  }
}
