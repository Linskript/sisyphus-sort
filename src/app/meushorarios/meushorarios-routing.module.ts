import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeushorariosPage } from './meushorarios.page';

const routes: Routes = [
  {
    path: '',
    component: MeushorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeushorariosPageRoutingModule {}
