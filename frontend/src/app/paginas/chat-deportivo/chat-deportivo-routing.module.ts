import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDeportivoPage } from './chat-deportivo.page';

const routes: Routes = [
  {
    path: '',
    component: ChatDeportivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDeportivoPageRoutingModule {}