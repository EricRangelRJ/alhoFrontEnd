import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/api/usuarios`);
  }
}
