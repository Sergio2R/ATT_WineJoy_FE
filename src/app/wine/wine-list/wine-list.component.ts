import { Component, Input } from '@angular/core';
import { WineService } from '../services/wine.service';


@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent {
  get wineList() {
    return this.wineService.wineList;
  }

  public deleteById(id?: number){
    this.wineService.deleteWine(id);
  }

  public updateById(id?: number){
    this.wineService.getWine(id);
    
  }

  constructor(private wineService: WineService) {
  }

}





