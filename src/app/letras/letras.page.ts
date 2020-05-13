import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-letras',
  templateUrl: './letras.page.html',
  styleUrls: ['./letras.page.scss'],
})
export class LetrasPage implements AfterViewInit {
  collection = 'usuarios';
  CUserName = '-----------';
  cUId;
  animales = [{
    nombre: 'Aguila',
    imagen: '../../assets/Images/aguila.jpg',
    audio: '../../assets/Sounds/Aguila.m4a'

  },
  {
    nombre: 'Lobo',
    imagen: '../../assets/Images/lobo.jpg',
    audio: '../../assets/Sounds/Lobo.m4a'

  },
  {
    nombre: 'Gallina',
    imagen: '../../assets/Images/gallina.jpg',
    audio: '../../assets/Sounds/Gallo.m4a'

  },
  {
    nombre: 'Gato',
    imagen: '../../assets/Images/gato.jpg',
    audio: '../../assets/Sounds/Gato.m4a'

  }
  ];
  reproducitSonido(animal) {
    let sonido = new Audio();
    sonido.src = animal.audio;
    sonido.load();
    sonido.play();
  }
  constructor(private router: Router, private afAuth: AngularFireAuth, private firebaseService: AuthService) { }
  ngAfterViewInit(): void {
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
