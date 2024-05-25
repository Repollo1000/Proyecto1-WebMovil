import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesorDeportivoPage } from './asesor-deportivo.page';

const routes: Routes = [
  {
    path: '',
    component: AsesorDeportivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesorDeportivoPageRoutingModule {}
