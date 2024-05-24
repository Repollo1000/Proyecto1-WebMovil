import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InforobotPageRoutingModule } from './inforobot-routing.module';

import { InforobotPage } from './inforobot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InforobotPageRoutingModule
  ],
  declarations: [InforobotPage]
})
export class InforobotPageModule {}
