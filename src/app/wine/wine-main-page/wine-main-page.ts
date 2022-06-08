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
    clasification : undefined,
    year: undefined,
    aroma: undefined,
    swetness: undefined,
    acidity: 4.1,
    alcohol: 5.2,
    notes: "jejeje"
  }

  constructor() {}

}
