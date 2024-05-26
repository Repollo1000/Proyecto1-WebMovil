import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatDeportivoPageRoutingModule } from './chat-deportivo-routing.module';

import { ChatDeportivoPage } from './chat-deportivo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatDeportivoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ChatDeportivoPage]
})
export class ChatDeportivoPageModule {}