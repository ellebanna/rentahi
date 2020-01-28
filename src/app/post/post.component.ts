import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Posts } from '../post-form';
import { UserInformation } from '../signup/users';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number
  public user: Array<any> = []
  public posts: Array<Posts> =[]
  public user2:Array<UserInformation>=[]
  public tobePassed:Posts;
  public u:string
  showpost = false



  image1: File
  category1: String
  title1: String
  brand1: String
  price1: number
  description1: String

  constructor(private route: ActivatedRoute, private dataService: ApiService) { }

  ngOnInit() {
    this.fetch()
  }
  fetch(id = 1) {
    this.dataService.shouldCheckUsername(id).subscribe(data => {
      this.u = data.UserName
      this.user.push(data)
    })
  }
  onSubmit(form) {
    console.log("user post ", this.user)
    console.log("sahfjsahdfghdugjhhdfg ",this.u)
    
    this.tobePassed={
      username: this.u,
      image: this.image1,
      category:this.category1,
      title: this.title1,
      brand: this.brand1,
      price: this.price1,
      description:this.description1
    }
    this.posts.push(this.tobePassed)
    console.log("posts ", this.posts)


    form.form.reset()
  }

  
  

}
