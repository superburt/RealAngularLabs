import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

export class AppComponent {
  title = 'week5Angular';
  constructor(private router: Router){}
  
  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login')

  }
}
