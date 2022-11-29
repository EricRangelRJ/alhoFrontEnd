import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vendedor } from '../../models/vendedor';
import { VendedoresService } from '../../services/vendedores.service';

@Component({
  selector: 'app-vendedores-list',
  templateUrl: './vendedores-list.component.html',
  styleUrls: ['./vendedores-list.component.scss']
})
export class VendedoresListComponent implements OnInit {

  dataSource = new MatTableDataSource<Vendedor>;
  displayedColumns: string[] = ['idVendedor', 'nome', 'apelido'];
  vendedores: Vendedor[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private vendedorService: VendedoresService,
    private snackBar: MatSnackBar)
  { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.buscarTodos();
  }

  // BUSCAR TODOS
  buscarTodos(): void {
    this.vendedorService.buscarTodos()
      .subscribe({
        next: vendedores => {
          this.vendedores = vendedores;
          this.dataSource = new MatTableDataSource<Vendedor>(this.vendedores);
          this.dataSource.paginator = this.paginator;
        },
        error: e => {
          console.log(e.error);
          const msg: string = "Erro obtendo vendedores.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      })
  }

}
