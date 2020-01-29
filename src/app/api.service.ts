import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserInformation } from './signup/users';
import { itemModel } from './dashboard/item'
import { Posts } from './post-form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Request-Headers': 'content-type',
    'Access-Control-Request-Method': 'POST'
  })
};

@Injectable({
  providedIn: 'root'
})

export  class ApiService {
  apiItem = 'http://localhost:3436/'
  apiUrl = "http://fakerestapi.azurewebsites.net/api/Users";
  
  
  constructor(private http: HttpClient) {

  }

  shouldGetUser(): Observable<any> {
    return this.http.get<UserInformation[]>(this.apiUrl);
  }


  shouldGetAllItem(): Observable<any> {
    return this.http.get<itemModel[]>(this.apiItem);
  }

  shouldCheckUsername(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, httpOptions)
  }

  addPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.apiItem, post, httpOptions)
  }
  addUser(user: UserInformation): Observable<UserInformation> {
    return this.http.post<UserInformation>(this.apiItem, user, httpOptions)
  }
}
