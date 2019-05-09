import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  public controls: { icon: string, name: string, date: Date, actived: boolean }[];

  constructor() {
    this.controls = [
      { icon: 'outlet', name: 'Outlets', date: new Date(), actived: false },
      { icon: 'camera', name: 'Camera', date: new Date(), actived: false },
      { icon: 'bulb', name: 'Lights', date: new Date(), actived: false },
      { icon: 'wifi', name: 'Wifi', date: new Date(), actived: false },
      { icon: 'thermometer', name: 'Thermostats', date: new Date(), actived: false },
    ]
  }
}
