import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClasificationService, WineService } from '../api/services';
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
import {MatSliderModule} from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MessageService } from './services/message.service';

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
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    WineService,
    ClasificationService,
    MessageService
  ]
})
export class WineModule { }
