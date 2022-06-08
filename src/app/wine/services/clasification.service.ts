import { Injectable } from '@angular/core';
import { Clasification } from '../interfaces/clasification.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { ClasificationService as ApiClasificationService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class ClasificationService {

  public _clasificationList: Clasification[] = [
  ];
  public _clasification: Clasification;

  public constructor(private api: ApiClasificationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.api.apiClasificationGetClasificationListGet$Json().subscribe(rta => {
      this._clasificationList = rta;
    });
  }

  get clasificationList(): Clasification[] {
    return [...this._clasificationList];
  }

  getClasificationList() {
    this.api.apiClasificationGetClasificationListGet$Json().subscribe(rta => {
      this._clasificationList = rta;
    });
  }

  getClasification(id: number) {
    this.api.apiClasificationGetClasificationGet$Json( { Id: id }).subscribe(rta => {
      this._clasification = rta;
    });
  }

}