import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciais } from 'src/app/models/credenciais';
import { AlertService } from 'src/app/services/alert.service';

//import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Armazena os dados do formulário
  creds : Credenciais = {
    email: '',
    senha: ''
  }

  //Validando os dados de input no formulário
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    //Inicializando via construtor o componente que dispara mensagens na tela de login
    private alertService: AlertService,
    //private loginService: LoginService,
   // private service: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {

   }

  public logar(): void {
    //Mensagem que aparece na tela de login
    this.router.navigate(['home'])
    this.alertService.error("Login e/ou senha inválidos","Erro no Login!");


       //  this.service.authenticate(this.creds).subscribe(resposta => {
  //    this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
  //    this.router.navigate([''])
   // }, () => {

 //   })
  }

 //Método que aplica a validação dos campos do fomrulário
  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}
