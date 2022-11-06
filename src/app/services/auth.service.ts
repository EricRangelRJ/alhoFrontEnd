import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL API WEB
  endpoint = API_CONFIG.baseUrl + "/api/auth";

  // INJEÇÃO DE DEPENDÊNCIA
  constructor(private httpClient: HttpClient) { }

  // AUTENTICAR
  autenticar(credenciais : Credenciais){
    return this.httpClient.post(this.endpoint, credenciais);
  }

  successfulLogin(authToken: string) {
    //salvando o valor do Token no LocalStorage
    localStorage.setItem('token', authToken);
  }

  // BUSCAR USUÁRIO AUTENTICADO
  usuarioAutenticado() {

    const authUser = JSON.parse(localStorage.getItem('AUTH') as any);
    return authUser;
  }

  logout() {
    localStorage.clear();
  }

}