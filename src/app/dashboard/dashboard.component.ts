import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts = 
    {
    owner:'',
    image: '../assets/shovel.jpg',
    title: 'Shovel',
    category:'Sample',
    brand:'Sample Brand',
    price: 100.00,
    description:'Sample Description'
  }

  

  constructor() { }

  ngOnInit() {
  }

}
