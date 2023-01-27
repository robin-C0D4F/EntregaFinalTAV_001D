import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCoffeePageRoutingModule } from './detalle-coffee-routing.module';

import { DetalleCoffeePage } from './detalle-coffee.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCoffeePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleCoffeePage]
})
export class DetalleCoffeePageModule {}
