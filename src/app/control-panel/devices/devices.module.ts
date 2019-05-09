import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesRoutingModule } from './devices-routing.module';

import { DevicesComponent } from './devices.component';
import { SharedModule } from 'src/app/shared';
import { ControlPanelSharedModule } from '../shared';

const COMPONENTS = [
  DevicesComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule,
    ControlPanelSharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class DevicesModule { }
