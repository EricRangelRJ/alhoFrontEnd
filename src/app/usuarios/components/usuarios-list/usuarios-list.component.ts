import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/usuarios/models/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  dataSource = new MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['idUsuario', 'nome', 'email'];
  usuarios: Usuario[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private usuarioService: UsuariosService,
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
    this.usuarioService.buscarTodos()
      .subscribe({
        next: usuarios => {
          this.usuarios = usuarios;
          this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
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
