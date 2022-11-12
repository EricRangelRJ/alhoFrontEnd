import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
})
export class LayoutModule { }
