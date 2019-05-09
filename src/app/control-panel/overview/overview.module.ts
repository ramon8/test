import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { ControlPanelSharedModule } from '../shared';
import { SharedModule } from 'src/app/shared';

import { OverviewSharedModule } from './shared';
import { CameraPanelComponent } from './camera-panel';
import { ConsumptionDayPanelComponent } from './consumption-day-panel';
import { ConsumptionRoomPanelComponent } from './consumption-room-panel';
import { StatusPanelComponent } from './status-panel';
import { DeviceLimitPanelComponent } from './device-limit-panel';

const COMPONENTS = [
  OverviewComponent,
  CameraPanelComponent,
  ConsumptionDayPanelComponent,
  ConsumptionRoomPanelComponent,
  StatusPanelComponent,
  DeviceLimitPanelComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ControlPanelSharedModule,
    SharedModule,
    OverviewSharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class OverviewModule { }
