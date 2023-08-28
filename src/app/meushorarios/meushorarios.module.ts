import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeushorariosPageRoutingModule } from './meushorarios-routing.module';

import { MeushorariosPage } from './meushorarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeushorariosPageRoutingModule
  ],
  declarations: [MeushorariosPage]
})
export class MeushorariosPageModule {}
