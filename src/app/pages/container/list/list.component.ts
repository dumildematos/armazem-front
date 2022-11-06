import { ContainerService } from './../../../services/container.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/models/container';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-list-container',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() openModal = new EventEmitter<any>();

  listOfColumn = [
    {
      title: 'N. Container',
      compare: (a: Container, b: Container) => a.ncontainer.localeCompare(b.ncontainer),
      priority: false
    },
    {
      title: 'Cliente',
      compare: (a: Container, b: Container) => a.cliente.localeCompare(b.cliente),
      priority: 5
    },
    {
      title: 'Tipo',
      compare: (a: Container, b: Container) => a.tipo - b.tipo,
      priority: 4
    },
    {
      title: 'Status',
      compare: (a: Container, b: Container) => a.status.localeCompare(b.status),
      priority: 3
    },
    {
      title: 'Categoria',
      compare: (a: Container, b: Container) => a.categoria.localeCompare(b.categoria),
      priority: 2
    },
    {
      title: 'Ações',
      compare: false,
      priority: 1
    }
  ];

  listOfData!: Container[];

  size: number = 10;
  page: number = 0;

  constructor(
    private containerService: ContainerService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.containerService.listar(this.page, this.size).subscribe(
      next => {
        this.listOfData = [...next.content]
      }
    )
  }

  delete(container: any): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.containerService.eliminar(container.id).subscribe(
          next => {
            this.listar();
          }
        )
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  editar(data: any): void{
    this.openModal.emit(data);
  }

}
