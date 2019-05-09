import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './component';
import { SharedModule } from 'src/app/shared';

const COMPONENTS = [
  FooterMenuComponent
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
export class OverviewSharedModule { }
