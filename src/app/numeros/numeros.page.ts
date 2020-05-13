import { Component, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements AfterViewInit {
  CUserName = '-----------';
  cUId;
  collection = 'usuarios';
  paises = [ {
    nombre: 'Mexico',
    imagen: '../../assets/Images/mexico.png',
    audio: '../../assets/Sounds/Mexico.m4a'

  },
  {
    nombre: 'Espania',
    imagen: '../../assets/Images/espania.png',
    audio: '../../assets/Sounds/Espania.m4a'

  },
  {
    nombre: 'Colombia',
    imagen: '../../assets/Images/colombia.png',
    audio: '../../assets/Sounds/Colombia.m4a'

  },
  {
    nombre: 'Brasil',
    imagen: '../../assets/Images/brasil.png',
    audio: '../../assets/Sounds/Brasil.m4a'

  }
];
  reproducitSonido(pais) {
    let sonido = new Audio();
    sonido.src = pais.audio;
    sonido.load();
    sonido.play();
  }

  constructor(private router: Router, private afAuth: AngularFireAuth, private firebaseService: AuthService) { }

  ngAfterViewInit() {
    this.cUId = localStorage.getItem('cUId');
    this.cUId = this.cUId.replace('"', '');
    this.cUId = this.cUId.replace('"', '');
    this.firebaseService.read_Onestudents(this.collection, this.cUId).subscribe((result) => {
      if (result.payload.get('nombre') !== undefined) {
        this.CUserName = result.payload.data()['nombre'];
      }

    });
  }
}
