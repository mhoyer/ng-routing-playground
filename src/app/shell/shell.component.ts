import { Component } from '@angular/core';
import { clog } from '../clog';

@Component({
  selector: 'app-shell',
  template: `<h2>Shell</h2>
    <router-outlet></router-outlet>`
})
export class ShellComponent {
  constructor() { clog(ShellComponent.name); }
}
