import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

   // URL API WEB
   endpoint = environment.baseUrl + 'pedidos';

   // INJEÇÃO DE DEPENDÊNCIA
   constructor(private httpClient: HttpClient) { }
 
    // BUSCAR TODOS
    buscarTodos() {
     return this.httpClient.get<Pedido[]>(this.endpoint);
   }
}
