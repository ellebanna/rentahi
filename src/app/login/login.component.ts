import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username:String;
  private password:String;

  constructor(private router:Router) { }

  ngOnInit() {
    document.body.classList.add('body');
  }
  login(){
    if(this.username === "username" && this.password === "password"){
      alert('Login')
      this.router.navigate(['/dashboard'])
    }else{
      alert('Invalid credentials')
    }
  }

}
