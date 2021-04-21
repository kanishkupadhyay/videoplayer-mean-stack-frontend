import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SiteLayoutModule}from './site-layout/site-layout.module'
import {HttpClientModule}from '@angular/common/http';
import {VideosModule}from './videos/videos.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SiteLayoutModule,
    HttpClientModule,
    VideosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
