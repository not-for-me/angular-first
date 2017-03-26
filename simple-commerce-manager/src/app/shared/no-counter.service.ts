import { Injectable, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ScmDomain } from './scm-shared-util';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoCounterService {
  constructor(private angularFire: AngularFire) { }

  get(domain: ScmDomain): Observable<number> {
    return this._getNumber$(domain).map(o => o.$value || 0);
  }

  incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
      if (err) throw new Error(`failed to increase number`);

      if (comitted) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this._getNumber$(domain).$ref.transaction(num => (num || 0) + 1, onComplete);

    return id$;
  }

  private _getNumber$(domain: ScmDomain) {
    return this.angularFire.database.object(`/numbers/${domain}`);
  }
}
