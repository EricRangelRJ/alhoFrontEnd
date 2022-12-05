import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteListar } from 'src/app/models/cliente/cliente.entity';
import { ActionIcons, FuncionalidadeActionIcons } from '../util/action-icon/action-icons-const';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesComponent implements OnInit {

  readonly colunas = ['idCliente','nome','cpf','dataNascimento','telefone1','telefone2','email','observacoes','actions'];
  public actions = FuncionalidadeActionIcons;

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

  findAll(){
    this.service.findAll().subscribe( resposta =>  {
       this.ELEMENT_DATA = resposta
       this.dataSource = new MatTableDataSource<Cliente>(resposta);
       this.dataSource.paginator = this.paginator;
    })
  }

  consultar(id: number) {
    return console.log("entrou no consultar");
    //TODO aqui entra a navegação para a tela de consultar
  }

  delete(idCliente : string): void{
    console.log(idCliente);
    this.service.delete(idCliente).subscribe(() => {
      this.alertService.success('Cliente excluído com sucesso!');
      this.router.navigate(['clientes']);
    },
    deuZebra => {
      console.log(idCliente);
      this.alertService.error(deuZebra.message);
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


