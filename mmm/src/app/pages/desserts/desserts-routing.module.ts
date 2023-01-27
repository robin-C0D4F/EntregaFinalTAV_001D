import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DessertsPage } from './desserts.page';

const routes: Routes = [
  {
    path: '',
    component: DessertsPage
  },
  {
    path: 'modal-desserts',
    loadChildren: () => import('./modal-desserts/modal-desserts.module').then( m => m.ModalDessertsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertsPageRoutingModule {}
