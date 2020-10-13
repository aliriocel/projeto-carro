import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosUpdatePageRoutingModule } from './carros-update-routing.module';

import { CarrosUpdatePage } from './carros-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarrosUpdatePage]
})
export class CarrosUpdatePageModule {}
