import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesoramientoEmocionalPage } from './asesoramiento-emocional.page';

const routes: Routes = [
  {
    path: '',
    component: AsesoramientoEmocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesoramientoEmocionalPageRoutingModule {}
