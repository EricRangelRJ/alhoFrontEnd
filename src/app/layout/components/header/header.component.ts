import { Auth } from 'src/app/usuarios/models/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/usuarios/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth: Auth;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

   //capturando os dados do usuário autenticado para exibir no componente
   this.auth = this.authService.usuarioAutenticado();
  }



}
