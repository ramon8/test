//Generic modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [
  CommonModule,
  IonicModule,
  FormsModule,
  RouterModule,
  TranslateModule
];

//Custom components
import {
  TranslationMenuComponent
} from './components';

const COMPONENTS = [
  TranslationMenuComponent
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
