import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../services/register.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, public registerService: RegisterService) { }

  email: string = "";
  emailValid = false
  pwd: string = "";
  passwordValid = false

  setItem(){
    this.registerService.setItem("email", this.email);
    this.registerService.setItem("password", this.pwd);
    console.log(this.registerService.jsonItems);
  }
  ngOnInit(): void {
  }

}
