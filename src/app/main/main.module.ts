import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { LoginComponent } from './login';
import { LogupComponent } from './logup';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonComponent } from './common';

const COMPONENTS = [
  MainComponent,
  LoginComponent,
  LogupComponent,
  ForgotPasswordComponent,
  CommonComponent
]

//Modules
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared';
import { MainSharedModule } from './shared';


const MODULES = [
  CommonModule,
  MainRoutingModule,
  SharedModule,
  MainSharedModule
]

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    MainSharedModule
  ]
})
export class MainModule { }
