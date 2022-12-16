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
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/clientes/cliente-update/cliente-update.component';
import { ClientesComponent } from './components/clientes/clientes-list.component';
import { FornecedoresCreateComponent } from './components/fornecedores/fornecedores-create/fornecedores-create.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//Componentes do Projeto
import { NavComponent } from './components/nav/nav.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { UsuarioComponent } from './components/usuario/usuario_list.component';
import { ActionIconComponent } from './components/util/action-icon/action-icon.component';
import { CardFormComponent } from './components/util/card-form/card-form.component';
import { CardListarComponent } from './components/util/card-listar/card-listar.component';
import { NewBtnComponent } from './components/util/new-btn/new-btn.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ClienteSearchComponent } from './components/clientes/cliente-search/cliente-search.component';
import { CardSearchComponent } from './components/util/card-search/card-search.component';
import { MatNativeDateModule } from '@angular/material/core';

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
    NewBtnComponent,
    CardFormComponent,
    CardListarComponent,
    FornecedoresComponent,
    FornecedoresCreateComponent,
    ActionIconComponent,
    ClienteUpdateComponent,
    ClienteSearchComponent,
    CardSearchComponent,
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
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    AuthInterceptorProvider,
    MatDatepickerModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
