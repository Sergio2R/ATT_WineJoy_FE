import { Injectable } from '@angular/core';
import { Acidity } from '../interfaces/acidity.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { AcidityService as ApiAcidityService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class AcidityService {

  public _acidityList: Acidity[] = [
  ];
  public _acidity: Acidity;

  public constructor(private api: ApiAcidityService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.api.apiAcidityGetAcidityListGet$Json().subscribe(rta => {
      this._acidityList = rta;
    });
  }

  get acidityList(): Acidity[] {
    return [...this._acidityList];
  }

  getAcidityList() {
    this.api.apiAcidityGetAcidityListGet$Json().subscribe(rta => {
      this._acidityList = rta;
    });
  }

  getAcidity(id: number) {
    this.api.apiAcidityGetAcidityGet$Json( { Id: id }).subscribe(rta => {
      this._acidity = rta;
    });
  }

}