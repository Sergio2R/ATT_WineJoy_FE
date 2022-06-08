import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wine } from '../interfaces/wine.interface';

import { WineService } from '../services/wine.service';

@Component({
    selector: 'app-add-wine',
    templateUrl: './add-wine.component.html'
})
export class AddComponent {

    @Input() nuevo: Wine = {
        nombre: '',
        poder: 0
    }

    constructor(private wineService: WineService) { }

    add() {
        if (this.nuevo.nombre.trim().length === 0) { return; }

        this.wineService.addWine(this.nuevo);

        this.nuevo = {
            nombre: '',
            poder: 0
        }

    }
}
