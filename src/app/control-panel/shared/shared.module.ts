import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components';
import { SharedModule } from 'src/app/shared';

const COMPONENTS = [
  NavBarComponent
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
