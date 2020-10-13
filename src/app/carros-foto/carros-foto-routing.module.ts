import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosFotoPage } from './carros-foto.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosFotoPageRoutingModule {}
