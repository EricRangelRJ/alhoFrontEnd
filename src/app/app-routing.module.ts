import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Configuração das rotas
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
 
  { 
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  
  { 
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
