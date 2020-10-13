import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosUpdatePage } from './carros-update.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosUpdatePageRoutingModule {}
