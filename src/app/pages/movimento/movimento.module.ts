import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentoRoutingModule } from './movimento-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MovimentoRoutingModule
  ]
})
export class MovimentoModule { }
