import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { clog } from './clog';

const routes: Routes = [{
  path: '',
  loadChildren: './shell/shell.module#ShellModule',
  canLoad: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { clog(AppRoutingModule.name); }
}
