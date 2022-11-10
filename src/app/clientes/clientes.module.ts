import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesCadComponent } from './components/clientes-cad/clientes-cad.component';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesCadComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
  ]
})
export class ClientesModule { }
