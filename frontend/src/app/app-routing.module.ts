import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule) },
  { path: 'dashboard', loadChildren: () => import('./paginas/dashboard/dashboard.module').then(m => m.DashboardPageModule), canActivate: [AuthGuard] },
  { path: 'inicio-sesion', loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule) },
  { path: 'ajustes', loadChildren: () => import('./paginas/ajustes/ajustes.module').then(m => m.AjustesPageModule), canActivate: [AuthGuard] },
  { path: 'inforobot', loadChildren: () => import('./paginas/inforobot/inforobot.module').then(m => m.InforobotPageModule), canActivate: [AuthGuard] },
  { path: 'propiedades', loadChildren: () => import('./paginas/propiedades/propiedades.module').then(m => m.PropiedadesPageModule), canActivate: [AuthGuard] },
  { path: 'signup', loadChildren: () => import('./paginas/signup/signup.module').then(m => m.SignupPageModule), canActivate: [AuthGuard] },
  { path: 'testing', loadChildren: () => import('./paginas/testing/testing.module').then(m => m.TestingPageModule), canActivate: [AuthGuard] },
  { path: 'asesor-deportivo', loadChildren: () => import('./paginas/asesor-deportivo/asesor-deportivo.module').then(m => m.AsesorDeportivoPageModule), canActivate: [AuthGuard] },
  { path: 'ohbotinfo', loadChildren: () => import('./paginas/ohbotinfo/ohbotinfo.module').then(m => m.OhbotinfoPageModule), canActivate: [AuthGuard] },
  { path: 'chat-deportivo', loadChildren: () => import('./paginas/chat-deportivo/chat-deportivo.module').then(m => m.ChatDeportivoPageModule), canActivate: [AuthGuard] },
  { path: 'chat-preguntas', loadChildren: () => import('./paginas/chat-preguntas/chat-preguntas.module').then(m => m.ChatPreguntasPageModule), canActivate: [AuthGuard] },
  { path: 'admin-dashboard', loadChildren: () => import('./paginas/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule), canActivate: [AuthGuard] },
   
  
  {
    path: 'asesoramiento-emocional',
    loadChildren: () => import('./paginas/asesoramiento-emocional/asesoramiento-emocional.module').then( m => m.AsesoramientoEmocionalPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'tutor-matematica',
    loadChildren: () => import('./paginas/tutor-matematica/tutor-matematica.module').then( m => m.TutorMatematicaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'resolver',
    loadChildren: () => import('./paginas/resolver/resolver.module').then( m => m.ResolverPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chat-matematica',
    loadChildren: () => import('./paginas/chat-matematica/chat-matematica.module').then( m => m.ChatMatematicaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagecanto',
    loadChildren: () => import('./paginas/pagecanto/pagecanto.module').then( m => m.PagecantoPageModule),
    canActivate: [AuthGuard]
  }, {
    path: 'camara',
    loadChildren: () => import('./paginas/camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [AuthGuard]
  },{
    path: 'activar-robot',
    loadChildren: () => import('./paginas/activar-robot/activar-robot.module').then( m => m.ActivarRobotPageModule),
    canActivate: [AuthGuard]
  },
 
 
  { path: '**', redirectTo: 'home' },   

// Manejo de rutas desconocidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }