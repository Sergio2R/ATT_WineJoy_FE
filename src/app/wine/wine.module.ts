import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WineService } from '../api/services';
import { AddComponent } from './add-wine/add-wine.component';
import { WineMainPageComponent } from './wine-main-page/wine-main-page';
import { WineListComponent } from './wine-list/wine-list.component';


//material 
import { MatTableModule } from '@angular/material/table'  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    WineMainPageComponent,
    WineListComponent,
    AddComponent
  ],
  exports: [
    WineMainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    //Material
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [
    WineService
  ]
})
export class WineModule { }
