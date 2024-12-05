import { Routes } from '@angular/router';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { loginGuard } from './login.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: '', component: ListaDeComprasComponent, canActivate: [authGuard] },
  { path: 'sobre', component: SobreComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
