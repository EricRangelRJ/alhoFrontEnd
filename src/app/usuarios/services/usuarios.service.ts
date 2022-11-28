import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 // URL API WEB
 endpoint = environment.baseUrl + 'usuarios';

 // INJEÇÃO DE DEPENDÊNCIA
 constructor(private httpClient: HttpClient) { }

  // BUSCAR TODOS
  buscarTodos() {
   return this.httpClient.get<Usuario[]>(this.endpoint);
 }

 // // CADASTRAR
 // cadastrar(usuario: Usuario) {
 //   return this.httpClient.post<Usuario>(this.endpoint, usuario);
 // }

 // // BUSCAR ID
 // buscarId(idUsuario: number) {
 //   return this.httpClient.get<Usuario>(`${this.endpoint}/${idUsuario}`);
 // }

 // // ATUALIZAR
 // atualizar(Usuario: Usuario) {
 //   return this.httpClient.put<Usuario>(this.endpoint, Usuario);
 // }

 // // EXCLUIR
 // excluir(idUsuario: string) {
 //   return this.httpClient.delete(`${this.endpoint}/${idUsuario}`).pipe(first());
 // }
}
