import { environment } from './../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintRepositoryService {

  constructor(private http: HttpClient) { }

  getPaints (): Observable<any>  {
    return this.http.get(`${environment.apiUrl}/paint`)
  }
}
