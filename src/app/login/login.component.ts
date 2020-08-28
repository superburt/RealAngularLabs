import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../services/register.service";


var object =  [
{ "email":"email@1.com" , "password":"PW1" },
{ "email":"email@2.com" , "password":"PW2" },
{ "email":"email@3.com" , "password":"PW3" }] 

var i;
var counter = 0;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string = "";
  emailValid = false
  pwd: string = "";
  passwordValid = false


  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  loginAttempt(){
    
    for (i = 0; i < object.length; i++){
      if (this.email == object[i].email && this.pwd == object[i].password){
        this.emailValid = true; 
        this.passwordValid = true; 
        counter ++
        this.router.navigateByUrl('/account');
      } 
  }
    if  (counter < 1) {
      alert("Credentials incorrect!")
    }
    if (typeof(Storage) !== "undefined"){
      console.log("Storage is ready");
      sessionStorage.setItem("email", this.email)
      sessionStorage.setItem("password", this.pwd)
      console.log(sessionStorage.getItem("email"));
    }
  }
}