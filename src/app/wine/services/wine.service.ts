import { Injectable } from '@angular/core';
import { Wine } from '../interfaces/wine.interface';

import { WineService as ApiWineService } from 'src/app/api/services';

@Injectable()
export class WineService {

  private _wineList: Wine[] = [
  ];

  public constructor(private api: ApiWineService) {
    this.api.apiWineGetWineListGet$Json().subscribe(rta => {
      this._wineList = rta;
      debugger
    });
  }

  get wineList(): Wine[] {
    return [...this._wineList];
  }

  addWine(personaje: Wine) {
    debugger
    this._wineList.push(personaje);
  }

}