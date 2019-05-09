import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components';
import { SharedModule } from 'src/app/shared';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

const COMPONENTS = [
  NavBarComponent,
  NavMenuComponent
]


import { ControlPanelService } from './services';
const SERVICES = [
  ControlPanelService,
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class ControlPanelSharedModule { }
