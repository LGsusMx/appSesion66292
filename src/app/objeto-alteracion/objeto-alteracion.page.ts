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
  constructor(private actRoute: ActivatedRoute, private dbFire: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.CUObject = this.actRoute.snapshot.paramMap.get('id');
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
    let urlimagen;
    let subirIm = this.dbFire.uploadIMtToStorage(path, this.SelectedImage, this.nombre);
    subirIm.then(res => {
      res.ref.getDownloadURL().then(url => {
        urlimagen=url;
      });
    });
    let subirAu = this.dbFire.uploadAUtToStorage(path, this.SelectedSound, this.nombre);
    subirAu.then(res => {
      res.ref.getDownloadURL().then(url => {
        this.dbFire.storeMetaInfoIm(res.metadata,urlimagen,url, path).then(() => {

     });
     });
    });
    this.router.navigateByUrl('frm-inicio');
    console.log('SI SE SUBIO TODO ALV');
  }
}
