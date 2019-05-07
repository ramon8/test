import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'control-panel', loadChildren: './control-panel/control-panel.module#ControlPanelModule' },
  { path: '', loadChildren: './main/main.module#MainModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
