import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {usuario} from '../shared/usuario.class';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Textowo = 'inicio';
  isSaucex = true;
  user: usuario = new usuario();
  constructor(private authSvc: AuthService, private router: Router) {}

  async onIniciar(){
    const respuesta = await this.authSvc.onIniciar(this.user);
    if (respuesta) {
      //localStorage.setItem('user', JSON.stringify(respuesta.user.email));
      //localStorage.setItem('cUId', JSON.stringify(respuesta.user.uid));
      this.router.navigateByUrl('covid-general');
    }
  }
}
