import { VendedoresCadComponent } from '../vendedores/components/vendedores-cad/vendedores-cad.component';
import { VendedoresListComponent } from '../vendedores/components/vendedores-list/vendedores-list.component';
import { FornecedoresCadComponent } from '../fornecedores/components/fornecedores-cad/fornecedores-cad.component';
import { FornecedoresListComponent } from '../fornecedores/components/fornecedores-list/fornecedores-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCadComponent } from '../clientes/components/clientes-cad/clientes-cad.component';
import { ClientesListComponent } from '../clientes/components/clientes-list/clientes-list.component';
import { HomeComponent } from '../home/components/home/home.component';
import { PedidosCadComponent } from '../pedidos/components/pedidos-cad/pedidos-cad.component';
import { PedidosListComponent } from '../pedidos/components/pedidos-list/pedidos-list.component';
import { ProdutosCadComponent } from '../produtos/components/produtos-cad/produtos-cad.component';
import { ProdutosListComponent } from '../produtos/components/produtos-list/produtos-list.component';
import { UsuariosCadComponent } from '../usuarios/components/usuarios-cad/usuarios-cad.component';
import { UsuariosListComponent } from '../usuarios/components/usuarios-list/usuarios-list.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  {
    path: '', component: NavComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'clientes-lista', component: ClientesListComponent },
      { path: 'cadastrar-cliente', component: ClientesCadComponent },
      { path: 'usuarios-lista', component: UsuariosListComponent },
      { path: 'cadastrar-usuario', component: UsuariosCadComponent },
      { path: 'pedidos-lista', component: PedidosListComponent },
      { path: 'cadastrar-pedido', component: PedidosCadComponent },
      { path: 'produtos-lista', component: ProdutosListComponent },
      { path: 'cadastrar-produto', component: ProdutosCadComponent },
      { path: 'fornecedores-lista', component: FornecedoresListComponent },
      { path: 'cadastrar-fornecedor', component: FornecedoresCadComponent },
      { path: 'vendedores-lista', component: VendedoresListComponent },
      { path: 'cadastrar-vendedor', component: VendedoresCadComponent },


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
