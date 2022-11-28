import { Fornecedor } from './../../models/fornecedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { FornecedoresService } from '../../services/fornecedores.service';

@Component({
  selector: 'app-fornecedores-list',
  templateUrl: './fornecedores-list.component.html',
  styleUrls: ['./fornecedores-list.component.scss']
})
export class FornecedoresListComponent implements OnInit{

  dataSource = new MatTableDataSource<Fornecedor>;
  displayedColumns: string[] = ['idFornecedor', 'nome', 'cnpj', 'telefone'];
  fornecedores: Fornecedor[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private fornecedorService: FornecedoresService,
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
    this.fornecedorService.buscarTodos()
      .subscribe({
        next: fornecedores => {
          this.fornecedores = fornecedores;
          this.dataSource = new MatTableDataSource<Fornecedor>(this.fornecedores);
          this.dataSource.paginator = this.paginator;
        },
        error: e => {
          console.log(e.error);
          const msg: string = "Erro obtendo fornecedores.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      })
  }

}
