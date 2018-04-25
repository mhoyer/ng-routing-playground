import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad() {
    console.log(`FAKE Auth... I am just waiting 1s`);

    return of(true).pipe(
      delay(1000),
      tap(() => console.log(`Auth [OK]... continue loading the ShellModule`))
    );
  }
}
