import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidGeneralPage } from './covid-general.page';

const routes: Routes = [
  {
    path: '',
    component: CovidGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidGeneralPageRoutingModule {}
