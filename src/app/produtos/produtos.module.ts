import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ProdutosCadComponent } from './components/produtos-cad/produtos-cad.component';


@NgModule({
  declarations: [
    ProdutosListComponent,
    ProdutosCadComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
