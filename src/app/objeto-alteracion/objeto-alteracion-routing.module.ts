import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetoAlteracionPage } from './objeto-alteracion.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetoAlteracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetoAlteracionPageRoutingModule {}
