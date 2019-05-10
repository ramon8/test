import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera-panel',
  templateUrl: './camera-panel.component.html',
  styleUrls: ['./camera-panel.component.scss'],
})
export class CameraPanelComponent implements OnInit {

  @ViewChild('slider') slider;

  public slideOpts = {
    simulateTouch: false,
  }

  public camerasViews = [
    { url: './../../../../assets/img/camera/living_room.jpg', actived: true },
    { url: './../../../../assets/img/camera/bedroom.jpg', actived: false },
    { url: './../../../../assets/img/camera/garden.jpg', actived: false },
    { url: './../../../../assets/img/camera/kitchen.jpg', actived: false },
  ]

  constructor() { }

  ngOnInit() { }

  public onClickCameraSelector(index: number): void {
    this.markItemAsSelected(index);
    
  }

  private markItemAsSelected(i: number) {
    this.camerasViews.forEach((item, index) => {
      item.actived = i === index ? true : false;
    });
    this.slider.slideTo(i);
  } // markItemAsSelected
}
