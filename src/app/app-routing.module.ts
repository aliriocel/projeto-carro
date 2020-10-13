import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'clientes-novo',
    loadChildren: () => import('./clientes-novo/clientes-novo.module').then( m => m.ClientesNovoPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  
  },
  
  {
    path: 'clientes-detalhe/:id',
    loadChildren: () => import('./clientes-detalhe/clientes-detalhe.module').then( m => m.ClientesDetalhePageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  
  {
    path: 'logoff',
    loadChildren: () => import('./logoff/logoff.module').then( m => m.LogoffPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'clientes-delete/:id',
    loadChildren: () => import('./clientes-delete/clientes-delete.module').then( m => m.ClientesDeletePageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'clientes-update/:id',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./clientes-update/clientes-update.module').then( m => m.ClientesUpdatePageModule)
  },
  {
    path: 'clientes-foto/:id',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./clientes-foto/clientes-foto.module').then( m => m.ClientesFotoPageModule)
  },
  {
    path: 'maps',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'maps-geolocation',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./maps-geolocation/maps-geolocation.module').then( m => m.MapsGeolocationPageModule)
  },
  {
    path: 'carros',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./carros/carros.module').then( m => m.CarrosPageModule)
  },
  {
    path: 'carros-detalhe/:id',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./carros-detalhe/carros-detalhe.module').then( m => m.CarrosDetalhePageModule)
  },
  {
    path: 'carros-update/:id',
    canActivate : [AngularFireAuthGuard],
    loadChildren: () => import('./carros-update/carros-update.module').then( m => m.CarrosUpdatePageModule)
  },
  {
    path: 'carros-novo',
    loadChildren: () => import('./carros-novo/carros-novo.module').then( m => m.CarrosNovoPageModule)
  },
  {
    path: 'carros-foto/:id',
    loadChildren: () => import('./carros-foto/carros-foto.module').then( m => m.CarrosFotoPageModule)
  },
  {
    path: 'carros-delete/:id',
    loadChildren: () => import('./carros-delete/carros-delete.module').then( m => m.CarrosDeletePageModule)
  },
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
