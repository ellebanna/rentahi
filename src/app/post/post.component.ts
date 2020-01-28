import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  image1:File
  category1:String
  title1: String
  brand1:String
  price1:number
  description1:String
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form){
    console.log(form.form.value) 
    console.log("try", this.image1, this.category1, this.title1, this.brand1, this.price1, this.description1)
    alert("Successfull")
    form.form.reset()
  }

}
