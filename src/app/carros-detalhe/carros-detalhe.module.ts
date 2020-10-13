import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosDetalhePageRoutingModule } from './carros-detalhe-routing.module';

import { CarrosDetalhePage } from './carros-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosDetalhePageRoutingModule
  ],
  declarations: [CarrosDetalhePage]
})
export class CarrosDetalhePageModule {}
