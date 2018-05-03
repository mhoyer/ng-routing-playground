import { Component } from '@angular/core';
import { clog } from '../clog';

@Component({
  selector: 'app-dashboard',
  template: `<h3>Dashboard</h3>
    <a href="/">restart</a>`
})
export class DashboardComponent {
  constructor() { clog(DashboardComponent.name); }
}
