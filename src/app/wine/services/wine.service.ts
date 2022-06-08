import { Injectable } from '@angular/core';
import { Wine } from '../interfaces/wine.interface';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';

import { WineService as ApiWineService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class WineService {

  private _wineList: Wine[] = [
  ];

  // private messageSource = new BehaviorSubject<number>(message);
  
  // currentMessage = this.messageSource.asObservable();

  public constructor(private api: ApiWineService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.api.apiWineGetWineListGet$Json().subscribe(rta => {
      this._wineList = rta;
    });
  }

  get wineList(): Wine[] {
    return [...this._wineList];
  }

  // sendMessage(message: number) {
  //   this.messageSource.next(message);
  // }

  getWine(id: number) {
    debugger
    this.api.apiWineGetWineGet$Json( { Id: id }).subscribe(rta => {
      debugger
    });
  }

  addWine(wineData: Wine) {
    wineData.year = wineData.fullYear.getFullYear();
    this._wineList.push(wineData);
    this.api.apiWineAddWinePost$Json( { body: wineData }).subscribe(rta => {
      window.location.reload();
      // this.router.navigate([this.router.url])
    });
  }

  deleteWine(id: number) {
    this.api.apiWineDeleteWineDelete$Json({id}).subscribe(rta => {
      window.location.reload();
      // this.router.navigate([this.router.url])
    });

  }

}