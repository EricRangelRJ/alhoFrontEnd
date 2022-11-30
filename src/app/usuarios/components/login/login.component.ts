import { Auth } from 'src/app/usuarios/models/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  auth: Auth;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;

    this.authService.autenticar(login).subscribe({
      next: auth => {
        //recebendo os dados do usuário autenticado
        this.auth = auth;

        //gravando os dados do usuario em uma localStorage..
        localStorage.setItem("AUTH", JSON.stringify(this.auth));

        //navegando para rota vazia, que redicionará para Home
        return this.router.navigate(['']);
      },
        error: (e) => {

          let msg: string = "Tente novamente em instantes.";
          if (e['status'] == 400) {
            msg = "Email ou senha inválido(s)."
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }

    })

  }
}
