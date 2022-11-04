import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Cliente>;
  displayedColumns: string[] = ['idCliente', 'nome', 'dataNascimento', 'cpf', 'endereco', 'telefone1'];
  clientes: Cliente[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private clienteService: ClienteService, 
    private snackBar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer) 
  { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.buscarTodos();

  }

  // BUSCAR TODOS
  buscarTodos(): void {
    this.clienteService.buscarTodos()
      .subscribe({
        next: clientes => {
          this.clientes = clientes;
          this.dataSource = new MatTableDataSource<Cliente>(this.clientes);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: e => {
          console.log(e.error);
          const msg: string = "Erro obtendo clientes.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
