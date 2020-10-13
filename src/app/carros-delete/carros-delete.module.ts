import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosDeletePageRoutingModule } from './carros-delete-routing.module';

import { CarrosDeletePage } from './carros-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosDeletePageRoutingModule
  ],
  declarations: [CarrosDeletePage]
})
export class CarrosDeletePageModule {}
