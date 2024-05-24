import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InforobotPage } from './inforobot.page';

const routes: Routes = [
  {
    path: '',
    component: InforobotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InforobotPageRoutingModule {}
