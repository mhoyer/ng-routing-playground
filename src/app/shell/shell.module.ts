import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { InitGuard } from './init.guard';
import { clog } from '../clog';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    ShellRoutingModule,
  ],
  providers: [InitGuard],
  declarations: [ShellComponent]
})
export class ShellModule {
  constructor() { clog(ShellModule.name); }
}
