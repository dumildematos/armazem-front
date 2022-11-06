import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.scss']
})
export class MovimentoComponent implements OnInit {

  @ViewChild(ListComponent) listComponent!: ListComponent

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  openModal(data: any){
    console.log(data);
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: FormComponent,
      nzOnOk: e => {
        this.listComponent.listar();
      },
      nzComponentParams: {
        type: data ? 'edit' : 'create',
        data: data
      }
    });
  }


}
