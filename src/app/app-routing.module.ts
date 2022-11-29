import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClientesComponent } from './components/clientes/clientes-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { UsuarioComponent } from './components/usuario/usuario_list.component';

//Configuração das rotas
const routes: Routes = [

  { path: 'login', component : LoginComponent},

  {  path: '', component: NavComponent, 
    //canActivate:[AuthGuard],
       children: [
      { path:  'home' ,   component: HomeComponent},
      { path: 'clientes', component: ClientesComponent},
      { path: 'clientes/create', component: ClienteCreateComponent},
      { path: 'usuarios', component: UsuarioComponent},
      { path: 'pedidos',  component: PedidoComponent},
      { path: 'pedidos',  component: PedidoComponent},
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
