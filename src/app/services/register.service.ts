import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs'

interface POST{
  title: string;
  body: string; 
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "";
  title = "";
  jsonItems = {};

  setItem(key, item){
    this.jsonItems[key] = item 
  }

  getItem(key){
    return this.jsonItems[key];
  }
  constructor(private http: HttpClient) { }

  getNewData(){
    this.http.get<POST>(this.url).subscribe(res=> {
      this.title = res.title;
    })
  }
}
