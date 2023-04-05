import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  // login(credentials: { username: string, password: string }): Observable<any> {
  //   return this.http.get(this.apiUrl, { params: { username: credentials.username, password: credentials.password } }).pipe(
  //     tap((response: any) => {
  //       localStorage.setItem('token', JSON.stringify(response[0]));
  //     })
  //   )
  // }
  login(): Observable<any> {
    return this.http.get(this.apiUrl+'users').pipe(
      tap((response: any) => {
        localStorage.setItem('token', JSON.stringify(response[0]));
      })
    )
  }
  logout() {
    localStorage.removeItem('token');
  }
}
