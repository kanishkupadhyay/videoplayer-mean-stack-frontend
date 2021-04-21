import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
baseUrl="http://localhost:4000/movies/"

  constructor(private http:HttpClient) {
   }
   getAllMovie(){
     return this.http.get(this.baseUrl)
   }
   watchParticularMovie(_id:any){
     return this.http.get(`${this.baseUrl}${_id}`)
   }
}
