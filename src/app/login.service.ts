import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  
  public loginUserRemote(user:User):Observable<any>{
   return this._http.post<any>("http://localhost:8090/login",user);
  }

  
}
