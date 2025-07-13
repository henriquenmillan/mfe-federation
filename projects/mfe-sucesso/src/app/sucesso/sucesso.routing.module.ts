import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucessoComponent } from './sucesso.component';

const routes: Routes = [
  {
    path: '',
    component: SucessoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucessoRoutingModule { }
