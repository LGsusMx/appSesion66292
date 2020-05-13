import { Component, OnInit } from '@angular/core';
import { usuario } from '../shared/usuario.class';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  collection = 'usuarios';
  CUserName = '-----------';
  cUId;
  user: usuario = new usuario();
  constructor(private router: Router, private afAuth: AngularFireAuth, private firebaseService: AuthService) { }

  ngOnInit() {
    this.cUId = localStorage.getItem('cUId');
    this.cUId = this.cUId.replace('"', '');
    this.cUId = this.cUId.replace('"', '');
    let correo = localStorage.getItem('user');
    correo = correo.replace('"', '');
    correo = correo.replace('"', '');
    this.firebaseService.read_Onestudents(this.collection, this.cUId).subscribe((data) => {
      if (data.payload.get('nombre') !== undefined) {
        this.user.nombre = data.payload.data()['nombre'];
        this.user.apellido = data.payload.data()['apellido'];
        this.user.sexo = data.payload.data()['sexo'];

        this.CUserName = data.payload.data()['nombre'];
      }
      this.user.correo = localStorage.getItem('user');
    });

  }
  onSalir() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
  }
  onGuardar() {
    let record = {};
    record['nombre'] = this.user.nombre;
    record['apellido'] = this.user.apellido;
    record['sexo'] = this.user.sexo;

    try {
      this.firebaseService.update_student(this.cUId, record, this.collection);
      this.router.navigateByUrl('frm-inicio/letras');
    } catch (e) {
      console.log(e);
    }
  }

}
