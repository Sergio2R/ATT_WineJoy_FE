import { Injectable } from '@angular/core';
import { Sweetness } from '../interfaces/sweetness.interface';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { SweetnessService as ApiSweetnessService } from 'src/app/api/services';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class SweetnessService {

  public _sweetnessList: Sweetness[] = [
  ];
  public _sweetness: Sweetness;

  public constructor(private api: ApiSweetnessService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.api.apiSweetnessGetSweetnessListGet$Json().subscribe(rta => {
      this._sweetnessList = rta;
    });
  }

  get sweetnessList(): Sweetness[] {
    return [...this._sweetnessList];
  }

  getSweetnessList() {
    this.api.apiSweetnessGetSweetnessListGet$Json().subscribe(rta => {
      this._sweetnessList = rta;
    });
  }

  getSweetness(id: number) {
    this.api.apiSweetnessGetSweetnessGet$Json( { Id: id }).subscribe(rta => {
      this._sweetness = rta;
    });
  }

}