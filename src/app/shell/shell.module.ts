import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { InitGuard } from './init.guard';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule,
    DashboardModule
  ],
  providers: [InitGuard],
  declarations: [ShellComponent]
})
export class ShellModule { }
