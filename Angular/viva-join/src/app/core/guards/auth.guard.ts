import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

// Guarda para verificar que si no hay token, no hay acceso a la página inicial
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = Cookies.get('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  }

}