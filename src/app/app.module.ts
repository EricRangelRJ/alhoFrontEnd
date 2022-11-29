import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Swal, { SweetAlertIcon } from 'sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//Componentes do Projeto
import { NavComponent } from './components/nav/nav.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { UsuarioComponent } from './components/usuario/usuario_list.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ClientesComponent,
    HeaderComponent,
    UsuarioComponent,
    PedidoComponent,
    LoginComponent,
    ClienteCreateComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    ],
  providers: [ AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
