import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagecantoPage } from './pagecanto.page';

const routes: Routes = [
  {
    path: '',
    component: PagecantoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagecantoPageRoutingModule {}
