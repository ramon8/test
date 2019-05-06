import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';

const MODULES = [
  CommonModule,
  SharedModule
]

//custom components

const COMPONENTS = [

]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MainSharedModule { }
