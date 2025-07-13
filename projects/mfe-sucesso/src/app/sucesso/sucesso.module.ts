import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucessoComponent } from './sucesso.component';


@NgModule({
  declarations: [
    SucessoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SucessoComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SucessoModule { }
