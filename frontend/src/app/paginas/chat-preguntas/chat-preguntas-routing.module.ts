import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPreguntasPage } from './chat-preguntas.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPreguntasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPreguntasPageRoutingModule {}
