import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivarRobotPageRoutingModule } from './activar-robot-routing.module';

import { ActivarRobotPage } from './activar-robot.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivarRobotPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActivarRobotPage]
})
export class ActivarRobotPageModule {}
