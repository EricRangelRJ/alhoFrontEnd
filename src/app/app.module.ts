import { RelatoriosModule } from './relatorios/relatorios.module';
import { httpInterceptorProviders } from './_interceptors/index';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { VendedoresModule } from './vendedores/vendedores.module';
import { TraducaoMatPaginatorIntl } from './shared/traducao-mat-paginator-intl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    ClientesModule,
    UsuariosModule,
    PedidosModule,
    ProdutosModule,
    FornecedoresModule,
    VendedoresModule,
    UsuariosModule,
    RelatoriosModule

    ],
  providers: [{provide: MatPaginatorIntl, useClass: TraducaoMatPaginatorIntl},
  httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
