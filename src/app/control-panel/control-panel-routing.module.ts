import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';

const routes: Routes = [
  {
    path: '', component: ControlPanelComponent, children: [
      { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
      { path: 'devices', loadChildren: './devices/devices.module#DevicesModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule { }
