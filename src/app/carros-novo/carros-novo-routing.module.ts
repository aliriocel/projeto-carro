import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosNovoPage } from './carros-novo.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosNovoPageRoutingModule {}
