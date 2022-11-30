import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { UsuariosCadComponent } from './components/usuarios-cad/usuarios-cad.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';


@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosCadComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
