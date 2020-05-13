import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {usuario} from '../shared/usuario.class';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-frm-registro',
  templateUrl: './frm-registro.page.html',
  styleUrls: ['./frm-registro.page.scss'],
})
export class FrmRegistroPage implements OnInit {

  user: usuario = new usuario();
  constructor(private authSvc: AuthService, private router: Router, private alertCont: AlertController) { }

  ngOnInit() {
  }
   async onRegistrar() {
    try {
      const user = await this.authSvc.onRegistrar(this.user);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user.user.email));
        localStorage.setItem('cUId', JSON.stringify(user.user.uid));
        const alert = await this.alertCont.create({
          header: 'Aviso',
          subHeader: 'Registro Exitoso',
          message: 'El usuario se registro correctamente.',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigateByUrl('/');
      }
     } catch (e) {
       //console.log('Error al dar de alta usuario', e);
     }
   }
}
