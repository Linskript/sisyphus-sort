import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarhorariosPageRoutingModule } from './editarhorarios-routing.module';

import { EditarhorariosPage } from './editarhorarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarhorariosPageRoutingModule
  ],
  declarations: [EditarhorariosPage]
})
export class EditarhorariosPageModule {}
