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
  paises = [ 
];
  reproducitSonido(pais) {
    let sonido = new Audio();
    sonido.src = pais;
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
    this.loadSometing();
  }
  loadSometing(){
    this.firebaseService.read_students('filesPa').subscribe((data)=>{
      this.paises = data.map(e => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()['name'],
          imagen: e.payload.doc.data()['urlIm'],
          sonido: e.payload.doc.data()['urlSound'],
        };
      })
    });
    
  }
  onEntroMouse(element){
    this.paises.map(function(dato){
      if(dato === element){
        dato.oculto = true;
      }
      

    });
  }
  onSalioMouse(element){
    this.paises.map(function(dato){
      if(dato === element){
        dato.oculto = false;
      }
      

    });
  }
  OnEliminar(objeto){
    this.firebaseService.deleteStore(objeto,'filesPa');
  }
}
