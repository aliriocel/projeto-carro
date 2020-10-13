import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosFotoPageRoutingModule } from './carros-foto-routing.module';

import { CarrosFotoPage } from './carros-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosFotoPageRoutingModule
  ],
  declarations: [CarrosFotoPage]
})
export class CarrosFotoPageModule {}
