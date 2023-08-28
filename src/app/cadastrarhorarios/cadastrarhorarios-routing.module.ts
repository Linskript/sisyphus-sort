import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarhorariosPage } from './cadastrarhorarios.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarhorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarhorariosPageRoutingModule {}
