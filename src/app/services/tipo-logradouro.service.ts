import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { TipoLogradouro } from '../models/tipoLogradouro/tipoLogradouro';

@Injectable({
  providedIn: 'root'
})
export class TipoLogradouroService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<TipoLogradouro[]> {
    return this.http.get<TipoLogradouro[]>(`${API_CONFIG.baseUrl}/tipo_logradouro`);
  }

}
