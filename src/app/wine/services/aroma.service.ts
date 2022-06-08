import { Injectable } from '@angular/core';
import { Aroma } from '../interfaces/aroma.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { AromaService as ApiAromaService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class AromaService {

  public _aromaList: Aroma[] = [
  ];
  public _aroma: Aroma;

  public constructor(private api: ApiAromaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.api.apiAromaGetAromaListGet$Json().subscribe(rta => {
      this._aromaList = rta;
    });
  }

  get aromaList(): Aroma[] {
    return [...this._aromaList];
  }

  getAromaList() {
    this.api.apiAromaGetAromaListGet$Json().subscribe(rta => {
      this._aromaList = rta;
    });
  }

  getAroma(id: number) {
    this.api.apiAromaGetAromaGet$Json( { Id: id }).subscribe(rta => {
      this._aroma = rta;
    });
  }

}