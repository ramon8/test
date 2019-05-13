import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-consumption-room-panel',
  templateUrl: './consumption-room-panel.component.html',
  styleUrls: ['./consumption-room-panel.component.scss'],
})
export class ConsumptionRoomPanelComponent implements OnInit {

  roomCompsumption: any[];

  constructor() {
    this.roomCompsumption = [
      { name: 'Living Room', percent: '16' },
      { name: 'Studio', percent: '22' },
      { name: 'Luca\'s Bedroom', percent: '11' },
      { name: 'Garage', percent: '39' },
      { name: 'Kitchen', percent: '12' }
    ]
  }

  ngOnInit() {
    new Chartist.Pie('#pie', {
      series: this.returnPercentCompsumption(this.roomCompsumption),
    }, {
        donut: true,
        donutWidth: 20,
        donutSolid: true,
        startAngle: 0,
        showLabel: false
      });
  }

  private returnPercentCompsumption(roomCompsumption: any[]): any[] {
    return roomCompsumption.map((x, index) => {
      return { value: x.percent }
    });
  }

}
