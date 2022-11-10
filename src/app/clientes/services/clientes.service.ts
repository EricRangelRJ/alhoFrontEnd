import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // URL API WEB
  endpoint = environment.baseUrl + 'clientes';

  // INJEÇÃO DE DEPENDÊNCIA
  constructor(private httpClient: HttpClient) { }

   // BUSCAR TODOS
   buscarTodos() {
    return this.httpClient.get<Cliente[]>(this.endpoint);
  }

  // // CADASTRAR
  // cadastrar(cliente: Cliente): Observable<Cliente> {
  //   return this.httpClient.post<Cliente>(this.endpoint, cliente);
  // }

  // // BUSCAR ID
  // buscarId(idCliente: number) {
  //   return this.httpClient.get<Cliente>(`${this.endpoint}/${idCliente}`);
  // }

  // // ATUALIZAR
  // atualizar(cliente: Cliente) {
  //   return this.httpClient.put<Cliente>(this.endpoint, cliente);
  // }

  // // EXCLUIR
  // excluir(idCliente: string) {
  //   return this.httpClient.delete(`${this.endpoint}/${idCliente}`).pipe(first());
  // }
}
