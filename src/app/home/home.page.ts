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
    const user = await this.authSvc.onIniciar(this.user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.user.email));
      localStorage.setItem('cUId', JSON.stringify(user.user.uid));
      this.router.navigateByUrl('frm-inicio');
    }
  }
}
