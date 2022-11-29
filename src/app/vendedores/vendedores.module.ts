import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedoresRoutingModule } from './vendedores-routing.module';
import { VendedoresListComponent } from './components/vendedores-list/vendedores-list.component';
import { VendedoresCadComponent } from './components/vendedores-cad/vendedores-cad.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VendedoresListComponent,
    VendedoresCadComponent
  ],
  imports: [
    CommonModule,
    VendedoresRoutingModule,
    SharedModule
  ]
})
export class VendedoresModule { }
