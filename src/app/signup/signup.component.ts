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
  public userList: any[] = []
  showLogin: boolean = true;

  public registerStatus: any


  constructor(private router: Router, private dataService: ApiService) {
    // this.users=[]
    this.users = new UserInformation()
  }

  ngOnInit() {


  }
  onSignUp  ()  {

    alert('Next step is to login to make sure you can login...')
    this.users = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      contact: this.contact,
      username: this.username,
      password: this.password
    }
    this.dataService.UserRegistration(this.users).subscribe(resp =>{
      console.log("Successfull")
      console.log("status",resp)
    });
      // this.userList.push(this.users)
      console.log(this.users);
      this.router.navigate([''])
    
  }
}
