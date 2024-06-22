import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatMatematicaPageRoutingModule } from './chat-matematica-routing.module';

import { ChatMatematicaPage } from './chat-matematica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatMatematicaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ChatMatematicaPage]
})
export class ChatMatematicaPageModule {}
