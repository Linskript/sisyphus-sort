import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarhorariosPageRoutingModule } from './cadastrarhorarios-routing.module';

import { CadastrarhorariosPage } from './cadastrarhorarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarhorariosPageRoutingModule
  ],
  declarations: [CadastrarhorariosPage]
})
export class CadastrarhorariosPageModule {}
