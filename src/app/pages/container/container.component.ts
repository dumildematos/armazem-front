import { ListComponent } from './list/list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

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
