import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucessoComponent } from './sucesso.component';
import { SucessoRoutingModule } from './sucesso.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SucessoService } from '../services/sucesso.service';


@NgModule({
  declarations: [
    SucessoComponent
  ],
  imports: [
    CommonModule,
    SucessoRoutingModule,
    HttpClientModule,
  ],
  exports: [
    SucessoComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    SucessoService
  ]
})
export class SucessoModule { }
