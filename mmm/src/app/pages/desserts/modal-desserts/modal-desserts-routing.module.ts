import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDessertsPage } from './modal-desserts.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDessertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDessertsPageRoutingModule {}
