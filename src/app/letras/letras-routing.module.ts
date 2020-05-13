import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetrasPage } from './letras.page';

const routes: Routes = [
  {
    path: '',
    component: LetrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetrasPageRoutingModule {}
