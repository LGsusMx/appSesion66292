import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidGeneralPageRoutingModule } from './covid-general-routing.module';

import { CovidGeneralPage } from './covid-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidGeneralPageRoutingModule
  ],
  declarations: [CovidGeneralPage]
})
export class CovidGeneralPageModule {}
