import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LetrasPageRoutingModule } from './letras-routing.module';

import { LetrasPage } from './letras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LetrasPageRoutingModule
  ],
  declarations: [LetrasPage]
})
export class LetrasPageModule {}
