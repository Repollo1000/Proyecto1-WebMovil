import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesorDeportivoPageRoutingModule } from './asesor-deportivo-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { AsesorDeportivoPage } from './asesor-deportivo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsesorDeportivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsesorDeportivoPage]
})
export class AsesorDeportivoPageModule {}
