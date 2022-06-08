import { Component } from '@angular/core';

import { Wine } from '../interfaces/wine.interface';

import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-main-page',
  templateUrl: './wine-main-page.html'
})
export class WineMainPageComponent {
  nuevo: Wine = {
    // id : 10,
    name: "",
    clasification : 0,
    year: 2000,
    aroma: undefined,
    swetness: 0,
    acidity: 0,
    alcohol: 0,
    notes: undefined
  }

  constructor() {}

}
