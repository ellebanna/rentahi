import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserInformation } from './signup/users';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = "http://fakerestapi.azurewebsites.net/api/Users";

  constructor(private http: HttpClient) { }

  shouldGetUser(): Observable<any> {
    return this.http.get<UserInformation[]>(this.apiUrl);
  }

  shouldCheckUsername(id: any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`,httpOptions)
  }
}
