import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserService } from './services/user.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { userResolver } from './services/resolve.service';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot } from '@angular/router';
export const myHero = {
  // ...
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    GalleryPageComponent,
    AboutPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxWebstorageModule.forRoot({
      prefix: 'insuredMine'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [LoginPageComponent],
  providers: [UserService, 
    // {
    //   provide: 'userResolver',
    //   useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => myHero
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
