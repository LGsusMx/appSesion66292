import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-objeto-alteracion',
  templateUrl: './objeto-alteracion.page.html',
  styleUrls: ['./objeto-alteracion.page.scss'],
})
export class ObjetoAlteracionPage implements OnInit {
  CUObject = 'test';
  SelectedSound;
  SelectedImage;
  nombre;
  seleccionado = '';
  Accion = 'Agregar';
  constructor(private actRoute: ActivatedRoute, private dbFire: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.CUObject = this.actRoute.snapshot.paramMap.get('id');
    let editor = this.actRoute.snapshot.paramMap.get('modificacion');
    if (editor == 0 as unknown) {
      
    }else{
      this.Accion= 'Editar';
      this.seleccionado = editor;
      this.cargarInfoEdit();
    }
  }
  onImageSelected(event) {
    if (event.target.files.length > 0) {
      this.SelectedImage = event.target.files[0];
    }
  }

  onSoundSelected(event) {
    if (event.target.files.length > 0) {
      this.SelectedSound = event.target.files[0];
    }
  }
 async onGuardar() {
    let path;
    if (this.CUObject === 'animal') {
      path = 'filesAn';
    } else {
      path = 'filesPa';
    }
    if (this.seleccionado !== '') {
      await this.dbFire.delete_student(this.seleccionado,path);
    }
    
    let urlimagen;
    let subirIm = this.dbFire.uploadIMtToStorage(path, this.SelectedImage, this.nombre);
    await subirIm.then(res => {
      res.ref.getDownloadURL().then(url => {
        urlimagen=url;
      });
    });
    let subirAu = this.dbFire.uploadAUtToStorage(path, this.SelectedSound, this.nombre);
    await subirAu.then(res => {
      res.ref.getDownloadURL().then(url => {
        this.dbFire.storeMetaInfoIm(res.metadata,urlimagen,url, path).then(() => {

     });
     });
    });
    this.router.navigateByUrl('frm-inicio');
    console.log('SI SE SUBIO TODO ALV');
  }
  cargarInfoEdit(){
    let path;
    if (this.CUObject === 'animal') {
      path = 'filesAn';
    } else {
      path = 'filesPa';
    }
    this.dbFire.read_Onestudents(path, this.seleccionado).subscribe((data) => {
      this.nombre =  data.payload.data()['name'];
    });
  }
}
