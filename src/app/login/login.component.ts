import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username:String;
  private password:String;

  constructor() { }

  ngOnInit() {
    document.body.classList.add('body');
  }
  login(){
    if(this.username === "username" && this.password === "password"){
      alert('Login')
    }else{
      alert('Invalid credentials')
    }
  }

}
