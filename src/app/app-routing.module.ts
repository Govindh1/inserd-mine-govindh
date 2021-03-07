import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { userResolver } from './services/resolve.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'gallery',
    component: GalleryPageComponent,
    resolve: {message: userResolver}
  },
  {
    path: 'about-us',
    component: AboutPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
