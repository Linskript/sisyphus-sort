import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirhorariosPage } from './excluirhorarios.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirhorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirhorariosPageRoutingModule {}
