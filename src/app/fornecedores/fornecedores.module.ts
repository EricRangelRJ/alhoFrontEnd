import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FornecedoresListComponent } from './components/fornecedores-list/fornecedores-list.component';
import { FornecedoresCadComponent } from './components/fornecedores-cad/fornecedores-cad.component';
import { FornecedoresRoutingModule } from './fornecedores-routing.module';


@NgModule({
  declarations: [
    FornecedoresListComponent,
    FornecedoresCadComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    SharedModule
  ]
})
export class FornecedoresModule { }
