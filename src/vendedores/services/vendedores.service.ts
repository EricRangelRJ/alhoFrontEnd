import { Vendedor } from './../models/vendedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

 // URL API WEB
 endpoint = environment.baseUrl + 'vendedores';

 // INJEÇÃO DE DEPENDÊNCIA
 constructor(private httpClient: HttpClient) { }

  // BUSCAR TODOS
  buscarTodos() {
   return this.httpClient.get<Vendedor[]>(this.endpoint);
 }
}
