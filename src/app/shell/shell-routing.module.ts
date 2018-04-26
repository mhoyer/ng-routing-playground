import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InitGuard } from './init.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [InitGuard],
    children: [
      {
        path: '', pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
