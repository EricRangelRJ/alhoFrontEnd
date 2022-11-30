import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // URL API WEB
 endpoint = environment.baseUrl + "auth";

 // INJEÇÃO DE DEPENDÊNCIA
 constructor(private httpClient: HttpClient) { }

 // AUTENTICAR(envia um Login e recebe um Auth)
 autenticar(login: Login){
   return this.httpClient.post<Auth>(this.endpoint, login);
 }

 // BUSCAR USUÁRIO AUTENTICADO
 usuarioAutenticado() {

   const authUser = JSON.parse(localStorage.getItem('AUTH') as any);
   return authUser;
 }

}

