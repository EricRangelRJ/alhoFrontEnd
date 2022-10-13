import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'name', 'endereco', 'bairro','telefone' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  codigo: number;
  endereco: string;
  bairro: string;
  telefone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, name: 'Jose Carlos', endereco: 'Rua Carvalhaes, 102', bairro: 'Centro',telefone:'96589-0941'},
  {codigo: 2, name: 'Henrique da Silva', endereco: 'Rua Murilo dos Santos', bairro: 'BNH',telefone:'96589-0941'},
  {codigo: 3, name: 'Antônio Santos Costa', endereco: 'Rua Marilia', bairro: 'Nova Iguaçu',telefone:'96589-0941'},
  {codigo: 4, name: 'Carlos Barreto', endereco: 'Rua Ester', bairro: 'Mesquita',telefone:'96589-0941'},
  {codigo: 5, name: 'Eric Leonardo Santos Rangel', endereco: 'Rua Jupter', bairro: 'Mesquita',telefone:'96589-0941'},
  {codigo: 6, name: 'Eloá da Silva', endereco: 'Rua das Rosas', bairro: 'Califórnia',telefone:'96589-0941'},
  {codigo: 7, name: 'Bianca Almeida', endereco: 'Rua Netuno', bairro: 'N',telefone:'96589-0941'},
  {codigo: 8, name: 'Rafael Salgado', endereco: 'Rua Marte', bairro: 'O',telefone:'96589-0941'},
  {codigo: 9, name: 'Márcio das Couves', endereco: 'Rua Jeovana', bairro: 'F',telefone:'96589-0941'},
  {codigo: 10, name: 'André Costa', endereco: 'Rua Pantanal', bairro: 'Ne',telefone:'96589-0941'},
];
