import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirhorariosPageRoutingModule } from './excluirhorarios-routing.module';

import { ExcluirhorariosPage } from './excluirhorarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirhorariosPageRoutingModule
  ],
  declarations: [ExcluirhorariosPage]
})
export class ExcluirhorariosPageModule {}
