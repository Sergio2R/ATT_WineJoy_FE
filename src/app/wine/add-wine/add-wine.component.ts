import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wine } from '../interfaces/wine.interface';

import { WineService } from '../services/wine.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { ClasificationService as ApiClasificationService } from '../../api/services';
import { Clasification } from 'src/app/api/models';

@Component({
    selector: 'app-add-wine',
    templateUrl: './add-wine.component.html',
    styleUrls: ['./add-wine.component.css']
})
export class AddComponent {

    date: { year: number; };
    clasificationList: Clasification[];

    maxDate = new Date();
    @Input() nuevo: Wine = {
        name: undefined,
        clasification: 0,
        year: 2000,
        aroma: undefined,
        swetness: 0,
        acidity: 1,
        alcohol: 0,
        notes: undefined
    }

    constructor(private wineService: WineService, private calendar: NgbCalendar, private apiClasificationService: ApiClasificationService) { }

    ngOnInit() {
        this.apiClasificationService.apiClasificationGetClasificationListGet$Json().subscribe(rta => {
            this.clasificationList = rta;
        });
    }

    onInputChange(event: any) {
        console.log(event.value);
    }

    add() {
        debugger
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
