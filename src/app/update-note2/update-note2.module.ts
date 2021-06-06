import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateNote2PageRoutingModule } from './update-note2-routing.module';

import { UpdateNote2Page } from './update-note2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateNote2PageRoutingModule
  ],
  declarations: [UpdateNote2Page]
})
export class UpdateNote2PageModule {}
