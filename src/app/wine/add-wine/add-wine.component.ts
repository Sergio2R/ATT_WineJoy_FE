import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wine } from '../interfaces/wine.interface';

import { WineService } from '../services/wine.service';

@Component({
    selector: 'app-add-wine',
    templateUrl: './add-wine.component.html'
})
export class AddComponent {

    @Input() nuevo: Wine = {
        name: "test",
        clasification: 0,
        year: 1,
        aroma: "good",
        swetness: 3.0,
        acidity: 4.1,
        alcohol: 5.2,
        notes: "jejeje"
    }

    constructor(private wineService: WineService) { }

    add() {
        if (this.nuevo.name != null && this.nuevo.name?.trim().length === 0) { return; }

        this.wineService.addWine(this.nuevo);

        this.nuevo = {
            id: undefined,
            name: undefined,
            clasification: undefined,
            year: undefined,
            aroma: undefined,
            swetness: undefined,
            acidity: undefined,
            alcohol: undefined,
            notes: undefined
        }
    }
}
