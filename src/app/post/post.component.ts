import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Posts } from '../post-form';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number
  public user: Array<any> = []
  public posts: Array<Posts> = []
  public tobePassed: Posts;
  showpost = false
  image1: string
  category1: string
  title1: string
  brand1: string
  price1: number
  description1: string

  public feeds: []

  constructor(private http: HttpClient, private dataService: ApiService) { }

  ngOnInit() {
  }

  post(form) {
    const Username = sessionStorage.getItem("username");
    console.log("user post ", this.user)
    this.tobePassed = {
      username: Username,
      image: this.image1,
      category:this.category1,
      title: this.title1,
      brand: this.brand1,
      price: this.price1,
      description:this.description1
    }
    this.dataService.shouldAddPost(this.tobePassed).subscribe(data =>{
      console.log("postData ",data)
    })
    this.posts.push(this.tobePassed)
    console.log("post ",this.posts)
    alert("Already Posted")
    form.form.reset()
  }
}