import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { TableModule } from 'primeng/table';

export interface Orari {
  day: string;
  hour: string[];
}

@Component({
  selector: 'app-home',
  imports: [SharedModule, TableModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  orari!: Orari[];

  constructor(
    private router: Router,
    public themeService: ThemeService,
  ) {
    this.orari = [
      {
        day: 'Sabato',
        hour: ['18:00'],
      },
      {
        day: 'Domenica',
        hour: ['9:00', ' 11:00', ' 18:00'],
      },
    ];
  }

  ngOnInit() {}
}
