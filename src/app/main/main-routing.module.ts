import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

//Components
import { LoginComponent } from './login';
import { LogupComponent } from './logup';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'logIn', component: LoginComponent },
      { path: 'logUp', component: LogupComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
      { path: '**', redirectTo: 'logIn', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'logIn', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
