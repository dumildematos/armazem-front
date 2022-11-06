import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContainerComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
