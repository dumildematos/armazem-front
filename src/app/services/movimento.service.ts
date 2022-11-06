import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimento } from '../models/movimento';

@Injectable({
  providedIn: 'root'
})
export class MovimentoService {

  constructor(private http: HttpClient) { }

  listar(page: number, size: number): Observable<any>{
    return this.http.get(`${environment.url}/movimento?page=${page}&size=${size}`);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete(`${environment.url}/movimento/${id}`);
  }

  gravar(movimento: Movimento): Observable<any>{
    return this.http.post(`${environment.url}/movimento`, movimento);
  }  
  
  editar(movimento: Movimento): Observable<any>{
    return this.http.put(`${environment.url}/movimento`, movimento);
  }

}
