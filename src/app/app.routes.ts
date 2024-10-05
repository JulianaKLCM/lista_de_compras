import { Routes } from '@angular/router';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: ListaDeComprasComponent },
  { path: 'sobre', component: SobreComponent },
];
