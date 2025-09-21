import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderuserService {
   private baseUrl = `${environment.apiUrl}/Order`;

  constructor(private http: HttpClient) {}

  getUsersFromGateway(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/UsersFromGateway`);
  }
}
