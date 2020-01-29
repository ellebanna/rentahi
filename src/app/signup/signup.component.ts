import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from '../model'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
<<<<<<< HEAD
  firstname: String;
  lastname: String;
  email: String;
  username: String;
  contact: String;
  password: String;
  public users: userDetails
=======
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  contact: number;
  password: string;
  public users: UserInformation
  public userList: any[] = []
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
  showLogin: boolean = true;
  userDetails = { username: '', password: '',firstname:'',lastname:'',contact:'', email:'' }

<<<<<<< HEAD
  constructor(private router: Router, private dataService: ApiService) {
    this.users = new userDetails()
=======
  public registerStatus: any


  constructor(private router: Router, private dataService: ApiService) {
    // this.users=[]
    this.users = new UserInformation()
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
  }

  ngOnInit() {


  }
  onSignUp() {

    alert('Next step is to login to make sure you can login...')
    this.users = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      contact: this.contact,
      username: this.username,
      password: this.password
    }
<<<<<<< HEAD
    this.dataService.shouldAddUser(this.users).subscribe(data => {
      console.log(data);
      this.router.navigate([''])
    })
=======
    this.userList.push(this.users)
    console.log(this.users);
    this.router.navigate([''])

>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
  }
}
