import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentoRoutingModule } from './movimento-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { MovimentoComponent } from './movimento.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    MovimentoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovimentoRoutingModule
  ]
})
export class MovimentoModule { }
