import { NgModule } from '@angular/core';

//Components
import { ControlPanelComponent } from './control-panel.component';

const COMPONENTS = [
  ControlPanelComponent
]


//Modules
import { CommonModule } from '@angular/common';
import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { SharedModule } from '../shared';
import { ControlPanelSharedModule } from './shared';
import { OverviewSharedModule } from './overview/shared';

const MODULES = [
  CommonModule,
  ControlPanelRoutingModule,
  SharedModule,
  ControlPanelSharedModule,
  OverviewSharedModule
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ControlPanelModule { }
