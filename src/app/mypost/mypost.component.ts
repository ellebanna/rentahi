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

  yes = false
  yesOrNo = true
  showNotification: boolean;
  dataArr: any[] = []


  constructor(private dataService: ApiService) {

  }

  ngOnInit() {
    return this.dataService.shouldGetAllItem().subscribe(data => (this.dataArr = data));
  }

  yesClicked() {
    this.yesOrNo = false
    this.yes = true
  }

  back() {
    this.yesOrNo = true
    this.yes = false;
    this.showNotification = true;

    // setTimeout(function () {
    //   this.showNotification = true;
    // }, 3000);
  }

}
