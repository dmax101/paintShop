import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, data);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, data);
  }
}
