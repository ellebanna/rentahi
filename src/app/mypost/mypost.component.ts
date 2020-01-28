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

  constructor(private dataService: ApiService) {

  }

  ngOnInit(){
  }





}
