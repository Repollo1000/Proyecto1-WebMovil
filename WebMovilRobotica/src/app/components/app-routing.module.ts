import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('../paginas/dashboard/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('../paginas/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('../paginas/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'inforobot',
    loadChildren: () => import('../paginas/inforobot/inforobot.module').then( m => m.InforobotPageModule)
  },
  {
    path: 'propiedades',
    loadChildren: () => import('../paginas/propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../paginas/signup/signup.module').then( m => m.SignupPageModule)
  },
  // Redirección por defecto
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
