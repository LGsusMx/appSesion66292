import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { usuario } from '../shared/usuario.class';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireUploadTask, AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth, private alertCont: AlertController,
              private firestore: AngularFirestore, private afStorage: AngularFireStorage, private db: AngularFireDatabase) {
    afAuth.authState.subscribe(usuario => (this.isLogged = usuario));
  }

  async onRegistrar(usuario: usuario) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(usuario.correo, usuario.password);
    } catch (e) {
      let alert;
      switch (e.code) {
        case 'auth/argument-error':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de campos',
            message: 'Por favor, llena ambos campos.',
            buttons: ['OK']
          });
          break;
        case 'auth/invalid-email':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de correo',
            message: 'Por favor, proporciona un correo valido.',
            buttons: ['OK']
          });
          break;
        case 'auth/weak-password':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de contraseña',
            message: 'Por favor, introduce una contraseña fuerte.',
            buttons: ['OK']
          });
          break;
        case 'auth/email-already-in-use':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de registro',
            message: 'Usted ya esta registrado, inicie sesion.',
            buttons: ['OK']
          });
          break;
        default:
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error en el registro',
            message: 'Revisa tu informacion e intenta de nuevo.',
            buttons: ['OK']
          });
          break;
      }
      await alert.present();
    }

  }

  async onIniciar(usuario: usuario) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(usuario.correo, usuario.password);
    } catch (e) {
      let alert;
      // console.log(e.code);
      switch (e.code) {
        case 'auth/argument-error':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de campos',
            message: 'Por favor, llena ambos campos.',
            buttons: ['OK']
          });
          break;
        case 'auth/invalid-email':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de correo',
            message: 'Por favor, proporciona un correo valido.',
            buttons: ['OK']
          });
          break;
        case 'auth/weak-password':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de contraseña',
            message: 'Por favor, introduce una contraseña fuerte.',
            buttons: ['OK']
          });
          break;
          case 'auth/wrong-password':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de contraseña',
            message: 'La contraseña introducida es incorrecta',
            buttons: ['OK']
          });
          break;
        case 'auth/user-not-found':
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error de logeo',
            message: 'Este usuario no esta registrado',
            buttons: ['OK']
          });
          break;
        default:
          alert = await this.alertCont.create({
            header: 'Error',
            subHeader: 'Error en el logeo',
            message: 'Revisa tu informacion e intenta de nuevo.',
            buttons: ['OK']
          });
          break;
      }
      await alert.present();
    }
    }
    create_student(record, collection) {
      return this.firestore.collection(collection).add(record);
    }
  
    read_students(collection) {
      return this.firestore.collection(collection).snapshotChanges();
    }
    read_Onestudents(collection, id) {
      return this.firestore.collection(collection).doc(id).snapshotChanges();
    }
  
    update_student(recordID, record, collection) {
      return this.firestore.collection(collection).doc(recordID).set(record);
    }
  
    delete_student(record_id, collection) {
      this.firestore.collection(collection).doc(record_id).delete();
    }

    uploadIMtToStorage(path, information, name): AngularFireUploadTask{
      return this.afStorage.ref(`/${path}/img/${name}`).put(information);
    }

    uploadAUtToStorage(path, information, name): AngularFireUploadTask{
      return this.afStorage.ref(`/${path}/sound/${name}`).put(information);
    }
    storeMetaInfoIm(metainfo,urlim,urlsound, tipo){
      let toSave= {
        urlIm: urlim,
        urlSound: urlsound,
        fullPath: metainfo.fullPath,
        name: metainfo.name
      }
      return this.firestore.collection(tipo).add(toSave);
    }
    deleteStore(file,tipo){
      this.firestore.collection(tipo).doc(file.id).delete();
      this.afStorage.ref(tipo + '/img/' + file.nombre).delete();
      return this.afStorage.ref(tipo + '/sound/' + file.nombre).delete();
    }
  }
