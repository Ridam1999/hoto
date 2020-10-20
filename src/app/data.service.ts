import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flip } from './flip';
import { Orchestra } from './orchestra';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  url="http://localhost:8090/";
  constructor(private http: HttpClient) { }

  public getOrchestra(){
   return this.http.get<Orchestra[]>(this.url+"orchestra/details");
   }

   public getFlip(){
    return this.http.get<Flip[]>(this.url+"flip/details");
    }


}
