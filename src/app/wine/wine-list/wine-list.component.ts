import { Component, Input } from '@angular/core';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent {

    get personajes() {
    return this.wineService.wineList;
  }

  constructor( private wineService : WineService ) {}

}
