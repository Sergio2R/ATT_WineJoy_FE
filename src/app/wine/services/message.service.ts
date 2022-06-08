import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from 'src/app/api/services';

@Injectable()
export class MessageService {

  constructor(
    private router:Router,
    private wineService:WineService
  ) { }

  private data;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}