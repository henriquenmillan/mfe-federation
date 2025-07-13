import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { filter, mergeMap } from 'rxjs';
import { RemoteModuleService } from './services/remote-module.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  constructor(
  ) { }

  navigateToCadastro() {
    window.dispatchEvent(new CustomEvent('navigateToMfe', {
      detail: {
        url: 'cadastro',
        param: { teste: '123' },
        callback: (result: any) => {
          console.log('Resposta:', result);
        }
      }
    }));
  }




}
