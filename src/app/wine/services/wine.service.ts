import { Injectable } from '@angular/core';
import { Wine } from '../interfaces/wine.interface';

@Injectable()
export class WineService {

  // public wine: Wine = {};
    private _wineList: Wine[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get wineList(): Wine[] {
        return [...this._wineList];
    }

    constructor() {}

    addWine( personaje: Wine ) {
      debugger
        this._wineList.push( personaje );
    }

}