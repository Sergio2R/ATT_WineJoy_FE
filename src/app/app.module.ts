import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';
import { WineService } from './wine/services/wine.service';
import { WineModule } from './wine/wine.module';

//material
import { MatTableModule } from '@angular/material/table'  

//api
import { WineService as ApiWineService } from './api/services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Material
    MatTableModule,
    //Project
    DbzModule, 
    WineModule, NgbModule,
  ], 
  providers: [WineService,
    ApiWineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
