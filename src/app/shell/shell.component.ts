import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `<h2>Shell</h2>
    <router-outlet></router-outlet>`
})
export class ShellComponent {
}
