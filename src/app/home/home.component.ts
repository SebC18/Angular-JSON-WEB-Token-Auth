import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly API_URL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  signIn(){
    let  _token = '';

    this.http.get(this.API_URL + '/token/sign')
      .subscribe(
        (res) => {
          if (Object.values(res)) {
            _token = Object.values(res).toString(); 
            localStorage.setItem('token', _token); //token here is stored in a local storage
            console.log('Token stored in local storage,\nGo to path1 in under 15 seconds or it will expire.\nToken value :', _token);
          }
        },
        (err) => {
          console.log(err);
        }
      );    
  }

  getPath() {
    this.http.get(this.API_URL + '/path1') //path1 is then requested    
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );       
  }

}
