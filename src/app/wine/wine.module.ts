import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WineService } from '../api/services';
import { AddComponent } from './add-wine/add-wine.component';
import { WineMainPageComponent } from './wine-main-page/wine-main-page';
import { WineListComponent } from './wine-list/wine-list.component';


//material 
import { MatTableModule } from '@angular/material/table'  

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
    MatTableModule
  ],
  providers: [
    WineService
  ]
})
export class WineModule { }
