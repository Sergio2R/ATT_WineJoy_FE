import { Component } from '@angular/core';

import { Wine } from '../interfaces/wine.interface';

import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-main-page',
  templateUrl: './wine-main-page.html'
})
export class WineMainPageComponent {
  nuevo: Wine = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() {}

}
