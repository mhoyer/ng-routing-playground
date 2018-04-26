import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class InitGuard implements CanActivate {
  canActivate() {
    console.log(`FAKE Init... I am just waiting 1s`);

    return of(true).pipe(
      delay(1000),
      tap(() => console.log(`Init [OK]... continue loading the ShellComponent`))
    );
  }
}
