import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDessertsPageRoutingModule } from './modal-desserts-routing.module';

import { ModalDessertsPage } from './modal-desserts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDessertsPageRoutingModule
  ],
  declarations: [ModalDessertsPage]
})
export class ModalDessertsPageModule {}
