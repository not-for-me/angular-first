import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ToastsManager } from "ng2-toastr";
import { AngularFire, FirebaseAuthState } from "angularfire2";

@Injectable()
export class SessionAuthGuardService {
  constructor(private router: Router, private toastr: ToastsManager, private af: AngularFire) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.af.auth
      .take(1)
      .map((authState: FirebaseAuthState) => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.toastr.error('로그인 해주세요', '[오류]');
          this.router.navigate(['/']);
        }
      });
  }
}
