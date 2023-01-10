import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { ClienteRequestDTO } from '../dto/cliente/clienteRequestDTO';
import { ClienteResponseDTO } from '../dto/cliente/clienteResponseDTO';
import { Cliente } from '../models/cliente';
import { ClientePost } from '../models/cliente/clientePostDTO';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<ClienteRequestDTO[]> {
    return this.http.get<ClienteRequestDTO[]>(`${API_CONFIG.baseUrl}/clientes`);
  }

  findById(id: string): Observable<ClienteResponseDTO> {
    return this.http.get<ClienteResponseDTO>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }

  create(cliente: ClientePost): Observable<ClientePost> {
    return this.http.post<ClientePost>(`${API_CONFIG.baseUrl}/clientes`, cliente)
  }

  delete(id: string): Observable<Cliente> {
    return this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/clientes/${id}`);
  }

  //Update passa o idCliente como parâmetro
  update(cliente: ClienteRequestDTO): Observable<ClienteRequestDTO> {
    return this.http.put<ClienteRequestDTO>(`${API_CONFIG.baseUrl}/clientes`, cliente);
  }
}
