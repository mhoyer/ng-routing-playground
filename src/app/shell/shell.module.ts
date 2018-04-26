import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  declarations: [ShellComponent]
})
export class ShellModule { }
