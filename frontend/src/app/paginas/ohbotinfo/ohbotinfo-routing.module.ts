import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OhbotinfoPage } from './ohbotinfo.page';

const routes: Routes = [
  {
    path: '',
    component: OhbotinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OhbotinfoPageRoutingModule {}