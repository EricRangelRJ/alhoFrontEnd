import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_CONFIG } from '../config/api.config';
import { TipoEndereco } from '../models/tipoEndereco/tipoEndereco';

@Injectable({
  providedIn: 'root'
})
export class TipoEnderecoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<TipoEndereco[]> {
    return this.http.get<TipoEndereco[]>(`${API_CONFIG.baseUrl}/tipo_endereco`);
  }

}
