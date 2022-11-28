import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { Pedido } from '../../models/pedido';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PedidosListComponent implements OnInit {

  dataSource = new MatTableDataSource<Pedido>;
  columnsToDisplay = ['numeroPedido', 'dataPedido', 'cliente', 'total', 'situacao'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Pedido | null;

  listaPedidos: Pedido[] = [];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pedidoService: PedidosService,
    private snackBar: MatSnackBar,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

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

    this.pedidoService.buscarTodos().subscribe({

      next: pedidos => {

        // recebendo um lista de pedidos
        this.listaPedidos = pedidos;

        this.listaPedidos.forEach(function (pedido) {

          // recebendo um lista de ítens de cada pedido
          const itens = pedido.itens;

          // exibindo a lista
          console.log(itens);
        });

        this.dataSource = new MatTableDataSource<Pedido>(this.listaPedidos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: e => {
        console.log(e.error);
        const msg: string = "Erro obtendo pedidos.";
        this.snackBar.open(msg, "Erro", { duration: 5000 });
      }
    })

  }

  // FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
