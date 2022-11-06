import { Container } from 'src/app/models/container';
import { ContainerService } from './../../../services/container.service';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, UntypedFormControl } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() type!: string;
  @Input() data!: Container;

  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  constructor(
    private modal: NzModalRef,
    private fb: UntypedFormBuilder,
    private containerService: ContainerService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      id: [this.data?.id || null],
      cliente: [this.data?.cliente || null, [ Validators.required]],
      ncontainer: [this.data?.ncontainer || null, [Validators.required, Validators.pattern("^[a-zA-Z]{4}[0-9]{7}$")]],
      tipo: [String(this.data?.tipo) || null, [Validators.required]],
      status: [this.data?.status || null, [Validators.required]],
      categoria: [this.data?.categoria || null, [Validators.required]],
    });
  }

  destroyModal(): void {
    this.modal.destroy();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      if(this.type === 'create'){
        this.containerService.gravar(this.validateForm.value).subscribe(
          next => {
            this.modal.triggerOk();
          }
        )
      } 
      if(this.type === 'edit'){
        this.containerService.editar(this.validateForm.value).subscribe(
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
