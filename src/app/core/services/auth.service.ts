import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable({providedIn: 'root'})


export class AuthService {
  private readonly url: string = 'https://reqres.in/api/login'
  private readonly storageName: string = 'angular-token'

  constructor(private http: HttpClient) {}

  public login (payload: {email: string, password: string}): Observable<{ token: string}> {
    return this.http.post<{token: string}>(this.url, payload).pipe(
      tap((res: {token}) => {
        this.token = res.token
    }))
  }


  set token(val: string) {
    localStorage.setItem(this.storageName, val)
  }

  get token() {
    return localStorage.getItem(this.storageName)
  }
}
