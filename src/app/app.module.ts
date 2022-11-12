import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { TraducaoMatPaginatorIntl } from './shared/traducao-mat-paginator-intl';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { LoginModule } from './login/login.module';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent,
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
    LoginModule
    
    ],
  providers: [{provide: MatPaginatorIntl, useClass: TraducaoMatPaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
