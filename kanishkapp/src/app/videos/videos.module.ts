import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { ParticularVideoComponent } from './particular-video/particular-video.component';
import {RouterModule}from '@angular/router'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AllVideosComponent,
    ParticularVideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports:[
    AllVideosComponent,
    ParticularVideoComponent
  ]
})
export class VideosModule { }
