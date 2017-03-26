import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'scm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = '상품관리 시스템';
  session$: Observable<boolean>;
  sessionBtnName = '로그인';

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.session$ = this.af.auth.map((authState: FirebaseAuthState) => !!authState);
    this.session$.subscribe(auth => this.sessionBtnName = auth ? '로그아웃' : '로그인');
  }

  checkSession() {
    this.session$.take(1).subscribe(s => s ? this.af.auth.logout() : this.af.auth.login());
  }

  searchProduct(no: number) {
    console.log(`search: ${no}`);
  }
}
