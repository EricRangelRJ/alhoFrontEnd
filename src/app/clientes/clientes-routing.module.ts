import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadComponent } from './components/clientes-cad/clientes-cad.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';

const routes: Routes = [
  {
    path: '', component: ClientesListComponent, children: [
      { path: 'cadastrar-cliente', component: ClientesCadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
