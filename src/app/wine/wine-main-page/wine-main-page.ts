import { Component } from '@angular/core';

import { Wine } from '../interfaces/wine.interface';

import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './wine-main-page.html'
})
export class MainPageComponent {
  nuevo: Wine = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() {}

}
