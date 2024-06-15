import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./paginas/dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./paginas/ajustes/ajustes.module').then(m => m.AjustesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inforobot',
    loadChildren: () => import('./paginas/inforobot/inforobot.module').then( m => m.InforobotPageModule)
  },
  {
    path: 'propiedades',
    loadChildren: () => import('./paginas/propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./paginas/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'testing',
    loadChildren: () => import('./paginas/testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'asesor-deportivo',
    loadChildren: () => import('./paginas/asesor-deportivo/asesor-deportivo.module').then( m => m.AsesorDeportivoPageModule)
  },
  {
    path: 'ohbotinfo',
    loadChildren: () => import('./paginas/ohbotinfo/ohbotinfo.module').then( m => m.OhbotinfoPageModule)
  },
  {
    path: 'chat-deportivo',
    loadChildren: () => import('./paginas/chat-deportivo/chat-deportivo.module').then( m => m.ChatDeportivoPageModule)
  },
  {
    path: 'chat-preguntas',
    loadChildren: () => import('./paginas/chat-preguntas/chat-preguntas.module').then( m => m.ChatPreguntasPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./paginas/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule),
    canActivate: [AuthGuard, AdminGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
