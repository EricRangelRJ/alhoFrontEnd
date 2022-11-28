import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../models/produto';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {

  dataSource = new MatTableDataSource<Produto>;
  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'peso'];
  produtos: Produto[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private produtoService: ProdutosService,
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
    this.produtoService.buscarTodos()
      .subscribe({
        next: produtos => {
          this.produtos = produtos;
          this.dataSource = new MatTableDataSource<Produto>(this.produtos);
          this.dataSource.paginator = this.paginator;
        },
        error: e => {
          console.log(e.error);
          const msg: string = "Erro obtendo usuários.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      })
  }


}
