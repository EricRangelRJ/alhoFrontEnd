import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { ClientePostDTO } from '../dto/cliente/clientePostDTO';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`);
  }

  create(cliente: ClientePostDTO): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente)
  }

  delete(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }
}
