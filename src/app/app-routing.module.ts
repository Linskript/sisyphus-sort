import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'meushorarios',
    loadChildren: () => import('./meushorarios/meushorarios.module').then( m => m.MeushorariosPageModule)
  },
  {
    path: 'cadastrarhorarios',
    loadChildren: () => import('./cadastrarhorarios/cadastrarhorarios.module').then( m => m.CadastrarhorariosPageModule)
  },
  {
    path: 'editarhorarios',
    loadChildren: () => import('./editarhorarios/editarhorarios.module').then( m => m.EditarhorariosPageModule)
  },
  {
    path: 'excluirhorarios',
    loadChildren: () => import('./excluirhorarios/excluirhorarios.module').then( m => m.ExcluirhorariosPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'meuperfil',
    loadChildren: () => import('./meuperfil/meuperfil.module').then( m => m.MeuperfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
