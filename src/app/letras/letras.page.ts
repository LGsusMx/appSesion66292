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
  animales = [
  ];
  reproducitSonido(animal) {
    let sonido = new Audio();
    sonido.src = animal;
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
      this.loadSometing();
    });
  }
  loadSometing(){
    this.firebaseService.read_students('filesAn').subscribe((data)=>{
      this.animales = data.map(e => {
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
    this.animales.map(function(dato){
      if(dato === element){
        dato.oculto = true;
      }
      

    });
  }
  onSalioMouse(element){
    this.animales.map(function(dato){
      if(dato === element){
        dato.oculto = false;
      }
      

    });
  }
  OnEliminar(objeto){
    this.firebaseService.deleteStore(objeto,'filesAn');
  }

}
