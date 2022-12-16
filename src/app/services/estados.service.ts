import { Estados } from '../models/estados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }

  buscarEstados(){
    return this.http.get<Estados[]>('assets/dados/estados.json');
  }
}
