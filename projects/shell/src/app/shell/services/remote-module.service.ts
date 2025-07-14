import { loadRemoteModule } from "@angular-architects/module-federation";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RemoteMoluleList } from "../models/remote-module.model";

@Injectable({
    providedIn: 'root'
})
export class RemoteModuleService {

    private loadedRemotes = new Set<string>();

    private remoteModulesList: RemoteMoluleList = {
        cadastro: {
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'mfeCadastro',
            exposedModule: './CadastroModule',
            moduleName: 'CadastroModule',
            url: "cadastro"
        },
        sucesso: {
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'mfeSucesso',
            exposedModule: './SucessoModule',
            moduleName: 'SucessoModule',
            url: "sucesso"
        }
    };

    constructor(
        private router: Router
    ) { }

    listenRemoteModule(): void {
        window.addEventListener('navigateToMfe', (event: any) => {
            this.loadRemoteModule(event.detail)
        });
    }

    loadRemoteModule(event: any) {
        const url: string = event.url.split('?')[0].replace('/', '');
        const params = event.param || {};
        const remoteConfig = this.remoteModulesList[url];

        if (this.loadedRemotes.has(url)) {
            this.router.navigate([url], { queryParams: params });
            return;
        }

        if (remoteConfig) {
            this.router.resetConfig([
                ...this.router.config,
                {
                    path: url,
                    loadChildren: () => loadRemoteModule({
                        remoteEntry: remoteConfig.remoteEntry,
                        remoteName: remoteConfig.remoteName,
                        exposedModule: remoteConfig.exposedModule
                    }).then(m => m[remoteConfig.moduleName]).catch(err => {
                        console.error('Não foi possível carregar o módulo solicitado:', err);
                        return null;
                    })
                }
            ])
            
            this.loadedRemotes.add(url);
            this.router.navigate([url], { queryParams: params });
        } else {
            event.callback?.({ status: 'error', message: 'Módulo remoto não encontrado.' });
        }
    }
}