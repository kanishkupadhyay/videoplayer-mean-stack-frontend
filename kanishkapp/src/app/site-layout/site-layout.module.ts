import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule}from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent,FooterComponent,HomeComponent,LoginComponent,SignupComponent]
})
export class SiteLayoutModule { }
