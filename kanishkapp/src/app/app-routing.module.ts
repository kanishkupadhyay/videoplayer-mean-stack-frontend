import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site-layout/home/home.component';
import { LoginComponent } from './site-layout/login/login.component';
import { AllVideosComponent } from './videos/all-videos/all-videos.component';
import { ParticularVideoComponent } from './videos/particular-video/particular-video.component';
import {SignupComponent}from './site-layout/signup/signup.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'all-videos',component:AllVideosComponent},
  {path:'all-videos/watch/:name/:id',component:ParticularVideoComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
