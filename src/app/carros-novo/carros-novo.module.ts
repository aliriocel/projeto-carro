import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosNovoPageRoutingModule } from './carros-novo-routing.module';

import { CarrosNovoPage } from './carros-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosNovoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarrosNovoPage]
})
export class CarrosNovoPageModule {}
