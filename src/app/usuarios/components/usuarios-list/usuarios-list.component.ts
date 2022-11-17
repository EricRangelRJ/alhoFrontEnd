import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Usuario } from 'src/app/usuarios/models/usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  displayedColumns: string[] = ['cod', 'login', 'email'];
  dataSource = new MatTableDataSource<Usuario>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: Usuario[] = [
  {id: 1, nome: 'Eric Rangel', email: 'ericlsrangel@gmail.com',senha: ""} ,
  {id: 2, nome: 'Bruna Rangel', email: 'brunarangel@gmail.com', senha:""},
  {id: 3, nome: 'Eloa Rangel', email: 'brunarangel@gmail.com', senha:""},
  {id: 4, nome: 'Enzo Rangel', email: 'enzorangel@gmail.com', senha:""},
  {id: 5, nome: 'Augusto Rangel', email: 'augustorangel@gmail.com', senha:""},
  {id: 6, nome: 'Eliane Rangel', email: 'elianerangel@gmail.com', senha:""},
  {id: 7, nome: 'Leandro Rangel', email: 'leandrorangel@gmail.com', senha:""},
  {id: 7, nome: 'Leandro Rangel', email: 'leandrorangel@gmail.com', senha:""},
  {id: 7, nome: 'Leandro Rangel', email: 'leandrorangel@gmail.com', senha:""},
  {id: 7, nome: 'Leandro Rangel', email: 'leandrorangel@gmail.com', senha:""},
  {id: 7, nome: 'Leandro Rangel', email: 'leandrorangel@gmail.com', senha:""},
];
