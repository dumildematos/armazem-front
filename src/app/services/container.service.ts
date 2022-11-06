import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Container } from '../models/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient) { }

  listar(page: number, size: number): Observable<any>{
    return this.http.get(`${environment.url}/container?page=${page}&size=${size}`);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete(`${environment.url}/container/${id}`);
  }

  gravar(container: Container): Observable<any>{
    return this.http.post(`${environment.url}/container`, container);
  }  
  
  editar(container: Container): Observable<any>{
    return this.http.put(`${environment.url}/container`, container);
  }

}
