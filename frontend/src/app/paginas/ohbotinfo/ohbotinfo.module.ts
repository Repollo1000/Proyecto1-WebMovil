import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhbotinfoPageRoutingModule } from './ohbotinfo-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { OhbotinfoPage } from './ohbotinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhbotinfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OhbotinfoPage]
})
export class OhbotinfoPageModule {}