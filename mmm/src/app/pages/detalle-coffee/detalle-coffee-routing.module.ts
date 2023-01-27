import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCoffeePage } from './detalle-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCoffeePageRoutingModule {}
