import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {

  public menu: { label: string, selected: boolean, route: string[], icon: string }[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = [
      { label: 'Overview', selected: false, route: ['control-panel', 'overview'], icon: 'home' },
      { label: 'Devices', selected: false, route: ['control-panel', 'devices'], icon: 'laptop' },
      { label: 'Analytics', selected: false, route: [], icon: 'analytics' },
      { label: 'Rules', selected: false, route: [], icon: 'list' },
      { label: 'Gallery', selected: false, route: [], icon: 'images' },
      { label: 'History', selected: false, route: [], icon: 'refresh' },
      { label: 'Settings', selected: false, route: [], icon: 'settings' }
    ]
    this.checkSelectionByRoute();
  }

  public onClickMenuItem(item: any) {
    this.markItemAsSelected(item.label);
    this.router.navigate(item.route);
  }


  private markItemAsSelected(selectedMenu: string) {
    for (const item of this.menu) {
      item.selected = selectedMenu === item.label ? true : false;
    }
  }

  private checkSelectionByRoute(): void {
    this.menu.forEach(x=>x.selected=(x.label.toLowerCase()===this.router.url.split('/')[2])?true:false);
  }
}
