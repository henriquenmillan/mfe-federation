import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  constructor(
  ) {
  }

  navigateToCadastro() {
    window.dispatchEvent(new CustomEvent('navigateToMfe', {
      detail: {
        url: 'cadastro',
        param: {},
        callback: (result: any) => {
          console.log('Resposta:', result);
        }
      }
    }));
  }

}
