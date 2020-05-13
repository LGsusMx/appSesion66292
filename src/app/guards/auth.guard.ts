import { Injectable, RootRenderer } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AfAuth: AngularFireAuth, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AfAuth.authState.pipe(map(auth => {
        // Se valida si existe el usuario se encuentra autenticado, en caso de que sea nulo este valor, lo lleva al login
        if (isNullOrUndefined(auth)) {
            this.router.navigateByUrl('/home');
        } else {
          return true;
        }

      }));

  }
}
