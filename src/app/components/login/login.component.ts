import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGet } from 'src/app/models/authGet';
import { Credenciais } from 'src/app/models/credenciais';
import { Login } from 'src/app/models/login.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Armazena os dados do formulário
  creds: Credenciais = {
    email: '',
    senha: ''
  }

   //objeto para armazenar os dados do usuario autenticado.. 
   authGet = new AuthGet;

    //objeto para armazenar os dados inseridos formulário
  login = new Login;

  //Validando os dados de input no formulário
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

   //mensagens
   mensagemErro = '';
   mensagemSucesso= '';
   msg = '';

  constructor(
    //Inicializando via construtor o componente que dispara mensagens na tela de login
    private alertService: AlertService,
    // private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  logar2() {
    this.authService.autenticar(this.creds).subscribe(resposta => {
      //Mensagem que aparece na tela de login 
      //this.alertService.success(resposta.headers.get('Authorization'));
      console.log(this.authGet);
      //this.authService.successfulLogin(JSON.stringify(this.authGet));
      //Navegando para a rota após o login
      this.alertService.success('Logou!');
      this.router.navigate(['home'])
    }, () => {

      this.alertService.error('Usuário ou Senha Inválidos!');
      this.alertService.error('Erro no Login!');

    })
  }

  

  //método para logar
  logar(): void {

    this.login = this.creds;

    //função recebe um objeto (usuário autenticado)
    this.authService.autenticar(this.login)
      .subscribe({
        next: (data) => {
          //recebendo os dados do usuário autenticado
          this.authGet = (data as any);
          //gravando os dados do usuario em uma localStorage..
          localStorage.setItem("AUTH", JSON.stringify(this.authGet));
          //navegando para rota vazia
          this.alertService.success(this.authGet.nome + ', bem vindo ao Sistema!');
          return this.router.navigate(['']);
        },
        error: (e) => {
          this.mensagemErro = e.error.message;
          this.alertService.error(this.mensagemErro);
          console.log('Erro');
        }, 
        complete: () => console.log('Usuário logado')
      })
  }
  

  //Método que aplica a validação dos campos do fomrulário
  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

}
