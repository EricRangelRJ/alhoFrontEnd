import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Configuração das rotas
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: ' ' },
  { 
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
