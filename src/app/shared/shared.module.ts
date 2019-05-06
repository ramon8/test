//Generic modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const MODULES = [
  CommonModule,
  IonicModule,
  FormsModule,
  RouterModule,
];

//Custom components
import {
  NavBarComponent
} from './components';

const COMPONENTS = [
  NavBarComponent,
];


@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
