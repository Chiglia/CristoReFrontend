import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-iniziative',
  imports: [SharedModule, CarouselModule],
  templateUrl: './iniziative.html',
  styles: ``,
})
export class Iniziative {
  iniziative: any;
  responsiveOptions: any[] | undefined;
  constructor(
    private router: Router,
    public themeService: ThemeService,
  ) {
    this.iniziative = [
      {
        day: 'Grest',
        image: 'grest.jpg',
      },
      {
        day: 'Scout',
        image: 'scout2.jpg',
      },
      {
        day: 'Assisi',
        image: 'assisi.jpg',
      },
    ];
  }
}
