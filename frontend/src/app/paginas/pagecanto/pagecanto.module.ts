import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagecantoPageRoutingModule } from './pagecanto-routing.module';

import { PagecantoPage } from './pagecanto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagecantoPageRoutingModule
  ],
  declarations: [PagecantoPage]
})
export class PagecantoPageModule {}
