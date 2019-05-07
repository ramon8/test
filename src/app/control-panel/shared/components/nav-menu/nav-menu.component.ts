import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {

  public menu: { label: string, selected: boolean, route: string[], icon: string }[]

  constructor(private router: Router) { }

  ngOnInit() {
    this.menu = [
      { label: 'Overview', selected: true, route: ['control-panel','overview'], icon: 'home' },
      { label: 'Devices', selected: false, route: [], icon: 'laptop' },
      { label: 'Analytics', selected: false, route: [], icon: 'analytics' },
      { label: 'Rules', selected: false, route: [], icon: 'list' },
      { label: 'Gallery', selected: false, route: [], icon: 'images' },
      { label: 'History', selected: false, route: [], icon: 'refresh' },
      { label: 'Settings', selected: false, route: [], icon: 'settings' }
    ]
  }

  private markItemAsSelected(selectedMenu: string) {
    for (const item of this.menu) {
      item.selected = selectedMenu === item.label ? true : false;
    }
  }

  public onClickMenuItem(item:any){
    this.markItemAsSelected(item.label);
    this.router.navigate(item.route);
  }

}
