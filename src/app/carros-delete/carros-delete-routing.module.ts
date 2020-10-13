import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosDeletePage } from './carros-delete.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosDeletePageRoutingModule {}
