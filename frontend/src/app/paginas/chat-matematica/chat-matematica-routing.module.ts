import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMatematicaPage } from './chat-matematica.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMatematicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMatematicaPageRoutingModule {}
