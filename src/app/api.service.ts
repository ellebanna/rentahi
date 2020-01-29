import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
<<<<<<< HEAD
import { userDetails } from './model';
=======
import { UserInformation } from './signup/users';
import { Posts } from './post-form';
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
  })
};

// const headers = new Headers({'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin' : '*'
// })

@Injectable({
  providedIn: 'root'
})

<<<<<<< HEAD
export class ApiService {
  apiUrl = "http://localhost:3000/";
=======
export  class ApiService {
  apiItem = 'http://localhost:3000/post'
  apiUrl = "http://fakerestapi.azurewebsites.net/api/Users";
  
  
  constructor(private http: HttpClient) {
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155


  }

  shouldGetAllUser(): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'users' , httpOptions);
  }

<<<<<<< HEAD
  shouldAddUser(newUser: any): Observable<userDetails[]> {
    return this.http.post<userDetails[]>(this.apiUrl+ 'users', JSON.stringify(newUser),httpOptions);
  }
  shouldCheckUser(id: any): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'users/'+id , httpOptions);
=======

  shouldCheckUsername(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, httpOptions)
>>>>>>> af6ef08fbadf7238405de35290430f2ec9668155
  }

  addPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.apiItem, post)
  }

  addUser(user: UserInformation): Observable<UserInformation> {
    return this.http.post<UserInformation>(this.apiItem, user, httpOptions)
  }

  getAllPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiItem)
  }
}
