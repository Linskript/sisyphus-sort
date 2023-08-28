import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarhorariosPage } from './editarhorarios.page';

const routes: Routes = [
  {
    path: '',
    component: EditarhorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarhorariosPageRoutingModule {}
