import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { ControlPanelSharedModule } from '../shared';
import { SharedModule } from 'src/app/shared';

const COMPONENTS = [
  OverviewComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ControlPanelSharedModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class OverviewModule { }
