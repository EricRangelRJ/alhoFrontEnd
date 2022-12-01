import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteListar } from 'src/app/models/cliente/cliente.entity';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesComponent implements OnInit {

  readonly colunas = ['idCliente','nome','cpf','dataNascimento','telefone1','telefone2','email','observacoes'];

  public dataSource = new MatTableDataSource<ClienteListar>();

  @ViewChild (MatPaginator, { static : true}) paginator: MatPaginator;

  
  ELEMENT_DATA: Cliente [] = []

  displayedColumns: string[] = [
    
    'idCliente',
    'nome',
    'cpf',
    'dataNascimento',
    'telefone1',
    'telefone2',
    'email',
    'observacao',
    'acoes'
  ]

create: string;
  
  constructor(
    private service: ClienteService
  ) { }
  
  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe( resposta =>  {
       this.ELEMENT_DATA = resposta
       this.dataSource = new MatTableDataSource<Cliente>(resposta);
       this.dataSource.paginator = this.paginator;
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


