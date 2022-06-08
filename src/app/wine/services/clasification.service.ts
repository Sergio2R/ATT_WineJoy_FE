import { Injectable } from '@angular/core';
import { Clasification } from '../interfaces/clasification.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { ClasificationService as ApiClasificationService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class ClasificationService {

  private _clasificationList: Clasification[] = [
  ];

  public constructor(private api: ApiClasificationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.api.apiClasificationGetClasificationListGet$Json().subscribe(rta => {
      this._clasificationList = rta;
    });
  }

  get clasificationList(): Clasification[] {
    return [...this._clasificationList];
  }

  getClasification(id: number) {
    this.api.apiClasificationGetClasificationGet$Json({ Id: id }).subscribe(rta => {
      return rta;
    });
  }

  getClasificationList() {
    this.api.apiClasificationGetClasificationListGet$Json().subscribe(rta => {
      this._clasificationList = rta;
    });
    return this._clasificationList;
  }

}