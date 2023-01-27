import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DessertsPageRoutingModule } from './desserts-routing.module';

import { DessertsPage } from './desserts.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DessertsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DessertsPage]
})
export class DessertsPageModule {}
