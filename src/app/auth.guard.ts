import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { clog } from './clog';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad() {
    clog(`FAKE Auth... I am just waiting 2s`, 70);

    return of(true).pipe(
      delay(2000),
      tap(() => clog(`Auth [OK]... continue loading the ShellModule`, 70))
    );
  }
}
