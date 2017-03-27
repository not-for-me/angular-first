import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from '../firebase.config';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { CustomToastOptions } from './custom-toast-options'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ScmMainModule } from './scm-main/scm-main.module'
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* Angular Modules*/
    BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule,

    /* App Modules */
    ScmMainModule, ProductModule, CategoryModule,
    AppRoutingModule, SharedModule,
    /* 3rd Modules */
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ToastModule.forRoot(),
    NgbPaginationModule.forRoot(),
  ],
  providers: [{ provide: ToastOptions, useClass: CustomToastOptions }],
  bootstrap: [AppComponent]
})
export class AppModule { }
