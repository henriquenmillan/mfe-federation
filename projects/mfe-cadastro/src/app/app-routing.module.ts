import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
