import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../app/guards/auth.guard';
import {Auth2Guard} from '../app/guards/auth2.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Redireccion al segundo Guard viene siendo Auth2Guard, este lo llevara al inicio si esta autenticado
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [Auth2Guard]},
  {
    path: 'frm-registro',
    loadChildren: () => import('./frm-registro/frm-registro.module').then( m => m.FrmRegistroPageModule)
  },
  {
    path: 'frm-inicio',
    // Redireccion al primer guard es Auth Guard, este lo llevara al login si no esta autenticado
    loadChildren: () => import('./frm-inicio/frm-inicio.module').then( m => m.FrmInicioPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'letras',
    loadChildren: () => import('./letras/letras.module').then( m => m.LetrasPageModule)
  },
  {
    path: 'numeros',
    loadChildren: () => import('./numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'objeto-alteracion/:id/:modificacion',
    loadChildren: () => import('./objeto-alteracion/objeto-alteracion.module').then( m => m.ObjetoAlteracionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
