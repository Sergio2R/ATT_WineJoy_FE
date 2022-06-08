import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WineService } from '../api/services';
import { AddComponent } from './add-wine/add-wine.component';
import { WineMainPageComponent } from './wine-main-page/wine-main-page';
import { WineListComponent } from './wine-list/wine-list.component';

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
    FormsModule
  ],
  providers: [
    WineService
  ]
})
export class WineModule { }
