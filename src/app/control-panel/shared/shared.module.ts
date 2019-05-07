import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components';
import { SharedModule } from 'src/app/shared';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

const COMPONENTS = [
  NavBarComponent,
  NavMenuComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ControlPanelSharedModule { }
