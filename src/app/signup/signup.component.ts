import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation } from './users'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  contact: number;
  password: string;
  public users: UserInformation
  public userList:any[]=[]
  showLogin: boolean = true;
  dataArr: any[] = []

  constructor(private router: Router,private dataService: ApiService) {
    // this.users=[]
    this.users = new UserInformation()
  }

  ngOnInit() {
    return this.dataService.shouldGetAllItem().subscribe(data => (this.dataArr = data));
    
  }
  onSignUp() {
    console.log(this.dataArr);
    alert('Next step is to login to make sure you can login...')
    this.users = {
      firstname:this.firstname,
      lastname: this.lastname,
      email: this.email,
      contact:this.contact,
      username:this.username,
      password:this.password
    }
    this.userList.push(this.users)
    console.log(this.userList);
    this.router.navigate([''])
  }
}
