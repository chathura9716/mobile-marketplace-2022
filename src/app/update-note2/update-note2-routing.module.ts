import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateNote2Page } from './update-note2.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateNote2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateNote2PageRoutingModule {}
