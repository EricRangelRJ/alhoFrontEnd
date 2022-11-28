import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { ProdutosCadComponent } from './components/produtos-cad/produtos-cad.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProdutosListComponent,
    ProdutosCadComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule
  ]
})
export class ProdutosModule { }
