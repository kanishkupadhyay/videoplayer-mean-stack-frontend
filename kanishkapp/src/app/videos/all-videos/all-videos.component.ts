import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {
  movies:any=[]
  spinner:boolean=true
  constructor(private design:DesignService) { }

  ngOnInit(): void {
    this.design.getAllMovie().subscribe(data=>{
      console.log(data)
      this.movies=data
      this.spinner=false
    })
  }

}
