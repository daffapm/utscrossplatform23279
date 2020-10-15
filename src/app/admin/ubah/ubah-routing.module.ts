import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbahPage } from './ubah.page';

const routes: Routes = [
  {
    path: '',
    component: UbahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbahPageRoutingModule {}
