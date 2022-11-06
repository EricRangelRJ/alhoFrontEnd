import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  //Validando se o usuário está autenticado e navega de acordo com a resposta
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let authenticate = this.authService.isAuthenticated();

    if (authenticate) {
      return true;
    } else {

      this.router.navigate(['login']);
      return false;

    }
  }

}
