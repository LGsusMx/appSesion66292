import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  constructor(private AfAuth: AngularFireAuth, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.AfAuth.authState.pipe(map(auth => {
        // Se valida si el usuario esta logeado o no, en caso de que si lo este, lo lleva al inicio
        if (isNullOrUndefined(auth)) {
            return true;
        } else {
          this.router.navigateByUrl('/frm-inicio');
        }

      }));
  }
}
