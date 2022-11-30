import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  // um guarda que decide se uma rota pode ser ativada
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // verificando se existe um usuário autenticado
    if (this.authService.usuarioAutenticado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
