import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ShellComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ShellModule { }
