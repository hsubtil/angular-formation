// https://jsonplaceholder.typicode.com/users
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.class';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }


}
