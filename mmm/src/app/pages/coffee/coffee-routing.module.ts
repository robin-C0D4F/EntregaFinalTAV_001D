import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeePage } from './coffee.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeePageRoutingModule {}
