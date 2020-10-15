import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'tambah',
    loadChildren: () => import('./tambah/tambah.module').then( m => m.TambahPageModule)
  },
  {
    path: 'ubah/:barangId',
    loadChildren: () => import('./ubah/ubah.module').then( m => m.UbahPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
