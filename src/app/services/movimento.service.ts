import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  constructor(private http: HttpClient) { }

  listar(page: number, size: number): Observable<any>{
    return this.http.get(`${environment.url}/movimento?page=${page}&size=${size}`);
  }

}
