import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  constructor(
    private router: Router
  ) {}

  private remoteEntryUrl = {
    cadastro: {
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'mfeCadastro',
          exposedModule: './CadastroModule',
          moduleName: 'CadastroModule'
    }
  }

  navigateToCadastro() {
    // const teste = (<any>this.router.config.find((config) => config.path === ''))._loadedRoutes;
    const remoteConfig = this.remoteEntryUrl.cadastro;
   
    this.router.resetConfig([
      ...this.router.config,
      {
        path: 'cadastro',
        loadChildren: () => loadRemoteModule({
          remoteEntry: remoteConfig.remoteEntry,
          remoteName: remoteConfig.remoteName,
          exposedModule: remoteConfig.exposedModule
        }).then(m => m[remoteConfig.moduleName]).catch(err => {
          console.error('Error loading CadastroModule:', err);
          return null;
        })
      }
    ])
        
    this.router.navigate(['cadastro']);
  }
}
