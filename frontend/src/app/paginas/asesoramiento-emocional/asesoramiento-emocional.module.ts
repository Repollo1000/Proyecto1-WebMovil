import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesoramientoEmocionalPageRoutingModule } from './asesoramiento-emocional-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AsesoramientoEmocionalPage } from './asesoramiento-emocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsesoramientoEmocionalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsesoramientoEmocionalPage]
})
export class AsesoramientoEmocionalPageModule {}
