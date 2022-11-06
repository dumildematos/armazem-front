import { Movimento } from './../../../models/movimento';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { MovimentoService } from 'src/app/services/movimento.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   @Input() type!: string;
   @Input() data!: Movimento;

  validateForm!: UntypedFormGroup;

  constructor(
    private modal: NzModalRef,
    private fb: UntypedFormBuilder,
    private movimentoService: MovimentoService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [this.data?.id || null],
      tipo: [this.data?.tipo || null, [ Validators.required]],
      dtInicio: [this.data?.dtInicio || null, [Validators.required]],
      dtFim: [this.data?.dtFim || null, [Validators.required]],
    });
  }

  destroyModal(): void {
    this.modal.destroy();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      if(this.type === 'create'){
        this.movimentoService.gravar(this.validateForm.value).subscribe(
          next => {
            this.modal.triggerOk();
          }
        )
      } 
      if(this.type === 'edit'){
        this.movimentoService.editar(this.validateForm.value).subscribe(
          next => {
            this.modal.triggerOk();
          }
        )
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



}
