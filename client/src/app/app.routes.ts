import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Bollettino } from './pages/bollettino/bollettino';
import { Contatti } from './pages/contatti/contatti';
import { Sale } from './pages/sale/sale';
import { Iniziative } from './pages/iniziative/iniziative';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'bollettino',
    component: Bollettino,
  },
  {
    path: 'iniziative',
    component: Iniziative,
  },
  {
    path: 'contatti',
    component: Contatti,
  },
  {
    path: 'sale',
    component: Sale,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
