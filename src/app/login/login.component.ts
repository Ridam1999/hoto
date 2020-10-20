import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg="";
  user=new User();
  user1=new User();
  constructor(private _service: LoginService, private _router:Router) { }

  ngOnInit() {
  }

  loginUser(){
this._service.loginUserRemote(this.user).subscribe(
  data =>{console.log("response recieved");
  console.log(this.user1.accessRole);
this.user1=data;
if(this.user1.accessRole=="admin"){
  this._router.navigate(['/admin']);
}
else{
  this._router.navigate(['/home']);
}
console.log(this.user1.accessRole);
// console.log(this.user1);


},
  error =>{console.log("exception occured")
 this.msg="Bad Credentials";
}
)
  }

}
