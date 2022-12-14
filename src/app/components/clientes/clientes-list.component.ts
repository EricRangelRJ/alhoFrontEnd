import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClienteRequestDTO } from 'src/app/dto/cliente/clienteRequestDTO';
import { Cliente } from 'src/app/models/cliente';
import { ClienteListar } from 'src/app/models/cliente/cliente.entity';
import { AlertService } from 'src/app/services/alert.service';
import { ClienteService } from 'src/app/services/cliente.service';

import { ActionIcons, FuncionalidadeActionIcons } from '../util/action-icon/action-icons-const';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesComponent implements OnInit {

  idCliente: string = '';

  readonly colunas = ['idCliente', 'nome', 'cpf', 'dataNascimento', 'telefone1', 'telefone2', 'email', 'observacao', 'actions'];
  public actions = FuncionalidadeActionIcons;

  public dataSource = new MatTableDataSource<ClienteRequestDTO>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ELEMENT_DATA: Cliente[] = []

  displayedColumns: string[] = [

    'idCliente',
    'nome',
    'cpf',
    'dataNascimento',
    'telefone1',
    'telefone2',
    'email',
    'observacao',
    'actions'
  ]

  create: string;

  constructor(
    private service: ClienteService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<ClienteRequestDTO>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  consultar(id: number) {
    return console.log("entrou no consultar");
    //TODO aqui entra a navegação para a tela de consultar
  }

  delete(idCliente: string): void {
    console.log('deletado com sucesso!');
    this.service.delete(idCliente)
    .subscribe(
      () => { 
      },
      resp => {
        
        if (resp.status == 200) {
          this.alertService.success('Cliente deletado com sucesso');
          this.ngOnInit()
        }
        if (resp.status == 409) {
          this.alertService.info(resp.error.message, 'Importante:');
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


