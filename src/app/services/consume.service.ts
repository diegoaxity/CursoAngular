import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {
  private baseUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  login(body: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}login`, body);
  }
}
