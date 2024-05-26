import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPreguntasPageRoutingModule } from './chat-preguntas-routing.module';

import { ChatPreguntasPage } from './chat-preguntas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPreguntasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ChatPreguntasPage]
})
export class ChatPreguntasPageModule {}
