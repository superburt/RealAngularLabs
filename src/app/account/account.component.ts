import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../services/register.service";
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from "rxjs";


interface POST {
  title: string;
  body: string;
  };
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  user = {username: sessionStorage.getItem("username"), birthdate: sessionStorage.getItem("birthdate"), age: sessionStorage.getItem("age"), email: sessionStorage.getItem("email"), pwd: sessionStorage.getItem("pwd"), valid: true};
  constructor(private router: Router, public registerService: RegisterService) { }

  email: string = "";
  emailValid = false
  pwd: string = "";
  passwordValid = false

  setItem(){
    console.log(sessionStorage.getItem("pwd"));
    this.registerService.setItem("email", this.email);
    this.registerService.setItem("password", this.pwd);
    console.log(this.registerService.jsonItems);
  }
  ngOnInit(): void {
  }

}
