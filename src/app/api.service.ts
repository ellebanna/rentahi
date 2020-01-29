import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { userDetails } from './model';

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

export class ApiService {
  apiUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  shouldGetAllUser(): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'users' , httpOptions);
  }

  shouldAddUser(newUser: any): Observable<userDetails[]> {
    return this.http.post<userDetails[]>(this.apiUrl+ 'users', JSON.stringify(newUser),httpOptions);
  }
  shouldCheckUser(id: any): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.apiUrl+ 'users/'+id , httpOptions);
  }

}
