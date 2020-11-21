import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { PostsModule } from './posts/posts.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ErrorComponent],
  imports: [AngularFireModule.initializeApp({
    apiKey: 'AIzaSyAt9R5Vnnv1AYlg8sXAMPL0zQTAAHLzngs',
    authDomain: 'lssocials.firebaseapp.com',
    storageBucket: 'lssocials.appspot.com',
    projectId: 'lssocials',
  }),
  AngularFireStorageModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, AngularMaterialModule, PostsModule],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],

  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
