import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteSearchComponent } from './components/clientes/cliente-search/cliente-search.component';
import { ClienteUpdateComponent } from './components/clientes/cliente-update/cliente-update.component';
import { ClientesComponent } from './components/clientes/clientes-list.component';
import { FornecedoresCreateComponent } from './components/fornecedores/fornecedores-create/fornecedores-create.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
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
      { path: 'clientes/update/:id', component: ClienteUpdateComponent},
      { path: 'clientes/search/:id', component: ClienteSearchComponent},
      { path: 'usuarios', component: UsuarioComponent},
      { path: 'pedidos',  component: PedidoComponent},
      { path: 'fornecedores',  component: FornecedoresComponent},
      { path: 'fornecedores/create', component: FornecedoresCreateComponent}
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
