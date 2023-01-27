import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffeePageRoutingModule } from './coffee-routing.module';

import { CoffeePage } from './coffee.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffeePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CoffeePage]
})
export class CoffeePageModule {}
