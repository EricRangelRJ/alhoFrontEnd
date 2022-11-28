import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  // URL API WEB
 endpoint = environment.baseUrl + 'fornecedores';

 // INJEÇÃO DE DEPENDÊNCIA
 constructor(private httpClient: HttpClient) { }

  // BUSCAR TODOS
  buscarTodos() {
   return this.httpClient.get<Fornecedor[]>(this.endpoint);
 }

}
