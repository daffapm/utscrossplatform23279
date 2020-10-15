import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahPageRoutingModule } from './ubah-routing.module';

import { UbahPage } from './ubah.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UbahPageRoutingModule
  ],
  declarations: [UbahPage]
})
export class UbahPageModule {}
