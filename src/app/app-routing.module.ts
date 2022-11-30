import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './usuarios/guard/auth.guard';

//Configuração das rotas
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {

    //guarda (decide se uma rota pode ser ativada)
    canActivate: [AuthGuard],

    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },

  {
    path: 'login',
    loadChildren: () => import('./usuarios/usuarios.module').then(m=> m.UsuariosModule)
  },

  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
