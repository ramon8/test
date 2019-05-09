import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelService {

  showFooter: boolean;

  constructor() { 
    this.showFooter = false;
  }
}
