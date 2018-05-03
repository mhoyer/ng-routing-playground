import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { clog } from '../clog';

@Injectable()
export class InitGuard implements CanActivate {
  constructor() {
    clog(InitGuard.name);
  }

  canActivate() {
    clog(`FAKE Init... I am just waiting 2s`, 30);

    return of(true).pipe(
      delay(2000),
      tap(() => clog(`Init [OK]... continue loading the ShellComponent`, 30))
    );
  }
}
