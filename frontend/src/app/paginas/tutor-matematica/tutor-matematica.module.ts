import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorMatematicaPageRoutingModule } from './tutor-matematica-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { TutorMatematicaPage } from './tutor-matematica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorMatematicaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TutorMatematicaPage]
})
export class TutorMatematicaPageModule {}
