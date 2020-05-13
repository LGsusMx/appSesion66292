import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrmInicioPageRoutingModule } from './frm-inicio-routing.module';

import { FrmInicioPage } from './frm-inicio.page';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FrmInicioPage,
    children:[
        {path: 'letras',
        loadChildren: () => import('../letras/letras.module').then( m => m.LetrasPageModule)},
        { path: 'numeros',
        loadChildren: () => import('../numeros/numeros.module').then( m => m.NumerosPageModule)},
    ]
  },
  {
    path: '',
    redirectTo: '/letras',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrmInicioPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FrmInicioPage]
})
export class FrmInicioPageModule {}
