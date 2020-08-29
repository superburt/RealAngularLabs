import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../services/register.service";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const BACKEND_URL = 'http://localhost:3000';


// var object =  [
// { "email":"email@1.com" , "password":"PW1" },
// { "email":"email@2.com" , "password":"PW2" },
// { "email":"email@3.com" , "password":"PW3" }] 

// var i;
// var counter = 0;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string = "";
  pwd: string = "";



  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {

  }
  loginAttempt(){
    let user = {email:this.email, pwd: this.pwd};
    // this.router.navigateByUrl("/account");
    this.httpClient.post(BACKEND_URL + '/api/auth', user, httpOptions)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(user));
      alert("postRes: " +JSON.stringify(data));
      if(data.valid){
        alert("correct");
        
        //   sessionStorage.setItem('id', data.userid.toString());
          console.log(sessionStorage.getItem("id"));
          sessionStorage.setItem('username', data.username); 
        console.log(sessionStorage.getItem('username'));
          // sessionStorage.setItem('birthdate', data.birthdate);
          // sessionStorage.setItem('age', data.age.toString());
        this.router.navigateByUrl("/account");
         
      
      }
      else{
        alert("Credentials incorrect!");
      };
    })
  
  }

}



//   loginAttempt(){
    
//     for (i = 0; i < object.length; i++){
//       if (this.email == object[i].email && this.pwd == object[i].password){
//         this.emailValid = true; 
//         this.passwordValid = true; 
//         counter ++
//         this.router.navigateByUrl('/account');
//       } 
//   }
//     if  (counter < 1) {
//       alert("Credentials incorrect!")
//     }
//     if (typeof(Storage) !== "undefined"){
//       console.log("Storage is ready");
//       sessionStorage.setItem("email", this.email)
//       sessionStorage.setItem("password", this.pwd)
//       console.log(sessionStorage.getItem("email"));
//     }
//   }
// }