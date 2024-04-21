import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterEvent, RouterLink, RouterModule, Routes } from '@angular/router';

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
    path: 'info',
    loadChildren: () => import('./dashboard/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'inforobot',
    loadChildren: () => import('./inforobot/inforobot.module').then( m => m.InforobotPageModule)
  },
  {
    path: 'propiedades',
    loadChildren: () => import('./propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterLink
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
