import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { clog } from './clog';

@Component({
  selector: 'app-root',
  template: `
    <div [hidden]="!loading" class="loader">
      <h2>Loading...</h2>
    </div>
    <div [hidden]="loading" class="router-output">
      <h1>AppComponent</h1>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent implements AfterViewInit {
  loading = true;

  constructor(private router: Router) {
    clog(AppComponent.name, 10);
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}
