import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Request-Headers': 'content-type',
    'Access-Control-Request-Method': 'POST'
  })
};
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss']
})
export class MypostComponent implements OnInit {
  public userPost: String;
  yes = false
  yesOrNo = true
  showNotification: boolean;
  dataArr: any[] = []
  u: string
  postsList: any[] = []
  tempOwnPost: any[]=[]
  end1: string
  start1: string
  setdate = true
  duedate = false




  constructor(private dataService: ApiService) {

  }

  ngOnInit() {
    const username = sessionStorage.getItem("username");

    this.dataService.shouldGetAllUser().subscribe(res => {
      const a = Object.values(res);
      res.forEach(element => {
        if (element.username == username) {
          this.userPost = element.username
        }
      })
    })
    this.dataService.shouldGetAllPost().subscribe(response=>{
      response.forEach(myItem=>{
        if(myItem.username == username){
          console.log(myItem);
          this.postsList.push(myItem)
          console.log(this.postsList);
          
        }
      })
    })
  }

  // fetch(id=1){
  //   return this.dataService.shouldCheckUsername(id).subscribe(data =>{
  //     this.u = data.UserName
  //     console.log("mypost ",this.u)
  //     this.dataService.getAllPost().subscribe(data =>{
  //       console.log(data)
  //       this.postsList = data

  //     })
  //   })

  // }

  yesClicked() {
    this.setdate = true
    this.duedate = false
    this.end1 = ""
    this.start1 = ""
    // this.yesOrNo = false
    // this.yes = true
  }

  back() {
    this.setdate = false
    this.duedate = true
    // this.yesOrNo = true
    // this.yes = false;
    // this.showNotification = true;
  }
}