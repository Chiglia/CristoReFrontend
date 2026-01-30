import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './pages/common-components/nav/nav';
import { Footer } from './pages/common-components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  template: `
    <app-nav></app-nav>
    <router-outlet />
    <app-footer></app-footer>
  `,
  styles: [],
})
export class App {}
