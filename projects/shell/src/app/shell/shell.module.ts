import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MatButtonModule } from '@angular/material/button';
import { initListenRemoteModule } from './services/remote-module.factory';
import { RemoteModuleService } from './services/remote-module.service';



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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initListenRemoteModule,
      deps: [RemoteModuleService],
      multi: true
    }
  ]
})
export class ShellModule { }
