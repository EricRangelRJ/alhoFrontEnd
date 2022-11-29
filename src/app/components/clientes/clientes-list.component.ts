import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesComponent implements OnInit {

  
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
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
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


