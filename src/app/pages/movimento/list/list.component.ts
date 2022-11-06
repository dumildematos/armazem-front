import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Movimento } from 'src/app/models/movimento';
import { MovimentoService } from 'src/app/services/movimento.service';

@Component({
  selector: 'app-list-movimento',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() openModal = new EventEmitter<any>();

  listOfColumn = [
    {
      title: 'Tipo',
      compare: (a: Movimento, b: Movimento) => a.tipo.localeCompare(b.tipo),
      priority: false
    },
    {
      title: 'Data de Início',
      compare: false,
      priority: 3
    },
    {
      title: 'Data de Fim',
      compare: false,
      priority: 2
    },
    {
      title: 'Ações',
      compare: false,
      priority: 1
    }
  ];

  listOfData!: Movimento[];

  size: number = 10;
  page: number = 0;

  constructor(
    private movimentoService: MovimentoService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.movimentoService.listar(this.page, this.size).subscribe(
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
        this.movimentoService.eliminar(container.id).subscribe(
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
