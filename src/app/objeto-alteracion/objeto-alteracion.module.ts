import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetoAlteracionPageRoutingModule } from './objeto-alteracion-routing.module';

import { ObjetoAlteracionPage } from './objeto-alteracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetoAlteracionPageRoutingModule
  ],
  declarations: [ObjetoAlteracionPage]
})
export class ObjetoAlteracionPageModule {}
