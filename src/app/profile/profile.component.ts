import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from "../services/register.service";
import {User} from "../user";

@Component({
  selector: 'app-account',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = 0;
  username = "";
  pwd = "";
  age = "0";
  birthdate = '';
  newuser:User;

  constructor(private router: Router, private registerService: RegisterService) { }
  setItem(){
    this.registerService.setItem(this.username , this.pwd);
    console.log(this.registerService.jsonItems);
  }

  ngOnInit() {
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (this.newuser !=null ){
      this.username = this.newuser.username;
      this.age=this.newuser.age;
      this.birthdate = this.newuser.birthdate;
    }else{
      this.router.navigate(['/login']);
    }
  }
  updateDetails(){
    // event.preventDefault();
    if (this.newuser !=null ){
      this.username = this.newuser.username;
      this.age=this.newuser.age;
      this.birthdate = this.newuser.birthdate;
      sessionStorage.setItem('currentUser', JSON.stringify(this.newuser));
      this.router.navigate(['/account']);
    }

  }
}