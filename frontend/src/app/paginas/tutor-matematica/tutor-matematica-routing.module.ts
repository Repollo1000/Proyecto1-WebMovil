import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorMatematicaPage } from './tutor-matematica.page';

const routes: Routes = [
  {
    path: '',
    component: TutorMatematicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorMatematicaPageRoutingModule {}
