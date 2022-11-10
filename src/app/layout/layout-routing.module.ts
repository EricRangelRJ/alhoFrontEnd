import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadComponent } from '../clientes/components/clientes-cad/clientes-cad.component';
import { ClientesListComponent } from '../clientes/components/clientes-list/clientes-list.component';
import { HomeComponent } from '../home/components/home/home.component';
import { PedidosListComponent } from '../pedidos/components/pedidos-list/pedidos-list.component';
import { UsuariosListComponent } from '../usuarios/components/usuarios-list/usuarios-list.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {

    path: '', component: NavComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'clientes-lista', component: ClientesListComponent },
      { path: 'cadastrar-cliente', component: ClientesCadComponent },
      { path: 'usuarios-lista', component: UsuariosListComponent},
      { path: 'pedidos-lista', component: PedidosListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
