import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosDetalhePage } from './carros-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosDetalhePageRoutingModule {}
