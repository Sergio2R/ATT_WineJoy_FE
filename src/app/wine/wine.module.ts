import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WineService } from '../api/services';
import { AddComponent } from './add-wine/add-wine.component';

// import { MainPageComponent } from './main-page/main-page.component';
// import { PersonajesComponent } from './personajes/personajes.component';

// import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    // MainPageComponent,
    // PersonajesComponent,
    AddComponent
  ],
  exports: [
    // MainPageComponent,
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
